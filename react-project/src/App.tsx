import React, { Suspense, useState } from "react";
import Navbar from "../src/components/Navbar";
import Banner from "../src/components/Banner";

import Students from "./components/Students";

const studentsDataPromise = async () => {
  const res = await fetch("../students.json");
  const data = await res.json();
  return data;
};
function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <h2 className="text-2xl font-semibold text-center m-4">
        {" "}
        Students Added
      </h2>
      <div>
        {/* sort */}
        <div></div>
        {/* filter */}
        <div></div>
      </div>
      <div>
        <Suspense>
          <Students studentsDataPromise={studentsDataPromise()} />
        </Suspense>
      </div>
    </>
  );
}

export default App;
