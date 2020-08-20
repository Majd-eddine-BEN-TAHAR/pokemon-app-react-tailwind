import React from "react";

const ProfileRow = ({ name, value }) => {
  return (
    <div className="flex items-center shadow-md">
      <p className="w-5/12 text-center text-red-600 p-x py-4 capitalize text-lg">
        {name}
      </p>
      <p className="w-2/12 text-center text-red-600 p-x py-4">:</p>
      <p className="w-5/12 text-center text-yellow-700 p-x py-4 capitalize font-bold">
        {value}
      </p>
    </div>
  );
};

export default ProfileRow;
