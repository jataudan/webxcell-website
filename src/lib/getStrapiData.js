import axios from "axios";

export const fetchStrapiData = async (path, query) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${path}${query}`
    );
    return response?.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};
