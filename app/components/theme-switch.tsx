"use client";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import type { ThemeProviderProps } from "next-themes";
import * as React from "react";
import { FaCircleHalfStroke } from "react-icons/fa6";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}

export const ThemeSwitch: React.FC = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return (
      <FaCircleHalfStroke
        className="h-3.5 w-3.5 text-[#1c1c1c]"
        aria-hidden="true"
      />
    );
  }

  return (
    <button
      id="theme-toggle"
      aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
      onClick={toggleTheme}
      className="flex items-center justify-center transition-opacity duration-300 hover:opacity-90"
    >
      <FaCircleHalfStroke
        className={`h-3.5 w-3.5 ${
          resolvedTheme === "dark" ? "text-[#D4D4D4]" : "text-[#1c1c1c]"
        }`}
      />
    </button>
  );
};