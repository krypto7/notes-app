import React, { useRef } from "react";
import Card from "./Card";

function ForGround() {
  const ref = useRef(null);
  const data = [
    {
      desc: "All is welll",
      fileSize: "5 mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur.",
      fileSize: "3 mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, voluptate!",
      fileSize: "5 mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
  ];

  return (
    <div
      ref={ref}
      className="w-full h-full z-[3] fixed top-0 left-0 flex gap-5 flex-wrap"
    >
      {/* <Card /> */}
      {data.map((item, index) => (
        <Card reference={ref} key={index} data={item} />
      ))}
    </div>
  );
}

export default ForGround;
