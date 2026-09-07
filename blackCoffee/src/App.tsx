import { Suspense } from "react";
import type { CoffeeDataType } from "./coffeeDataType";
import CoffeesData from "./Components/CoffeesData/CoffeesData";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";

function App() {
  const coffeesDataPromise = async (): Promise<CoffeeDataType[]> => {
    const res = await fetch("/Coffees.json");
    const data = await res.json();
    return data;
  };
  return (
    <>
      <div className="w-full"><Navbar/></div>
      <div><Banner/></div>
      <div className="grid grid-cols-12 max-w-7xl mx-auto">
        <Suspense>
          <CoffeesData coffeesDataPromise={coffeesDataPromise()} />
        </Suspense>
      </div>
      <div className="bg-amber-950 p-10">Footer</div>
    </>
  );
}

export default App;
