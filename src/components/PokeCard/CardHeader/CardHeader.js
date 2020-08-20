import React from "react";
import PreviousIcon from "./../../../assets/images/back.svg";
import Badge from "./Badge/Badge";

const CardHeader = ({ goBack, pokeId, data }) => {
  return (
    <header className="flex justify-between items-center p-2 border-b-4 border-yellow-600 bg-yellow-1000 rounded-t-md">
      <div className="flex items-center">
        <img
          className="w-10 cursor-pointer mt-1"
          src={PreviousIcon}
          alt="previous icon"
          onClick={() => {
            goBack();
          }}
        />
        <p className="text-red-600 font-bold text-xl">
          &nbsp;&nbsp;&nbsp;.&nbsp;&nbsp;&nbsp;{pokeId}
        </p>
      </div>
      <div>
        {data.map((type, index) => {
          return <Badge key={index} text={type} bgColor={"#38a169"} />;
        })}
      </div>
    </header>
  );
};

export default CardHeader;
