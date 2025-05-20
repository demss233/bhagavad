import React from "react";

export default function LinkHeader({ headers }) {
  return (
    <h1
      className="text-1xl bg-[#232323] p-2 text-white sm:w-[100%]  sm:h-[90px] lg:h-[60px] items-center flex rounded-tl-2xl rounded-br-2xl hover:rounded-tl-[0px] transition-all hover:rounded-br-[0px] cursor-pointer"
      onClick={() => {
        window.location.href = `http://localhost:3000/chapter/${headers[0]}`;
      }}
    >{`${headers[0]}. ${headers[1]} / ${headers[3]}`}</h1>
  );
}
