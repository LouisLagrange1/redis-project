"use client";

import axios from "axios";

const ClearCartButton = ({ username }: { username: string }) => {
  const handleClear = async () => {
    try {
      await axios.post("/api/cart/clear", { username });
      alert("Panier vidé !");
    } catch (error) {
      console.error(error);
      alert("Erreur de vidage");
    }
  };

  return (
    <button
      onClick={handleClear}
      className="bg-gray-600 text-white px-4 py-2 rounded"
    >
      Vider le panier
    </button>
  );
};

export default ClearCartButton;
