"use client";

import { useEffect } from "react";
import Brands from "./components/brands/Brands";
import Lenis from "@studio-freight/lenis";
import Gallery from "./components/showroom/Gallery";
export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="px-4 overflow-x-hidden">
      <section className=" w-full h-screen max-sm:min-h-lvh  text-xl lg:text-9xl flex justify-center items-center">
        Hero Section
      </section>

      <Brands />
      <Gallery />

      <section className="w-full h-screen max-sm:min-h-lvh  text-xl lg:text-9xl flex justify-center items-center">
        contatti
      </section>
    </main>
  );
}
