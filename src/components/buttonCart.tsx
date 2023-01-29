import { useAppContext } from "@/components/stateWrapper";

export default function ButtonCart({ item }) {
  const cart = useAppContext();

  function handleClick() {
    cart.addItemToCart(item);

    if (!cart.isOpen) {
      cart.openCart();
    }
  }
  return (
    <button
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[8px] text-[1.8rem] px-[20px] py-[10px] text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-[15px]"
      onClick={handleClick}
    >
      Add to the cart
    </button>
  );
}
