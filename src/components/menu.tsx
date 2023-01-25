import Link from "next/link";
import { useAppContext } from "@/components/stateWrapper";
import style from "../../styles/menu.module.css";

export default function Menu() {
  const cart = useAppContext();

  function handleClickCart(e) {
    e.preventDefault();
    cart.openCart();
  }
  return (
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
      <a href="#" className={style.link} onClick={handleClickCart}>
        Carrito ({cart.getNumberOfItems()})
      </a>
    </nav>
  );
}
