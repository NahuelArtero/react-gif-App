import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export const GifGridItem = ({ title, url }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <div className="bg-white rounded shadow-md overflow-hidden relative">
      <img src={url} alt={title} className="w-full h-48 object-cover" />
      <div className="absolute top-0 right-0 m-2">
        <CopyToClipboard text={url} onCopy={handleCopy}>
          <button className="bg-gray-800 text-white px-2 py-1 rounded-md focus:outline-none">
            {copied ? "Copied to Clipboard!" : "Copy URL"}
          </button>
        </CopyToClipboard>
      </div>
      <p className="text-center p-4">{title}</p>
    </div>
  );
};
