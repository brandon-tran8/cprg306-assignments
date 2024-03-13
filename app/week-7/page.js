"use client";
// import ItemList from "./item-list";
// import NewItem from "./new-item";
// import { useState } from "react";
// import itemsData from "./items.json";
// import MealIdeas from "./meal-ideas";

// export default function Page() {
//   const [items, setItems] = useState(itemsData);
//   const [selectedItemName, setSelectedItemName] = useState("");

//   const handleAddItem = (NewItem) => {
//     setItems([...items, NewItem]);
//   };

//   const handleItemSelect = (itemName) => {
//     const cleanedItemName = itemName
//       .split(".")[0]
//       .trim()
//       .replace(
//         /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
//         ""
//       );
//   };

//   return (
//     <main className="bg-slate-950">
//       <div>
//         <h1 className="text-3xl font-bold m-2">Shopping List</h1>
//       </div>
//       <div>
//         <MealIdeas ingredient={selectedItemName} />
//       </div>
//       <NewItem onAddItem={handleAddItem} />
//       <ItemList items={items} />
//     </main>
//   );
// }
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (itemName) => {
    const cleanedItemName = itemName
      .split(".")[0]
      .trim()
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        ""
      );

    // Update selectedItemName state
    setSelectedItemName(cleanedItemName);
  };

  return (
    <main className="bg-slate-950 flex">
      <div>
        <h1 className="text-3xl font-bold m-2">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />

        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>

      <MealIdeas ingredient={selectedItemName} />
    </main>
  );
}
