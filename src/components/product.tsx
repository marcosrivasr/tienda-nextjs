import Link from "next/link";
import Image from "next/image";
import { convertToPath } from "@/lib/items";
import { useAppContext } from "@/components/stateWrapper";
import ButtonCart from "@/components/buttonCart";

export default function Product({ item, qty = 0, showAs }: any) {
  switch (showAs) {
    case "Page":
      return (
        <div className="flex h-auto w-full bg-white px-[50px]">
          <div className="flex w-[60%] items-start justify-center">
            <Image
              className="h-[380px] w-[380px]"
              src={item.image}
              alt="Picture of the author"
              width={600}
              height={600}
            />
          </div>

          <div className="flex w-[40%] flex-col justify-center gap-[20px]">
            <div>
              <h2 className="text-[4rem]">{item.title}</h2>
            </div>
            <div className="my-[10px] text-[28px]">${item.price}</div>
            <div>{item.description}</div>
            <div>
              <ButtonCart item={item} />
            </div>
          </div>
        </div>
      );
    case "ListItem":
      return (
        <div className="flex border-b-[1px] border-[#CCCCCC] py-[10px]">
          <div>
            <Image
              src={item.image}
              alt="Picture of the author"
              width={100}
              height={100}
            />
          </div>
          <div>
            <h3 className="text-[1.6rem] font-medium">{item.title}</h3>
            <p className="text-[1.6rem]">${item.price}</p>
            {qty === 0 ? "" : <p className="text-[1.6rem]">{qty} units</p>}

            {qty === 0 ? (
              ""
            ) : (
              <p className="text-[1.6rem]">Subtotal: ${qty * item.price}</p>
            )}
          </div>
        </div>
      );
    default:
      return (
        <div className="w-[300px] bg-white">
          <div className="mb-[10px] flex justify-center rounded-[6px] shadow-nav-shadow">
            <Link href={`/store/${convertToPath(item.title)}`}>
              <Image
                className="h-[250px] w-[250px]"
                src={item.image}
                alt="Picture of the author"
                width={400}
                height={400}
              />
            </Link>
          </div>
          <div className="mx-[10px] flex flex-col items-center">
            <p className="text-[1.6rem] font-medium">
              <Link href={`/store/${convertToPath(item.title)}`}>
                {item.title}
              </Link>
            </p>
            <p className="my-[5px] text-[1.6rem]">${item.price}</p>
            <ButtonCart item={item} />
          </div>
        </div>
      );
  }
}
