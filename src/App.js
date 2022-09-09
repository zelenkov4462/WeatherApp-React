import "./App.css";
import { Input } from "./components/Input/Input";
import React, { useState, useRef, useEffect, createContext } from "react";
import Card from "./components/Card/Card";
import { CardList } from "./components/CardList/CardList";
import { useCitiesList } from "./hooks/useCitiesList";
import { ErrorBoundary } from "./ErrorBoundary/ErrorBoundary";

export const GlobalContext = createContext();

function App() {
  const [state, dispatch] = useCitiesList();
  const { citiesList } = state;
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <div className="main">
        <Input />
        <ErrorBoundary>
          <CardList />
        </ErrorBoundary>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
