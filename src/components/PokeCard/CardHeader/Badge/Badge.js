import React from "react";

const Badge = ({ text, bgColor }) => {
  return (
    <div
      className="text-white rounded-full px-4 inline-block mr-1"
      style={{ backgroundColor: `${bgColor}bb` }}
    >
      {text}
    </div>
  );
};

export default Badge;
