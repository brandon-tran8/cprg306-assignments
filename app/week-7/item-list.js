import React, { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const handleSortBy = (sortKey) => {
    setSortBy(sortKey);
  };

  return (
    <div>
      <div>
        Sort by:
        <button
          onClick={() => handleSortBy("name")}
          className={`bg-orange-400 border-gray-300 rounded px-4 py-2 mr-4 ${
            sortBy === "name" ? "bg-orange-500" : ""
          } ml-3`}
        >
          Name
        </button>
        <button
          onClick={() => handleSortBy("category")}
          className={`bg-orange-400 rounded px-4 py-2 ${
            sortBy === "category" ? "bg-orange-500" : ""
          }`}
        >
          Category
        </button>
      </div>
      {sortedItems.map((item) => (
        <Item
          key={item.id}
          {...item}
          onSelect={() => onItemSelect(item.name)}
        />
      ))}
    </div>
  );
}
