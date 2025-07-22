import { Minus, Plus } from "lucide-react";

export default function MaxMinus({ incrementar, decrementar, quantidade }) {
  return (
    <div className="flex justify-center items-center">
      <button
        className="me-3 rounded-md border-[2px] border-black bg-[#C7A315] p-1"
        onClick={decrementar}
      >
        <Minus />
      </button>
      <input
        type="text"
        value={quantidade}
        readOnly
        className="flex w-16 items-center rounded-xl border-[2px] border-black bg-[#ECECEC] p-4 text-center text-black"
      />
      <button
        className="ms-3 rounded-md border-[2px] border-black bg-[#C7A315] p-1"
        onClick={incrementar}
      >
        <Plus />
      </button>
    </div>
  );
}
