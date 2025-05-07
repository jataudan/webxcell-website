import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";

const RichText = ({ content }) => {
  if (!content) return <p>No content available.</p>;

  const imageCount = countImages(content);

  return (
    <ReactMarkdown
      rehypePlugins={[rehypeSanitize]}
      components={{
        img: ({ node, ...props }) => {
          let style = {};
          if (imageCount === 1) {
            style = {
              width: "500px",
              height: "500px",
              objectFit: "cover",
              display: "block",
              margin: "20px 0",
            };
          } else if (imageCount === 2) {
            style = {
              width: "48%",
              height: "auto",
              objectFit: "cover",
              display: "inline-block",
              margin: "1%",
              margin: "20px 0",
            };
          } else {
            style = {
              maxWidth: "40%",
              objectFit: "cover",
              borderRadius: "20px",
              margin: "30px 0",
            };
          }

          return <img {...props} style={style} />;
        },
        p: ({ node, children }) => {
          const imageParagraph = node.children?.filter(
            (child) => child.type === "element" && child.tagName === "img"
          );

          if (imageCount === 2 && imageParagraph) {
            return (
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {children}
              </div>
            );
          }

          // if (imageCount > 2) {
          //   return (
          //     <div
          //       style={{
          //         display: "flex",
          //         flexWrap: "wrap",
          //         justifyContent: "space-between",
          //         gap: "20px",
          //       }}
          //     >
          //       {children}
          //     </div>
          //   );
          // }

          return <p>{children}</p>;
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

// Helper outside component
const countImages = (markdown) => {
  const regex = /!\[.*?\]\(.*?\)/g;
  const matches = markdown.match(regex);
  return matches ? matches.length : 0;
};

export default RichText;
