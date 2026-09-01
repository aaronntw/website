"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

type Theme = "dark" | "light";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const initial: Theme = saved === "light" ? "light" : "dark";
    document.documentElement.dataset.theme = initial;
    setTheme(initial);
  }, []);

  function toggleTheme() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
    setTheme(next);
  }

  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <Button
      className="theme-toggle"
      variant="outline"
      size="sm"
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${nextTheme} mode`}
      title={`Switch to ${nextTheme} mode`}
    >
      {theme === "dark" ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
      <span>{theme === "dark" ? "Light" : "Dark"}</span>
    </Button>
  );
}
