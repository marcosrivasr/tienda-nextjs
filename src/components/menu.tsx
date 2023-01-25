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
    <div className="my-[40px] mx-auto flex h-[100px] w-[90%] justify-center ">
      <nav className="fixed flex h-[100px] w-[90%] gap-[40px] z-[1]">
        <div className="flex w-[100%] items-center justify-center gap-4 rounded-[20px] shadow-nav-shadow bg-white">
          <Link
            className="rounded-[10px] p-[20px] hover:bg-orange-400"
            href="/"
          >
            Home
          </Link>

          <Link
            className="rounded-[10px] p-[20px] hover:bg-orange-400"
            href="/store"
          >
            Store
          </Link>

          <Link
            className="rounded-[10px] p-[20px] hover:bg-orange-400"
            href="/faq"
          >
            FAQ
          </Link>
        </div>

        <div className="flex items-center w-[100px] bg-white rounded-[20px] shadow-nav-shadow justify-center">
          <Link href="#" onClick={handleClickCart}>
            Carrito ({cart.getNumberOfItems()})
          </Link>
        </div>
      </nav>
    </div>
  );
}
