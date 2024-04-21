import Image from "next/image";
import { DATA } from "@/app/constants";
import Transition from "./Transition";

const BrandsMobile = ({ categoria, loading }) => {
  return (
    <div className="container  flex flex-wrap gap-6 justify-center mx-auto mt-6">
      {DATA.filter((item) => item.categoria.includes(categoria)).map((item) => (
        <div
          key={item.id}
          className={`max-md:w-full rounded-3xl overflow-hidden shadow-xl`}
        >
          <Transition>
            <div className="relative md:h-80 md:w-80 xl:w-96 xl:h-96 h-96 max-md:w-full w-96">
              <Image
                className="object-cover shadow-sm"
                src={`/images/${item.imgUrl}`}
                alt={item.slug}
                fill
              />
            </div>
            <div className="px-4 py-4 text-center uppercase">
              <p>{item.nome}</p>
            </div>
          </Transition>
        </div>
      ))}
    </div>
  );
};

export default BrandsMobile;
