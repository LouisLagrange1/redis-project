"use client";

import { useState } from "react";
import axios from "axios";

const AddToCartForm = ({ username }: { username: string }) => {
  const [itemId, setItemId] = useState("");

  const handleAdd = async () => {
    try {
      await axios.post("/api/cart/add", { username, itemId });
      alert("Ajouté au panier !");
    } catch (error) {
      console.error(error);
      alert("Erreur lors de l'ajout");
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Ajouter un article</h2>
      <input
        className="border p-2 w-full mb-2"
        placeholder="ID de l'article"
        value={itemId}
        onChange={(e) => setItemId(e.target.value)}
      />
      <button
        onClick={handleAdd}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Ajouter
      </button>
    </div>
  );
};

export default AddToCartForm;
