import Image from "next/image";
import { useState } from "react";
const Gallery = () => {
  /* useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); */

  const handleDivAbsolute = (e) => {
    const div = document.getElementById("mouse__container");
    const divZoom = document.getElementById("mouse__zoom");

    if (divZoom) {
      const mouseX = e.clientX - div.getBoundingClientRect().left;
      const mouseY = e.clientY - div.getBoundingClientRect().top;
      const divHeight = divZoom.offsetHeight;
      const divWidth = divZoom.offsetWidth;

      let top = mouseY - divHeight / 2;
      let left = mouseX - divWidth / 2;

      if (top < -divHeight) {
        top = 0;
        left = 0;
      } else if (top > divHeight) {
        top = 0;
        left = 0;
      }

      if (left < -divHeight) {
        top = 0;
        left = 0;
      } else if (left > divHeight) {
        top = 0;
        left = 0;
      }

      divZoom.style.transform = `translateX(${left}px) translateY(${top}px)`;
    }
  };
  return (
    <div id="showroom" className="">
      <div className="mt-20  grid grid-cols-4 14 gap-2 w-full ">
        <div className="px-10 py-12 bg-[#f5f5f5] col-span-2 group cursor-pointer">
          <div className="relative  w-full h-full   overflow-hidden">
            <div
              onMouseMove={handleDivAbsolute}
              id="mouse__container"
              className="top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2  w-20 h-20 relative z-50"
            >
              <div
                id="mouse__zoom"
                className="absolute  group-hover:opacity-100 opacity-0 text-white flex items-center justify-center
                          w-20 h-20  rounded-full bg-black z-50
                          "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6"
                  />
                </svg>
              </div>
            </div>
            <Image
              className="object-fill group-hover:scale-110 transition-transform duration-300 ease-in-out "
              src="/showroom/sopra_full.jpg"
              alt="brand1"
              fill
            />
          </div>
        </div>
        <div className="relative  bg-[#f5f5f5]  ">
          <Image
            className="object-cover px-10 py-12"
            src="/showroom/luci.jpg"
            alt="brand1"
            fill
          />
        </div>
        <div className=" relative   aspect-square bg-[#f5f5f5]   ">
          <Image
            className="object-cover  px-10 py-12"
            src="/showroom/banner.jpg"
            alt="brand1"
            fill
          />
        </div>
        <div className=" relative   aspect-square bg-[#f5f5f5] ">
          <Image
            className="object-cover object-bottom  px-10 py-12"
            src="/showroom/alto.jpg"
            alt="brand1"
            fill
          />
        </div>
        <div className=" relative  bg-[#f5f5f5] ">
          <Image
            className="object-cover  px-10 py-12"
            src="/showroom/poltrona.jpg"
            alt="brand1"
            fill
          />
        </div>
        <div className=" relative col-span-2 bg-[#f5f5f5] ">
          <Image
            className="object-cover  px-10 py-12"
            src="/showroom/jeans.jpg"
            alt="brand1"
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
