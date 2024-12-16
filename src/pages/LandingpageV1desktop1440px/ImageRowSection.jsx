import { Img } from "../../components";
import React from "react";

export default function ImageRowSection() {
  return (
    <>
      {/* image row section */}
      <div className="mx-auto mb-[78px] flex flex-1">
        <Img src="images/defaultNoData.png" alt="Product Image" className="h-[574px] w-[88%] object-contain" />
      </div>
    </>
  );
}
