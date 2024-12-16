import { Img } from "../../components";
import React from "react";

export default function ImageColumnSection() {
  return (
    <>
      {/* image column section */}
      <div className="flex flex-1 flex-col items-start">
        <Img src="images/defaultNoData.png" alt="Create Image" className="h-[700px] w-[60%] object-contain" />
      </div>
    </>
  );
}
