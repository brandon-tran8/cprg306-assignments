// _services/shopping-list-service.js
import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

// Function to retrieve all items for a specific user
export async function getItems(userId) {
  const items = [];

  try {
    const userItemsRef = collection(db, `users/${userId}/items`);
    const itemsQuerySnapshot = await getDocs(userItemsRef);

    itemsQuerySnapshot.forEach((doc) => {
      items.push({
        id: doc.id,
        data: doc.data(),
      });
    });
  } catch (error) {
    console.error("Error getting items:", error);
  }

  return items;
}

// Function to add a new item to a specific user's list of items
export async function addItem(userId, item) {
  try {
    const userItemsRef = collection(db, `users/${userId}/items`);
    const newItemRef = await addDoc(userItemsRef, item);

    return newItemRef.id;
  } catch (error) {
    console.error("Error adding item:", error);
    return null;
  }
}
