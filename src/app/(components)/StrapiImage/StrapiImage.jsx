import Image from "next/image";
import { getStrapiMedia } from "@/lib/utils";

export function StrapiImage({ src, alt, height, width, className }) {
  if (!src) return null;
  const imageUrl = getStrapiMedia(src);
  const imageFallback = `https://placehold.co/${width}x${height}`;

  console.log('imageUrl', imageUrl)

  return (
    <Image
      src={imageUrl ?? imageFallback}
      alt={alt ?? "Image"}
      height={height}
      width={width}
      className={className}
    />
  );
}
