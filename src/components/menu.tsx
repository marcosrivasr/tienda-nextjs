import Link from "next/link";
import Image from "next/image";
import { useAppContext } from "@/components/stateWrapper";
import style from "../../styles/menu.module.css";

export default function Menu() {
  const cart = useAppContext();

  function handleClickCart(e) {
    e.preventDefault();
    cart.openCart();
  }
  return (
    <div className="my-[40px] mx-auto flex h-[100px] w-[90%] justify-center ">
      <nav className="fixed z-[1] flex h-[80px] w-[90%] gap-[20px]">
        <div className="flex w-[100%] items-center justify-center gap-4 rounded-[20px] bg-white shadow-nav-shadow">
          <Link
            className="rounded-[10px] p-[20px] hover:bg-[#E24648]"
            href="/"
          >
            Home
          </Link>

          <Link
            className="rounded-[10px] p-[20px] hover:bg-[#E24648]"
            href="/store"
          >
            Store
          </Link>

          <Link
            className="rounded-[10px] p-[20px] hover:bg-[#E24648]"
            href="/faq"
          >
            FAQ
          </Link>
        </div>

        <div className="flex w-[80px] items-center justify-center rounded-[20px] border-[2px] border-[#E24648] bg-white shadow-nav-shadow">
          <Link href="#" onClick={handleClickCart}>
            <div className="flex h-[80px] w-[80px] items-center justify-center">
              <div className="absolute right-[-5px] top-[-5px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-[#E24648]">
                <span className="text-[14px] text-white">{cart.getNumberOfItems()}</span>
              </div>
              <Image
                height={40}
                width={40}
                src="https://www.mbhouse.ca/assets/img/icons/mb_cart_red.svg"
                alt="shopping cart"
              />
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
}
