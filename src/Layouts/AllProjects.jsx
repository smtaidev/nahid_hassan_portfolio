import React from "react";
import Projects from "../Components/Projects";

export default function AllProjects() {
  return (
    <div className="relative xl:pb-30 pb-10" id="projects">
      <img
        src="https://i.postimg.cc/gknDkdQ6/Frame-2147226960.png"
        alt=""
        className="absolute xl:-top-26 -top-20 left-0 xl:w-[414px] w-[115px] xl:h-[463px] h-[120px]"
      />
      <Projects />
    </div>
  );
}
