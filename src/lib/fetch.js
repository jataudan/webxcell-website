import { flattenAttributes } from "@/lib/utils";

export async function fetchData(url, authToken) {
  const headers = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  };

  try {
    const response = await fetch(url, authToken ? headers : {});
    const data = await response.json();
    if (!response.ok) {
      //   console.log("Fetch failed:", response.status, response.statusText);
      //   throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    return flattenAttributes(data);
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}
