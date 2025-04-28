"use client";

import axios from "axios";

const ExpireCartButton = ({ username }: { username: string }) => {
  const handleExpire = async () => {
    try {
      await axios.get(`/api/cart/expire?username=${username}`);
      alert("Vérification expiration OK");
    } catch (error) {
      console.error(error);
      alert("Erreur d'expiration");
    }
  };

  return (
    <button
      onClick={handleExpire}
      className="bg-yellow-400 text-white px-4 py-2 rounded"
    >
      Vérifier expiration
    </button>
  );
};

export default ExpireCartButton;
