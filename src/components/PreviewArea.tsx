import React from "react";
import ReactMarkdown from "react-markdown";

interface PreviewAreaProps {
  markdown: string;
  style: React.CSSProperties;
}

export const PreviewArea: React.FC<PreviewAreaProps> = ({
  markdown,
  style,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="border rounded bg-white text-black" style={style}>
        <h2 className="font-semibold mb-2 border-b px-4 py-2">
          Light Theme Preview
        </h2>
        <div className="prose lg:prose-xl max-w-none p-4">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </div>
      <div className="border rounded bg-gray-900 text-white" style={style}>
        <h2 className="font-semibold mb-2 border-b px-4 py-2">
          Dark Theme Preview
        </h2>
        <div className="prose lg:prose-xl max-w-none prose-invert p-4">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};
