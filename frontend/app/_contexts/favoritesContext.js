"use client";

const { createContext, useContext, useState } = require("react");

const FavoritesContext = createContext();

function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState("");
  const [settings, setSettings] = useState("");

  return (
    <FavoritesContext.Provider
      value={{ favorites, setFavorites, settings, setSettings }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

function useFavoritesContext() {
  const context = useContext(FavoritesContext);

  if (!context) throw new Error("Context was used out of its provider");

  return context;
}

export { FavoritesProvider, useFavoritesContext };
