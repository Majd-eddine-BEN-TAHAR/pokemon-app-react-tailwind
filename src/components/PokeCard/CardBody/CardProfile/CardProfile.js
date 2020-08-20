import React from "react";
import ProfileRow from "./ProfileRow/ProfileRow";

const CardProfile = ({ data }) => {
  return (
    <section>
      <h2 className="mt-8 text-3xl text-green-600 text-center capitalize">
        profile
      </h2>
      <div>
        {data.map((row, index) => {
          return <ProfileRow name={row.name} value={row.value} key={index} />;
        })}
      </div>
    </section>
  );
};

export default CardProfile;
