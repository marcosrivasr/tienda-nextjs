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
      className="mb-[15px] inline-flex items-center rounded-lg bg-secondary px-[20px] py-[10px] text-center text-[1.8rem] font-medium text-white"
      onClick={handleClick}
    >
      Add to the cart
    </button>
  );
}
