"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <button
        className="hover:bg-muted-background-light dark:hover:bg-muted-background-dark flex h-9 w-9 cursor-pointer items-center justify-center rounded-md transition-colors"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? <SunIcon size={18} /> : <MoonIcon size={18} />}

        <span className="sr-only">Theme switcher button</span>
      </button>
    </>
  );
}
