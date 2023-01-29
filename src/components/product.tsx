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

          <div className="w-[40%] flex flex-col justify-center gap-[20px]">
            <div>
              <h2 className="text-[4rem]">{item.title}</h2>
            </div>
            <div className="text-[28px] my-[10px]">${item.price}</div>
            <div>{item.description}</div>
            <div>
              <ButtonCart item={item} />
            </div>
          </div>
        </div>
      );
    case "ListItem":
      return (
        <div>
          <div>
            <Image
              src={item.image}
              alt="Picture of the author"
              width={100}
              height={100}
            />
          </div>
          <div>
            <div>{item.title}</div>
            <div>${item.price}</div>
            {qty === 0 ? "" : <div>{qty} units</div>}

            {qty === 0 ? "" : <div>Subtotal: ${qty * item.price}</div>}
          </div>
        </div>
      );
    default:
      return (
        <div className="bg-white w-[350px] rounded-[6px] shadow-nav-shadow">
          <div className="flex justify-center">
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
          <div className="flex flex-col items-center mx-[20px]">
            <h3 className="text-[3rem]">
              <Link href={`/store/${convertToPath(item.title)}`}>
                {item.title}
              </Link>
            </h3>
            <p className="text-[1.6rem] my-[10px]">${item.price}</p>
            <ButtonCart item={item} />
          </div>
        </div>
      );
  }
}
