import React from "react";

const Modal = ({ error }) => {
  return (
    <div className="p-8 fixed bg-red-600 text-white font-bold text-2xl flex justify-center items-center w-4/5 h-40 rounded top-center left-center">
      {error}
    </div>
  );
};

export default Modal;
