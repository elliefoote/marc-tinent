export const handler = async () => {
    // You need to put your instagram user id here
    const userId = process.env.INSTAGRAM_USER_ID;
    // You need to put your instagram access token here
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

    // Get latest post
    const url = `https://graph.instagram.com/v21.0/me/media`;
    const response = await fetch(url, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
    const data = await response.json();
    console.log(data)

    if (!data.data || data.data.length === 0) {
        return {
            statusCode: 404,
            body: 'No posts found',
        };
    }
    const posts = data.data;

    // Fetch images from the post
    const mediaUrls = [];
    if (posts.length > 0) {
        const firstPost = posts[0];
        const childrenUrl = `https://graph.instagram.com/${firstPost.id}/children?fields=id,media_type,media_url`;
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
    }

    return {
        statusCode: 200,
        body: JSON.stringify(mediaUrls),
    };
};
