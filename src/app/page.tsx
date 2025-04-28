"use client";

import { useState } from "react";
import CreateUserForm from "./components/CreateUserForm";
import LoginForm from "./components/LoginForm";
import AddToCartForm from "./components/AddToCartForm";
import RemoveFromCartForm from "./components/RemoveFromCartForm";
import ExpireCartButton from "./components/ExpireCartButton";
import ClearCartButton from "./components/ClearCartButton";
import CartStatus from "./components/CartStatus";

export default function Home() {
  const [username, setUsername] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-6">Gestion du Panier 🛒</h1>

      {/* Partie création + login */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CreateUserForm />
        <LoginForm setUsername={setUsername} />
      </div>

      {/* Si connecté */}
      {username && (
        <>
          <div className="text-lg font-semibold">
            Connecté en tant que :{" "}
            <span className="text-blue-600">{username}</span>
          </div>

          <CartStatus username={username} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AddToCartForm username={username} />
            <RemoveFromCartForm username={username} />
          </div>

          <div className="flex gap-4">
            <ExpireCartButton username={username} />
            <ClearCartButton username={username} />
          </div>
        </>
      )}
    </div>
  );
}
