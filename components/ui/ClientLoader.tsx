"use client";

import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function ClientLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Set a timestamp when the component mounts
    const startTime = Date.now();
    const minimumDisplayTime = 3000; // ⏱️ Guaranteed beauty sleep for your loader

    const handleLoad = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;

      if (elapsedTime >= minimumDisplayTime) {
        // If 3s have already passed, hide immediately
        setLoading(false);
      } else {
        // Otherwise, hide after the remaining time to reach 3s
        setTimeout(() => {
          setLoading(false);
        }, minimumDisplayTime - elapsedTime);
      }
    };

    // 2. Listen for the full page load
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      
      // 3. Safety Fallback: Force close after 6s in case of heavy assets/slow network
      const fallbackTimer = setTimeout(() => {
        setLoading(false);
      }, 6000);

      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(fallbackTimer);
      };
    }
  }, []);

  return loading ? <Loader /> : null;
}