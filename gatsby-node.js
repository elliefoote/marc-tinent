require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const fetch = require("node-fetch");
const crypto = require("crypto");
const querystring = require("querystring");
const { createRemoteFileNode } = require("gatsby-source-filesystem");

const config = {
  pageSize: 1,
  access_token: process.env.INSTAGRAM_ACCESS_TOKEN,
  user_id: process.env.INSTAGRAM_USER_ID,
};

const createInstagramFileNode = async (
  node,
  getCache,
  createNode,
  createNodeId
) => {
  // Use the thumbnail for video
  const mediaUrl =
    node.media_type === "VIDEO" ? node.thumbnail_url : node.media_url;
  let fileNode;
  try {
    fileNode = await createRemoteFileNode({
      url: mediaUrl,
      parentNodeId: node.id,
      getCache,
      createNode,
      createNodeId,
    });
  } catch (e) {
    console.error(e);
  }

  if (fileNode) {
    node.localImage___NODE = fileNode.id; // TODO: remove in the future
    node.localFile___NODE = fileNode.id;
  }
};

// Create local file node for images and albums
const createInstagramNode = async (
  node,
  getCache,
  createNode,
  createNodeId
) => {
  if (node.internal.type === "InstagramContent") {
    await createInstagramFileNode(node, getCache, createNode, createNodeId);
    if (node.album && node.album.length > 0) {
      await Promise.all(
        node.album.map(async (albumNode) =>
          createInstagramFileNode(albumNode, getCache, createNode, createNodeId)
        )
      );
    }
  }
};

exports.sourceNodes = async ({ actions, createNodeId, getCache }) => {
  const { createNode } = actions;
  const apiOptions = querystring.stringify({
    limit: config.pageSize,
    access_token: config.access_token,
  });
  const apiUrl = `https://graph.instagram.com/${config.user_id}/media?fields=id,media_url,media_type,permalink,timestamp,caption,username,thumbnail_url,children{id,media_url,media_type,thumbnail_url,timestamp}&${apiOptions}`;

  // Helper function to fetch and parse data to JSON
  const fetchAndParse = async (api) => {
    const data = await fetch(api);
    const response = await data.json();

    return response;
  };

  // Recursively get data from Instagram api
  const getData = async (url) => {
    let response = await fetchAndParse(url);
    if (response.error !== undefined) {
      console.error("\nINSTAGRAM API ERROR: ", response.error.message);
    }
    return response.data;
  };

  // Create nodes
  const createNodes = async (API) => {
    let data = await getData(API).then((res) => res);
    for (const item of data) {
      if (
        item.id !== undefined &&
        ["IMAGE", "CAROUSEL_ALBUM", "VIDEO"].includes(item.media_type)
      ) {
        const nodeData = await processMedia(item);
        createNode(nodeData);
      }
    }
  };

  // Processes a media to match Gatsby's node structure
  const processMedia = async (media) => {
    media.album =
      media.children &&
      media.children.data.length &&
      media.children.data.map((node) => node);
    const nodeId = createNodeId(`instagram-media-${media.id}`);
    const nodeContent = JSON.stringify(media);
    const nodeContentDigest = crypto
      .createHash("md5")
      .update(nodeContent)
      .digest("hex");

    const nodeData = Object.assign({}, media, {
      id: nodeId,
      media_id: media.id,
      parent: null,
      children: [],
      internal: {
        type: `InstagramContent`,
        content: nodeContent,
        contentDigest: nodeContentDigest,
      },
    });

    // Create local image node
    await createInstagramNode(nodeData, getCache, createNode, createNodeId);

    return nodeData;
  };

  return createNodes(apiUrl);
};
