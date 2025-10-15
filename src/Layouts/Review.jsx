import React from "react";
import AllReview from "../Components/AllReview";

export default function Review() {
  return (
    <div className="relative xl:pb-30 pb-10" id="review">
      <img
        src="https://i.postimg.cc/FzLzp3vw/Frame-2147226959.png"
        alt=""
        className="absolute xl:-top-50 -top-2 right-0 xl:w-[414px] w-[115px] xl:h-[463px] h-[120px]"
      />
      <AllReview />
    </div>
  );
}
