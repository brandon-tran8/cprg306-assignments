"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  const generateRandomID = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newID = generateRandomID();
    const newItem = {
      id: newID,
      name: name,
      quantity: quantity,
      category: category,
    };
    onAddItem(newItem);
    // const item = {
    //   name,
    //   quantity,
    //   category,
    // };
    //console.log(item);

    //alert(`Name: ${name}, quantity: ${quantity}, category: ${category}`);

    setName("");
    setQuantity(1);
    setCategory("Produce");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md bg-orange-300 p-10 rounded-lg ">
        <h1 className="text-black font-bold text-2xl">
          Lets get them groceriess!
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="w-full">
            <input
              type="text"
              required
              placeholder="Item Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="mt-10 p-2 block rounded-md text-black bg-slate-100"
            />
          </div>

          <div className="block mb-1 ">
            <input
              type="number"
              required
              min="1"
              max="99"
              value={quantity}
              onChange={(event) => setQuantity(event.target.value)}
              className="mt-10 p-2 block rounded-md text-black bg-slate-100"
            />
          </div>

          <div className="block mb-1 ">
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="mt-10 mb-5 p-2 block rounded-md text-black bg-slate-100"
            >
              <option value="Produce">Produce</option>
              <option value="Dairy">Dairy</option>
              <option value="Bakery">Bakery</option>
              <option value="Meat">Meat</option>
              <option value="Frozen Foods">Frozen Foods</option>
              <option value="Canned Goods">Canned Goods</option>
              <option value="Dry Goods">Dry Goods</option>
              <option value="Beverages">Beverages</option>
              <option value="Snacks">Snacks</option>
              <option value="Household">Household</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-sky-400 hover:bg-sky-600 rounded-md"
          >
            +
          </button>
        </form>
      </div>
    </div>
  );
}
