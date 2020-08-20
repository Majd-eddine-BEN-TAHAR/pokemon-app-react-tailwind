import React from "react";
import previousIcon from "./../../assets/images/previous.svg";
import nextIcon from "./../../assets/images/next.svg";

const Pagination = ({ setOffset, hasNextPage, hasPreviousPage, offset }) => {
  const setPage = (number) => {
    setOffset((prevOffset) => prevOffset + number);
  };

  return (
    <div className="flex">
      {/* show previous icon when  hasPreviousPage is true*/}
      {hasPreviousPage && (
        <div
          className="pagination bg-red-600 text-white hover:bg-red-400"
          onClick={() => setPage(-20)}
        >
          <img src={previousIcon} alt="previousIcon" />
        </div>
      )}

      {/* show 1 when we have a previous page , if we don't have previous page that mean we are in first page*/}
      {hasPreviousPage && (
        <div
          className="pagination bg-red-600 text-white hover:bg-red-400"
          onClick={() => setOffset(0)}
        >
          1
        </div>
      )}

      {/* show ... when  we are active in a page number  greater  than the number 2, so if we are in page 3 at minimum */}
      {offset / 20 > 2 && (
        <div className="pagination pagination bg-red-600 text-white hover:bg-red-400">
          ...
        </div>
      )}

      {/* show the number of the previous page when we are in a page number greater than 2 */}
      {offset / 20 + 1 > 2 && (
        <div
          className="pagination pagination bg-red-600 text-white hover:bg-red-400"
          onClick={() => {
            setOffset(offset - 20);
          }}
        >
          {offset / 20}
        </div>
      )}

      {/* show the active page with different color*/}
      <div className="Active">{offset / 20 + 1}</div>

      {/* show the next number when we have a next page */}
      {hasNextPage && (
        <div
          className="pagination pagination bg-red-600 text-white hover:bg-red-400"
          onClick={() => setPage(20)}
        >
          {offset / 20 + 2}
        </div>
      )}

      {/* show the next icon for the next page */}
      {hasNextPage && (
        <div
          className="pagination bg-red-600 text-white hover:bg-red-400"
          onClick={() => setPage(20)}
        >
          <img src={nextIcon} alt="nextIcon" />
        </div>
      )}
    </div>
  );
};

export default Pagination;
