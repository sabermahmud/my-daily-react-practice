import { useState } from "react";
import type { CoffeeDataType } from "../../coffeeDataType";

export interface Coffee {
  product: CoffeeDataType;
}
export default function Cart({ product }: Coffee) {
  console.log(product);

  const [count, setCount] = useState(1);

  const handlePlus = () => {
    setCount(count + 1)
  };
  const handleMinus = () =>{
    setCount(count - 1)
  }
  return (
    <>
      <div className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-[#181310] p-4 lg:flex-row items-center justify-center">
        {/* Product Info */}
        <div className="flex-1 text-center lg:text-start w-full">
          <p className="text-xs font-medium text-amber-500">
            {product.category}
          </p>

          <h2 className="mt-1 text-lg font-semibold">{product.name}</h2>

          <p className="mt-1 text-sm text-gray-500">{product.size}</p>

        </div>

        {/* Quantity UI */}
        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#100c0a] px-4 py-2 w-full justify-between">
          <button onClick={handleMinus} className="text-lg text-gray-400 hover:text-white">−</button>

          <span className="min-w-5 text-center font-medium">{count}</span>

          <button
            onClick={handlePlus}
            className="text-lg text-gray-400 hover:text-white"
          >
            +
          </button>
        </div>

        {/* individual price*/}
        <div className="text-center lg:text-right w-full">

          <p className="text-xs text-gray-500">Per serve</p>

          <p className="mt-1 text-lg font-bold">${product.price}</p>
        </div>

        {/* Total */}
        <div className="text-center lg:text-right w-full">

          <p className="text-xs text-gray-500">Total</p>

          <p className="mt-1 text-lg font-bold">${product.price * count}</p>
        </div>

        {/* Remove */}
        <button className="rounded-lg px-3 py-2 text-sm hover:text-red-100 transition hover:bg-red-500/50 text-red-500 w-full">
          Remove
        </button>
      </div>
    </>
  );
}
