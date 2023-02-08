import { useEffect, useState } from "react";
import Image from "next/image";
import images from "../images";

export default function Carousel() {
  const [contador, setContador] = useState(0);

  const carousel = images.bg_images.map((item) => item.name);

  const nextClick = () => {
    if (contador + 1 < carousel.length) {
      setContador(contador + 1);
    }
    if (contador + 1 === carousel.length) {
      setContador(0);
    }
  };

  const previousClick = () => {
    if (contador >= 1) {
      setContador(contador - 1);
    }
    if (contador === 0) {
      setContador(carousel.length - 1);
    }
  };

  const imageIndicator = images.bg_images.map((item, index) => (
    <button
      key={index}
      onClick={() => setContador(index)}
      className={
        contador === index
          ? `h-[20px] w-[20px] rounded-full border-2 border-transparent bg-primary-1 transition-all duration-300 ease-out`
          : `h-[20px] w-[20px] rounded-full border-2 border-white bg-transparent transition-all duration-300 ease-out`
      }
    ></button>
  ));

  useEffect(() => {
    const interval = setInterval(() => {
      nextClick();
    }, 5000);
    return () => clearInterval(interval);
  }, [contador]);

  return (
    <>
      <div className="flex h-screen w-[95%] flex-row flex-nowrap justify-center">
        <div className="absolute h-screen w-[95%]">
          <div
            className={`absolute h-screen w-full rounded-[2px] bg-cover ${carousel[contador]} transition-all duration-300 ease-out brightness-50`}
          ></div>

          <div className="absolute h-screen w-full">
            <div className="w-[60%] p-[100px]">
              <h2 className="mt-[40px] mb-[30px] text-[5rem] font-bold text-white">
                Shop the Winter 2023 Collection
              </h2>
              <p className="text-[1.6rem] text-white">
                Level up your comfort this season with our new Winter Collection
                — all new joggers, beanies, drinkware, and for the first time
                ever, Octocookie cutters!
              </p>
            </div>
          </div>

          <div className="absolute top-[50%] m-auto my-0 w-full lg:top-[50%]">
            <button
              onClick={() => previousClick()}
              className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-[4px] transition duration-300 ease-in-out lg:h-[40px] lg:w-[40px]"
            >
              <Image src={images.icon[0].img} alt={images.icon[0].alt} />
            </button>

            <button
              onClick={() => nextClick()}
              className="absolute right-0 flex h-10 w-10 items-center justify-center rounded-[4px] transition duration-300 ease-in-out lg:h-[40px] lg:w-[40px]"
            >
              <Image src={images.icon[1].img} alt={images.icon[1].alt} />
            </button>
          </div>
        </div>
      </div>
      <div className="absolute flex h-14 w-full items-center justify-center space-x-[8px]">
        {imageIndicator}
      </div>
    </>
  );
}
