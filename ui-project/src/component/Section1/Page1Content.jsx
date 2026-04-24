import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Page1Content = (props) => {
  console.log(props.users);

  return (
    <div className="py-10 flex justify-between  h-[90vh] bg-gray-100">
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  );
};

export default Page1Content;
