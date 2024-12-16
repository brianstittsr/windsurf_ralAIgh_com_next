import { Img } from "./..";
import React from "react";

export default function AppleImageComponent({ ...props }) {
  return (
    <div {...props} className={`${props.className} flex flex-col w-[6%] md:w-full`}>
      <Img src="images/img_apple.svg" alt="Apple Image" className="h-[68px] w-full" />
    </div>
  );
}
