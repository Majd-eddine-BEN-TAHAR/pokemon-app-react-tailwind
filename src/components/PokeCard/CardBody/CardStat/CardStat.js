import React from "react";
import StatRow from "./StatRow/StatRow";

const CardStat = ({ data, name }) => {
  return (
    <section className="p-3 md:col-span-3">
      <h1 className="font-bold text-4xl text-red-600 capitalize">{name}</h1>
      {data.map((stat, index) => {
        return <StatRow name={stat.name} value={stat.value} key={index} />;
      })}
    </section>
  );
};

export default CardStat;
