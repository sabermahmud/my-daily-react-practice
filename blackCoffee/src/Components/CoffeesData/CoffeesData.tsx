import { use, useState } from "react";
import type { CoffeeDataType } from "../../coffeeDataType";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";

export interface CoffeesDataProps {
  coffeesDataPromise: Promise<CoffeeDataType[]>;
}

export default function CoffeesData({ coffeesDataPromise }: CoffeesDataProps) {
  const [added, setAdded] = useState([]);

  const coffeesData = use(coffeesDataPromise);

  const handleAddToCart = (coffee: CoffeesData) => {
    const newAdd = [...added, coffee];
    console.log(coffeesData);
    setAdded(newAdd);
  };

  return (
    <>
      <div className=" text-black p-4 gap-4 col-span-8 lg:col-span-6 grid md:grid-cols-2 lg:grid-cols-2">
        {coffeesData.map((coffee)=> (
          <Card
            coffee ={coffee}
            key={coffee.id}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <div className="col-span-4 lg:col-span-6">
        <section className="min-h-screen bg-[#0f0b09] px-4 py-10 text-white">
          <div className="mx-auto w-full">
            {/* Cart Header */}
            <div className="mb-8">
              <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-amber-500">
                Coffee Shop
              </p>

              <h1 className="text-3xl font-bold sm:text-4xl">Your Cart</h1>

              <p className="mt-2 text-sm text-gray-500">
                Review your selected coffees before checkout.
              </p>
            </div>

            {/* Cart Layout */}
            <div className="w-full flex flex-col gap-4">
              {/* Cart Items */}
              <div className="space-y-4">{/* Cart Item */}</div>
              {/* cart items */}
              {added.map((product) => (
                <Cart product={product} />
              ))}
              {/* Order Summary */}
              <div className="h-fit rounded-3xl border border-white/10 bg-[#181310] p-6">
                <h2 className="text-xl font-bold">Order Summary</h2>

                <div className="my-6 space-y-4">
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>Subtotal</span>
                    <span>$15.00</span>
                  </div>

                  <div className="flex justify-between text-sm text-gray-400">
                    <span>Delivery</span>
                    <span>$2.50</span>
                  </div>

                  <div className="border-t border-white/10 pt-4">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">Total</span>

                      <span className="text-2xl font-bold text-amber-400">
                        $17.50
                      </span>
                    </div>
                  </div>
                </div>

                {/* Checkout Button */}
                <button className="w-full rounded-xl bg-amber-500 px-5 py-3 font-semibold text-black transition hover:bg-amber-400">
                  Proceed to Checkout
                </button>

                <p className="mt-4 text-center text-xs text-gray-600">
                  Secure & fast checkout
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}