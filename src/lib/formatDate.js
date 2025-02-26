import { format, parse } from "date-fns";

export const formatDate = (dateString) => {
  return format(new Date(dateString), "MMMM dd, yyyy");
};

export const getMonth = (dateString) => {
  return format(new Date(dateString), "MMMM");
};

export const getDay = (dateString) => {
  return format(new Date(dateString), "dd");
};

export const getDateTime = (dateTimeString) => {
  return format(dateTimeString, "MMMM dd, yyyy 'at' hh:mm a");
};
export const getTime = (timeString) => {
  try {

    // Adjust format to match input string
    const parsedTime = parse(timeString, "HH:mm:ss", new Date());

    if (isNaN(parsedTime)) {
      throw new Error("Invalid date format");
    }

    return format(parsedTime, "hh:mm a");
  } catch (error) {
    console.error("Error parsing time:", error.message);
    return "Invalid Time";
  }
};
