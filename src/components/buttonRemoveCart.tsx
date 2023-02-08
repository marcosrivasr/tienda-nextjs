import Image from "next/image";
import remove from "../.././public/icon/delete-icon.svg";

export default function ButtonRemoveCart({
  handleClick,
}: {
  handleClick: () => void;
}) {
  return (
    <div>
      <button
        className="mt-[5px] mr-[5px] flex h-[25px] w-[25px] items-center justify-center rounded-lg bg-negative"
        onClick={handleClick}
      >
        <Image src={remove} alt="icon" className="h-[20px] w-[20px] " />
      </button>
    </div>
  );
}
