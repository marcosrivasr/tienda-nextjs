import Product from "@/components/product";
import { useAppContext } from "@/components/stateWrapper";
import styles from "../../styles/animation.module.css";
import { Context } from "@/types"

export default function ShoppingCart() {
  const cart: Context  = useAppContext();

  function getTotal() {
    const total = cart.items.reduce((acc, item) => {
      return (acc += item.qty * item.price);
    }, 0);
    return total;
  }

  function handleClickClose() {
    cart.closeCart();
  }

  return (
    <div
      className={`fixed top-0 left-0 z-[2] h-full w-[350px] flex-col items-end overflow-y-scroll bg-white py-[30px] px-[20px] shadow-nav-shadow ${
        cart.isOpen ? `flex ${styles.slideInLeft}` : `flex ${styles.slideOutLeft}`
      }`}
    >
      <button
        className="inline-flex items-center rounded-[8px] bg-secondary px-[20px] py-[8px] text-center text-[1.6rem] font-semibold text-black"
        onClick={handleClickClose}
      >
        Close
      </button>

      {cart.items.length === 0 ? (
        <div className="flex h-full w-full items-center justify-center text-[1.6rem]">
          Cart is empty
        </div>
      ) : (
        <div className="flex w-full flex-col items-center">
          <h3 className="my-[20px] text-[1.8rem] font-semibold">Your items</h3>
          <div className="">
            {cart.items &&
              cart.items.length > 0 &&
              cart.items.map((item, i) => (
                <Product
                  key={item + i.toString()}
                  item={item}
                  showAs="ListItem"
                  qty={item.qty}
                />
              ))}
          </div>
          <div className="text-[2rem]">Total: ${getTotal().toFixed(2)}</div>
        </div>
      )}
    </div>
  );
}
