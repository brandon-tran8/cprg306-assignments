"use client";
import { useState } from "react";
import Item from "./item";
//import itemsData from "./items.json";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");
  //const [items, setItems] = useState(itemsData);

  const sortItems = () => {
    const sortedItems = [...items].sort((a, b) => {
      if (sortBy === "name") {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      } else if (sortBy === "category") {
        if (a.category < b.category) {
          return -1;
        }
        if (a.category > b.category) {
          return 1;
        }
        return 0;
      }
    });
    return sortedItems;
  };

  const handleSortByName = () => {
    setSortBy("name");
    //sortItems();
  };

  const handleSortByCategory = () => {
    setSortBy("category");
    //sortItems();
  };

  return (
    <div>
      <div>
        Sort by:
        <button
          onClick={handleSortByName}
          className={` bg-orange-400 border-gray-300 rounded px-4 py-2 mr-4  
          ${sortBy === "name" ? "bg-orange-500" : ""} ml-3`}
        >
          Name
        </button>
        <button
          onClick={handleSortByCategory}
          className={` bg-orange-400 rounded px-4 py-2
          ${sortBy === "category" ? "bg-orange-500" : ""}`}
        >
          Category
        </button>
      </div>
      {sortItems().map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
