import React from "react";

const PaginationItem = ({ children, setPage, offsetNumber }) => {
  return (
    <div
      className="pagination hover:bg-red-400"
      onClick={() => setPage(offsetNumber)}
    >
      {children}
    </div>
  );
};

export default PaginationItem;
