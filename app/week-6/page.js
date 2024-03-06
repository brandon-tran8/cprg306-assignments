"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import { useState } from "react";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (NewItem) => {
    setItems([...items, NewItem]);
  };

  return (
    <main className="bg-slate-950">
      <div>
        <h1 className="text-3xl font-bold m-2">Shopping List</h1>
      </div>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}
