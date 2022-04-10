import Link from "next/link";
import { convertToPath } from "../lib/items";
import style from "../styles/product.module.css";
import { useAppContext } from "./stateWrapper";
import Image from "next/image";
import ButtonCart from "./buttonCart";

export default function Product({ item, qty = 0, showAs }) {
  if (showAs === "Page") {
    return (
      <div className={style.page}>
        <div className={style.image}>
          <Image
            src={item.image}
            alt="Picture of the author"
            width={800}
            height={800}
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
      </div>
    );
  }

  if (showAs === "ListItem") {
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
  }

  return (
    <div className={style.item}>
      <div>
        <Link href={`/store/${convertToPath(item.title)}`}>
          <a>
            <Image
              src={item.image}
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </a>
        </Link>
      </div>
      <div>
        <h3>
          <Link href={`/store/${convertToPath(item.title)}`}>
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
