import React from "react";
import Projects from "../Components/Projects";

export default function AllProjects() {
  return (
    <div className="relative pb-30" id="projects">
      <img
        src="https://i.postimg.cc/gknDkdQ6/Frame-2147226960.png"
        alt=""
        className="absolute -top-26 left-0 w-[414px] h-[463px]  xl:inline hidden"
      />
      <Projects />
    </div>
  );
}
