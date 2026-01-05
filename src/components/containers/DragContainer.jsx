import React from "react";

function DragContainer({ children }) {
  return (
    <div className="bg-cyan-900 text-white w-screen h-screen select-none">
      {children}
    </div>
  );
}

export default DragContainer;
