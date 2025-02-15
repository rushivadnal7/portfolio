import React from "react";

const DownloadResumeButton = () => {
  

  return (
    <button
      onClick={handleDownload}
      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
    >
      Download Resume
    </button>
  );
};

export default DownloadResumeButton;
