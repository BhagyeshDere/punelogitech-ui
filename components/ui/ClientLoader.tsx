"use client";

import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function ClientLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // ⏱️ loader duration

    return () => clearTimeout(timer);
  }, []);

  return loading ? <Loader /> : null;
}