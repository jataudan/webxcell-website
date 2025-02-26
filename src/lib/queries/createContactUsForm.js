import axios from "axios";

export const createContactUsForm = async (formData) => {
    try {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/contact-us-forms`,
            { data: formData }, // Strapi requires wrapping data in an object
            {
                headers: {
                    "Content-Type": "application/json", // Sending JSON payload
                },
            }
        );

        return response?.data;
    } catch (error) {
        console.error("Error submitting form:", error?.response?.data || error);
        return null;
    }
};
