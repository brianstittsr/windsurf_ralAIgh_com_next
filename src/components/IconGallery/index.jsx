import { Img } from "./..";
import React from "react";

export default function IconGallery({
  dropboxIcon = "images/img_dropbox.svg",
  gridIcon = "images/img_grid.svg",
  gmailIcon = "images/img_gmail.svg",
  databaseIcon = "images/img_database.svg",
  padlockIcon = "images/img_padlock.svg",
  checkmarkIcon = "images/img_checkmark.svg",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex justify-between items-center self-stretch gap-5 flex-1`}>
      <Img src={dropboxIcon} alt="Dropbox Image" className="h-[72px] w-[8%] self-end object-contain" />
      <Img src={gridIcon} alt="Grid Image" className="h-[72px] w-[8%] self-end object-contain" />
      <Img src={gmailIcon} alt="Gmail Image" className="h-[72px] w-[8%] object-contain" />
      <Img src={databaseIcon} alt="Database Image" className="h-[72px] w-[8%] object-contain" />
      <Img src={padlockIcon} alt="Padlock Image" className="h-[72px] w-[8%] object-contain" />
      <Img src={checkmarkIcon} alt="Checkmark Image" className="h-[72px] w-[8%] object-contain" />
    </div>
  );
}
