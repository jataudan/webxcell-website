import axios from "axios";

export const createContactUsForm = async (formData) => {
  try {
    const response = await axios.post(
      //   `http://localhost:4008/api/contact/get-in-touch`,
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/contact-us-forms`,
      { data: formData },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response?.data;
  } catch (error) {
    console.error("Error submitting form:", error?.response?.data || error);
    return null;
  }
};
