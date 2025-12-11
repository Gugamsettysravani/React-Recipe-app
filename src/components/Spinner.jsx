import React from "react";

const Spinner = ({ size = 12 }) => {
  const s = `${size}`;
  return (
    <div className="flex flex-col items-center">
      <div
        style={{ width: `${s}px`, height: `${s}px` }}
        className="animate-spin rounded-full border-4 border-slate-200 border-t-slate-600"
        aria-hidden="true"
      ></div>
      <span className="text-sm text-slate-600 mt-2">Loading recipes...</span>
    </div>
  );
};

export default Spinner;
