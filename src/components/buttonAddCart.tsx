export default function ButtonAddCart({
  handleClick,
}: {
  handleClick: () => void;
}) {
  return (
    <div>
      <button
        className="mb-[15px] inline-flex items-center rounded-lg bg-primary-2 px-[20px] py-[10px] text-center text-[1.8rem] font-medium text-white"
        onClick={handleClick}
      >
        Add to the cart
      </button>
    </div>
  );
}
