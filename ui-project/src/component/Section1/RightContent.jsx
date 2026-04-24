import React from "react";
import RightCard from "./RightCard";

const RightContent = (props) => {
  console.log(props.users);

  return (
    <div className="bg-white h-full overflow-x-auto  w-2/3 mx-20 p-4 rounded flex flex-nowrap gap-5  ">
      {props.users.map((elem,idx) => {
        return <RightCard key={idx} id={idx} img={elem.img} intro={elem.intro} tag={elem.tag} />;
      })}
    </div>
  );
};

export default RightContent;
