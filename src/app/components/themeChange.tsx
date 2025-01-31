"use client"

import { useState, useEffect } from "react";

export default function ThemeChange() {
  const [theme, setTheme] = useState("system");

  useEffect(() => {
    if (theme === "dark") {
        document.documentElement.classList.toggle('dark')
    } else if (theme === "light") {
        document.documentElement.classList.toggle('light')
    } else {
        document.documentElement.classList.toggle('light')
    }
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
        <button onClick={toggleTheme} className="p-2 bg-[#0000ff] text-white">
          Toggle Theme
        </button> 
  );
}