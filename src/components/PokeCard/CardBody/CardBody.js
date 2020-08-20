import React from "react";
import CardImg from "./CardImg/CardImg";
import CardStat from "./CardStat/CardStat";
import CardProfile from "./CardProfile/CardProfile";
import Spinner from "../../Spinner/Spinner";

const CardBody = ({ imgSrc, body }) => {
  return (
    <>
      {body.statData.length ? (
        <div className="bg-yellow-400 md:p-4">
          <div className="md:grid md:grid-cols-4">
            <CardImg imgSrc={imgSrc} />
            <CardStat data={body ? body.statData : []} name={body.name} />
          </div>
          <CardProfile data={body.profileData} />
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default CardBody;
