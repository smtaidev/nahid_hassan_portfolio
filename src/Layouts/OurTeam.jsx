import React from "react";
import Team from "../Components/Team";

export default function OurTeam() {
  return (
    <div className="relative xl:pb-30 pb-10" >
      <img
        src="https://i.postimg.cc/gknDkdQ6/Frame-2147226960.png"
        alt=""
        className="absolute xl:-top-60 -top-20 left-0 xl:w-[414px] w-[115px] xl:h-[463px] h-[120px]"
      />
      <Team />
    </div>
  );
}
