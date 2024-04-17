"use client";

import { useState } from "react";
import Image from "next/image";

export default function Brands() {
  const [openDiv, setOpenDiv] = useState(false);
  const [target, setTarget] = useState("");
  const [categoria, setCategoria] = useState("calzature");
  const data = [
    {
      id: 1,
      slug: "havaianas",
      nome: "havaianas",
      categoria: ["calzature", "abbigliamento"],
      imgUrl: "havaianas.jpg",
    },
    {
      id: 2,
      slug: "cafe-noir",
      nome: "cafe noir",
      categoria: ["calzature"],
      imgUrl: "cafenoir.jpg",
    },
    {
      id: 3,
      slug: "kebo",
      nome: "kebo",
      categoria: ["calzature"],
      imgUrl: "kebo.jpg",
    },
    {
      id: 4,
      slug: "pitas",
      nome: "pitas",
      categoria: ["calzature"],
      imgUrl: "pitas.jpg",
    },
    {
      id: 5,
      slug: "francesco-milano",
      nome: "francesco milano",
      categoria: ["calzature"],
      imgUrl: "francescomilano.jpg",
    },
    {
      id: 6,
      slug: "paola-ferri",
      nome: "paola ferri",
      categoria: ["calzature"],
      imgUrl: "paolaferri.png",
    },
    {
      id: 7,
      slug: "makia",
      nome: "makia clothing",
      categoria: ["abbigliamento"],
      imgUrl: "makia.jpg",
    },

    {
      id: 8,
      slug: "the-dudes",
      nome: "the dudes",
      categoria: ["abbigliamento"],
      imgUrl: "thedudes.jpg",
    },
    {
      id: 9,
      slug: "thrasher",
      nome: "thrasher",
      categoria: ["abbigliamento"],
      imgUrl: "thrasher.jpg",
    },
    {
      id: 10,
      slug: "tee-time",
      nome: "tee time",
      categoria: ["abbigliamento"],
      imgUrl: "teetime.jpg",
    },
  ];

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
    <div className="border relative  px-4 py-4 bg-[#f5f5f5] rounded-3xl overflow-hidden ">
      <div className="container  overflow-hidden  z-20   mx-auto text-6xl uppercase">
        <div
          id="bounce"
          className={`
           absolute rounded-3xl shadow-2xl 
           ${
             openDiv ? "opacity-100" : "opacity-0"
           } transition-opacity duration-300 ease-in-out overflow-hidden z-10 w-[30rem] h-[30rem] pointer-events-none`}
        >
          {categoria && (
            <div id="scroll__container">
              {data
                .filter((item) => item.categoria.includes(categoria))
                .map((item) => (
                  <Image
                    key={item.id}
                    className="w-auto h-auto"
                    id={item.slug}
                    src={`/images/${item.imgUrl}`}
                    alt={item.slug}
                    width={480}
                    height={480}
                  />
                ))}
            </div>
          )}
        </div>

        <div className="text-sm flex justify-between">
          <div>
            <p>brands</p>
          </div>
          <div className="space-x-4">
            <span>FILTRO CATEGORIA:</span>
            <span
              onClick={() => setCategoria("calzature")}
              className={`cursor-pointer ${
                categoria === "calzature"
                  ? "opacity-100"
                  : "opacity-60 hover:opacity-80"
              }`}
            >
              CALZATURE
            </span>
            <span
              onClick={() => setCategoria("abbigliamento")}
              className={`cursor-pointer  ${
                categoria === "abbigliamento"
                  ? "opacity-100 "
                  : "opacity-60 hover:opacity-80"
              }`}
            >
              ABBIGLIAMENTO
            </span>
          </div>
        </div>

        <ul
          onMouseEnter={() => setOpenDiv(true)}
          onMouseLeave={() => setOpenDiv(false)}
          onMouseMove={handleDivAbsolute}
          className=""
        >
          {data
            .filter((item) => item.categoria.includes(categoria))
            .map((item) => (
              <div
                onMouseOver={handleOver}
                key={item.id}
                className="cursor-pointer"
              >
                <hr className="relative cursor-pointer-none" />
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
              </div>
            ))}
        </ul>
      </div>
    </div>
  );
}
