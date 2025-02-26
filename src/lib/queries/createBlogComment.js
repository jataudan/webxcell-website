import axios from "axios";
import { formatISO } from "date-fns";

export const createBlogComment = async (blogPostId, formData) => {
  const formattedData = {
    ...formData,
    dateTime: formatISO(new Date()), // Get current date in ISO format
  };

  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/blog-comments`,

      {
        data: {
          blog_post: blogPostId,
          comments: [formattedData],
        },
      },

      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response?.data;
  } catch (error) {
    console.error("Error posting comment:", error.response?.data);
  }
};
