import React from "react";

const CardImg = ({ imgSrc }) => {
  return (
    <img
      src={imgSrc}
      alt="img"
      className="w-48 mx-auto md:col-span-1 md:h-full md:flex md:flex-col md:items-center"
    />
  );
};

export default CardImg;
