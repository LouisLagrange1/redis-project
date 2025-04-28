"use client";

import { useState } from "react";
import axios from "axios";

const CreateUser = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/users/create", {
        username,
        password,
        email,
      });
      setMessage("✅ Utilisateur créé avec succès !");
      // Reset les champs
      setUsername("");
      setPassword("");
      setEmail("");
    } catch (error) {
      console.error(error);
      setMessage("❌ Erreur lors de la création de l'utilisateur.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Créer un utilisateur
      </h2>

      {message && <div className="mb-4 text-center text-sm">{message}</div>}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded font-semibold"
        >
          Créer
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
