"use client";

import { useState } from "react";
import Image from "next/image";
import { DATA } from "@/app/constants";
import Transition from "./Transition";

const BrandsDesktop = ({ categoria, loading, opacity }) => {
  const [openDiv, setOpenDiv] = useState(false);
  const [target, setTarget] = useState("");

  const handleOver = (e) => {
    if (e.target.tagName.toLowerCase() === "hr") {
      return;
    }

    setTarget(e.target.id);

    const container = document.getElementById("bounce");
    const targetElement = document.getElementById(e.target.id);

    if (targetElement) {
      container.scrollTo({ top: targetElement.offsetTop, behavior: "smooth" });
    }
  };

  const handleDivAbsolute = (e) => {
    if (e.target.tagName.toLowerCase() === "hr") {
      return;
    }

    if (openDiv) {
      const div = document.getElementById("bounce");
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const divHeight = div.offsetHeight;
      const divWidth = div.offsetWidth;

      div.style.top = `${mouseY - divHeight / 2}px `;
      div.style.left = `${mouseX - divWidth / 2}px`;
    }
  };

  return (
    <div className="container  overflow-hidden  z-20   mx-auto text-5xl uppercase">
      <div
        id="bounce"
        className={`
           fixed rounded-3xl shadow-2xl 
           ${
             openDiv ? "opacity-100" : "opacity-0"
           } transition-opacity duration-300 ease-in-out overflow-hidden z-10 w-[25rem] h-[25rem] pointer-events-none`}
      >
        {categoria && (
          <div id="scroll__container">
            {DATA.filter((item) => item.categoria.includes(categoria)).map(
              (item) => (
                <Image
                  key={item.id}
                  className="w-auto h-auto object-cover"
                  id={item.slug}
                  src={`/images/${item.imgUrl}`}
                  alt={item.slug}
                  width={480}
                  height={480}
                />
              )
            )}
          </div>
        )}
      </div>

      <ul
        onMouseEnter={() => setOpenDiv(true)}
        onMouseLeave={() => setOpenDiv(false)}
        onMouseMove={handleDivAbsolute}
        className=""
      >
        {DATA.filter((item) => item.categoria.includes(categoria)).map(
          (item, i) => (
            <div
              onMouseOver={handleOver}
              key={item.id}
              className={`cursor-pointer`}
            >
              <hr
                className={`${i === 0 ? "hidden" : ""} cursor-pointer-none `}
              />
              <Transition>
                <li
                  id={item.slug}
                  className={` 
                    ${
                      target === item.slug && openDiv
                        ? "bg-[#020202] text-[#f2f2f2] opacity-100"
                        : "opacity-80"
                    } 
                    
                    px-10 py-10 transition-all duration-300 ease-in-out`}
                >
                  {item.nome}
                </li>
              </Transition>
            </div>
          )
        )}
      </ul>
    </div>
  );
};

export default BrandsDesktop;
