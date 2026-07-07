import React from "react";

function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-8xl font-bold bg-amber-200 text-black px-6 py-2 rounded-lg shadow-lg">
        Chaos Cursor
      </h1>

      <h3 className="mt-4 text-lg animate-pulse">
        Loading...
      </h3>
    </div>
  );
}

export default Loading;