import { Suspense } from "react";
import type { CoffeeDataType } from "./coffeeDataType";

import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import CoffeesData from "./Components/CoffeesData/CoffeesData";

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
      <div><Footer/></div>
    </>
  );
}

export default App;
