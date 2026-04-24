import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between ">
      <h4 className="bg-black text-white px-3 py-1 uppercase rounded-full m-7 text-xs">
        Target Audience
      </h4>
      <button className="bg-gray-200 text-black px-3 py-1 uppercase rounded-full m-7 text-xs mr-10">
        Digital Banking Platform
      </button>
    </div>
  );
};

export default Navbar;
