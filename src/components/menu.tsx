import Link from "next/link";
import { useAppContext } from "@/components/stateWrapper";
import style from "../../styles/menu.module.css";

export default function Menu() {
  const cart = useAppContext();

  function handleClickCart(e: any) {
    e.preventDefault();
    cart.openCart();
  }
  return (
    <>
      <nav className={style.menu}>
        <div>
          <Link href="/" legacyBehavior>
            <a className={style.link}>Home</a>
          </Link>

          <Link href="/store" legacyBehavior>
            <a className={style.link}>Store</a>
          </Link>

          <Link href="/faq" legacyBehavior>
            <a className={style.link}>FAQ</a>
          </Link>
        </div>

        <div></div>
        <Link href="#" className={style.link} onClick={handleClickCart}>
          Carrito ({cart.getNumberOfItems()})
        </Link>
      </nav>

      {/* Made in tailwind */}
      <nav className="flex justify-center gap-4">
        <div className="border-[2px] border-black w-[80ch] shadow-nav-shadow">
          <Link href="/">Home</Link>

          <Link href="/store">Store</Link>

          <Link href="/faq">FAQ</Link>
        </div>

        <div></div>
        <Link href="#" onClick={handleClickCart}>
          Carrito ({cart.getNumberOfItems()})
        </Link>
      </nav>
    </>
  );
}
