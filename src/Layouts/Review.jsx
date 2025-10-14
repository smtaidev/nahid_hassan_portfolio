import React from "react";
import AllReview from "../Components/AllReview";

export default function Review() {
  return (
    <div className="relative pb-30" id="review">
      <img
        src="https://i.postimg.cc/FzLzp3vw/Frame-2147226959.png"
        alt=""
        className="absolute -top-50 right-0 w-[414px] h-[463px]"
      />
      <AllReview />
    </div>
  );
}
