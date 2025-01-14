import React from "react";

const Loader = () => {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-16 h-16 border-4 border-t-blue-500 border-gray-200 rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Loader;
