export const handler = async () => {
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

    if (!accessToken) {
        return {
            statusCode: 500,
            body: 'Instagram access token is not set',
        };
    }

    // Get latest post
    const url = `https://graph.instagram.com/v21.0/me/media`;
    const response = await fetch(url, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
    const data = await response.json();

    if (!data.data || data.data.length === 0) {
        return {
            statusCode: 404,
            body: 'No posts found',
        };
    }
    const latestPost = data.data[0];

    // Fetch images from the post
    const mediaUrls = [];
    const childrenUrl = `https://graph.instagram.com/${latestPost.id}/children?fields=id,media_type,media_url`;
    const childrenResponse = await fetch(childrenUrl, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    const childrenData = await childrenResponse.json();
    console.log(childrenData);

    if (childrenData.data && childrenData.data.length > 0) {
        for (const child of childrenData.data) {
            if (child.media_url) {
                mediaUrls.push(child.media_url);
            }
        }
    }

    return {
        statusCode: 200,
        body: JSON.stringify(mediaUrls),
    };
};
