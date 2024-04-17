"use client";
import Brands from "./components/Brands";

export default function Home() {
  return (
    <main className="px-4 py-4 overflow-x-hidden">
      <section className="w-full h-screen text-9xl flex justify-center items-center">
        Hero Section
      </section>
      <Brands />
      <section className="w-full h-screen text-9xl flex justify-center items-center">
        Show room foto
      </section>
    </main>
  );
}
