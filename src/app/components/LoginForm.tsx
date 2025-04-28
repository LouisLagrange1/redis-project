"use client";

import { useState } from "react";

const LoginForm = ({
  setUsername,
}: {
  setUsername: (username: string) => void;
}) => {
  const [inputUsername, setInputUsername] = useState("");

  const handleLogin = () => {
    setUsername(inputUsername);
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Se connecter</h2>
      <input
        className="border p-2 w-full mb-2"
        placeholder="Nom d'utilisateur"
        value={inputUsername}
        onChange={(e) => setInputUsername(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="bg-purple-500 text-white px-4 py-2 rounded"
      >
        Se connecter
      </button>
    </div>
  );
};

export default LoginForm;
