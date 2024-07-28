import React, { useState } from "react";

const ShowMyName = () => {
  const [name, setName] = useState("");

  const handleHtun = () => {
    setName(name + "Htun");
  };

  const handleLinn = () => {
    setName(name + "Linn");
  };

  const handleKyaw = () => {
    setName(name + "Kyaw");
  };

  const handleClear = () => {
    setName("");
  };

  return (
    <div className="p-10 space-x-1">
      <h1 className="text-4xl font-bold mb-3">My Name is "{name}"</h1>
      <button
        onClick={handleHtun}
        className="border  border-black bg-black text-white px-4 py-2 my-2 duration-200 active:scale-95"
      >
        Htun
      </button>
      <button
        onClick={handleLinn}
        className="border  border-black bg-black text-white px-4 py-2 my-2 duration-200 active:scale-95"
      >
        Linn
      </button>
      <button
        onClick={handleKyaw}
        className="border  border-black bg-black text-white px-4 py-2 my-2 duration-200 active:scale-95"
      >
        Kyaw
      </button>
      <button
        onClick={handleClear}
        className="border  border-black text-black px-4 py-2 my-2 duration-200 active:scale-95"
      >
        Clear Name
      </button>
    </div>
  );
};

export default ShowMyName;
