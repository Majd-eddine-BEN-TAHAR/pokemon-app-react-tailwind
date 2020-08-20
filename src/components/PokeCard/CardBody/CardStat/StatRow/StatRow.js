import React from "react";

const StatRow = ({ name, value }) => {
  return (
    <div className="flex p-2">
      <p className="w-1/4 text-red-600 font-normal capitalize">{name}</p>
      <div className="w-3/4 relative bg-yellow-300 rounded-lg px-2 py-1 h-8">
        <p className="z-10 relative text-center text-red-600 ">{value}%</p>
        <div
          className="absolute left-0 top-0 bg-green-400 h-full rounded-lg"
          style={{
            width: value > 100 ? "100%" : `${value}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default StatRow;
