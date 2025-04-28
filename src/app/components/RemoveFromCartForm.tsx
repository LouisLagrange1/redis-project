"use client";

import { useState } from "react";
import axios from "axios";

const RemoveFromCartForm = ({ username }: { username: string }) => {
  const [itemId, setItemId] = useState("");

  const handleRemove = async () => {
    try {
      await axios.post("/api/cart/remove", { username, itemId });
      alert("Retiré du panier !");
    } catch (error) {
      console.error(error);
      alert("Erreur lors du retrait");
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Retirer un article</h2>
      <input
        className="border p-2 w-full mb-2"
        placeholder="ID de l'article"
        value={itemId}
        onChange={(e) => setItemId(e.target.value)}
      />
      <button
        onClick={handleRemove}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Retirer
      </button>
    </div>
  );
};

export default RemoveFromCartForm;
