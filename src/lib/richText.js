import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";

const RichText = ({ content }) => {
  if (!content) return <p>No content available.</p>;

  return (
    <ReactMarkdown rehypePlugins={[rehypeSanitize]}>
      {content}
    </ReactMarkdown>
  );
};

export default RichText;
