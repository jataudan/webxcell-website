export function flattenAttributes(data) {
  if (
    typeof data !== "object" ||
    data === null ||
    data instanceof Date ||
    typeof data === "function"
  ) {
    return data;
  }

  if (Array.isArray(data)) {
    return data.map((item) => flattenAttributes(item));
  }

  let flattened = {};

  for (let key in data) {
    if (!data.hasOwnProperty(key)) continue;

    if (
      (key === "attributes" || key === "data") &&
      typeof data[key] === "object" &&
      !Array.isArray(data[key])
    ) {
      Object.assign(flattened, flattenAttributes(data[key]));
    } else {
      flattened[key] = flattenAttributes(data[key]);
    }
  }

  return flattened;
}

export function getStrapiURL() {
  return process.env.NEXT_PUBLIC_STRAPI_BASE_URL ?? "http://127.0.0.1:1337";
}

export function getStrapiMedia(url) {
  if (url == null) return null;
  if (url.startsWith("data:")) return url;
  if (url.startsWith("http") || url.startsWith("//")) return url;
  return `${getStrapiURL()}${url}`;
}
