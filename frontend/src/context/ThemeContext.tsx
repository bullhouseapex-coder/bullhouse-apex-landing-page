import { createContext, useContext, useState, type ReactNode } from "react";

type Theme = "dark" | "light";

type ThemeProviderProp = {
  children: ReactNode;
  defaultTheme?: Theme;
};

interface ThemeProvider {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeProvider | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};

export const ThemeProvider = ({ children, defaultTheme = "light" }: ThemeProviderProp) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark" || storedTheme === "light") {
      return storedTheme;
    }

    return defaultTheme;
  });

  const values = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem("theme", theme);
      setTheme(theme);
    },
  };

  return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>;
};
