import Product from "@/components/product";
import { useAppContext } from "@/components/stateWrapper";

export default function ShoppingCart() {
  const cart = useAppContext();

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
      style={{ display: cart.isOpen ? "block" : "none" }}
    >
      <button onClick={handleClickClose}>
        Close
      </button>

      {cart.items.length === 0 ? (
        <div>Cart is empty</div>
      ) : (
        <>
          <h3>Your items</h3>
          <div>
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
          <div>Total: ${getTotal()}</div>
        </>
      )}
    </div>
  );
}
