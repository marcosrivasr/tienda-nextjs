import Link from "next/link";
import Image from "next/image";
import { useAppContext } from "@/components/stateWrapper";
import Router from "next/router";

interface Link {
  label: string;
  route: string;
}

const links: Link[] = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Store",
    route: "/store",
  },
  {
    label: "FAQ",
    route: "/faq",
  },
];

export default function Navbar() {
  const cart = useAppContext();

  function handleClickCart(e) {
    e.preventDefault();
    cart.openCart();
  }
  return (
    <div className="my-[30px] mx-auto flex h-[100px] w-[90%] justify-center ">
      <nav className="fixed z-[1] flex h-[80px] w-[90%] gap-[20px]">
        <ul className="flex w-[100%] items-center justify-center gap-4 rounded-[20px] bg-white shadow-nav-shadow text-[1.8rem]">
          {links.map((link) => (
            <li
              className="rounded-[10px] p-[10px] hover:bg-[#E24648]"
              key={link.route}
            >
              <Link className="p-[10px]" href={link.route}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex w-[80px] items-center justify-center rounded-[20px] border-[2px] border-[#E24648] bg-white shadow-nav-shadow">
          <Link href="#" onClick={handleClickCart}>
            <div className="flex h-[80px] w-[80px] items-center justify-center">
              <div className="absolute right-[-5px] top-[-5px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-[#E24648]">
                <span className="text-[1.4rem] text-white">
                  {cart.getNumberOfItems()}
                </span>
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
