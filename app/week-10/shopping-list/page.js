"use client";

import { useState, useEffect } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user } = useUserAuth();

  useEffect(() => {
    const loadItems = async () => {
      try {
        if (user) {
          const userItems = await getItems(user.uid);
          setItems(userItems);
        }
      } catch (error) {
        console.error("Error loading items:", error);
      }
    };

    loadItems();
  }, [user]);

  if (!user) {
    return <p>NEED TO LOGIN!!</p>;
  }

  const handleAddItem = async (newItem) => {
    try {
      const newItemId = await addItem(user.uid, newItem);
      const newItemWithId = { ...newItem, id: newItemId };
      setItems([...items, newItemWithId]);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  const handleItemSelect = (itemName) => {
    const cleanedItemName = itemName
      .split(".")[0]
      .trim()
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        ""
      );
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
