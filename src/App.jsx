import React, { useState } from "react";
import FaqSection from "./FaqSection";

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    count > 1 && setCount(count - 1);
  };

  return (
    <div className="p-5 space-x-1">
      <FaqSection />
      {/* <h1 className="text-9xl font-bold">{count}</h1>
      <button
        onClick={handleDecrement}
        className="border  border-black bg-black text-white px-4 py-2 my-2 duration-200 active:scale-95"
      >
        Decrement
      </button>
      <button
        onClick={handleIncrement}
        className="border border-black bg-black text-white px-4 py-2 my-2 duration-200 active:scale-95"
      >
        Increment
      </button> */}
    </div>
  );
};

export default App;
