import React from "react";

const RightCard = (props) => {
  console.log(props);

  return (
    <div className="h-full shrink-0 w-70 bg-red-100 rounded-lg overflow-hidden relative ">
      <img className="h-full object-cover w-full" src={props.img} alt="" />
      <h1 className="absolute top-4 left-4 h-10 w-10 rounded-full bg-white text-2xl font-bold flex items-center pl-3">
        1
      </h1>
      <div>
        <p className="absolute top-80 w-2/3 left-10 text-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
          temporibus unde ex nesciunt nobis fuga.
        </p>
      </div>
      <div className="">
        <button className="absolute left-8 bottom-8 text-white bg-blue-600 px-8 py-2 rounded-full ">
          {props.tag}
          <i className="ri-arrow-right-line"></i>
        </button>
      </div>
    </div>
  );
};

export default RightCard;
