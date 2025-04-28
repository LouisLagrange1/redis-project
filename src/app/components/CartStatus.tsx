"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const CartStatus = ({ username }: { username: string }) => {
  const [cartStatus, setCartStatus] = useState<string | null>(null);

  useEffect(() => {
    if (username) {
      const fetchCartStatus = async () => {
        try {
          const res = await axios.get(`/api/cart/status?username=${username}`);
          setCartStatus(res.data.status);
        } catch (error) {
          setCartStatus("Error fetching cart status");
        }
      };

      fetchCartStatus();
    }
  }, [username]);

  if (!username) return null;

  return (
    <div className="mt-4">
      {cartStatus ? (
        <div className="text-center text-lg text-gray-700">
          Cart Status: {cartStatus}
        </div>
      ) : (
        <div className="text-center text-lg text-gray-500">
          Loading cart status...
        </div>
      )}
    </div>
  );
};

export default CartStatus;
