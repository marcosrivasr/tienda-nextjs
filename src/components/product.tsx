import Link from "next/link";
import Image from "next/image";
import { convertToPath } from "@/lib/items";
import { useAppContext } from "@/components/stateWrapper";
import ButtonCart from "@/components/buttonCart";
import style from "../../styles/product.module.css";

export default function Product({ item, qty = 0, showAs }: any) {
  switch (showAs) {
    case "Page":
      return (
        <>
          {/* <div className={style.page}>
            <div className={style.image}>
              <Image
                src={item.image}
                alt="Picture of the author"
                width={600}
                height={600}
              />
            </div>
            <div className={style.info}>
              <div>
                <h2>{item.title}</h2>
              </div>
              <div className={style.price}>${item.price}</div>
              <div>{item.description}</div>
              <div>
                <ButtonCart item={item} />
              </div>
            </div>
          </div> */}
          {/* //

          // */}
          <div className="flex h-auto w-full bg-white px-[50px]">
            <div className="flex w-[60%] items-start justify-center">
              <Image
                className="h-[350px] w-[350px]"
                src={item.image}
                alt="Picture of the author"
                width={600}
                height={600}
              />
            </div>

            <div className="w-[40%] flex flex-col justify-center gap-[20px]">
              <div>
                <h2>{item.title}</h2>
              </div>
              <div className="text-[28px] my-[10px]">${item.price}</div>
              <div>{item.description}</div>
              <div>
                <ButtonCart item={item} />
              </div>
            </div>
          </div>
        </>
      );
    case "ListItem":
      return (
        <div className={style.listItem}>
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
        <div className={style.item}>
          <div className="flex justify-center">
            <Link href={`/store/${convertToPath(item.title)}`} legacyBehavior>
              <a>
                <Image
                  className="h-[250px] w-[250px]"
                  src={item.image}
                  alt="Picture of the author"
                  width={400}
                  height={400}
                />
              </a>
            </Link>
          </div>
          <div>
            <h3>
              <Link href={`/store/${convertToPath(item.title)}`} legacyBehavior>
                <a>{item.title}</a>
              </Link>
            </h3>
          </div>
          <div>${item.price}</div>
          <div>
            <ButtonCart item={item} />
          </div>
        </div>
      );
  }
}
