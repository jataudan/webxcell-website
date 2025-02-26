import axios from "axios";

export const fetchBlogPostWithComments = async (slug) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/blog-posts`,
      {
        params: {
          filters: { slug },
          populate: {
            blog_comments: {
              populate: "*", // Ensures all comment fields are included
            },
          },
        },
      }
    );

    return response.data.data[0]; // Return the first matching blog post
  } catch (error) {
    console.error("Error fetching blog post:", error.response?.data || error);
  }
};
