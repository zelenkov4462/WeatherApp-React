import "./App.css";
import { Input } from "./components/Input/Input";
import React, { useState, useRef, useEffect, createContext } from "react";
import Card from "./components/Card/Card";
import { CardList } from "./components/CardList/CardList";
import { useCitiesList } from "./hooks/useCitiesList";
import { ErrorBoundary } from "./ErrorBoundary/ErrorBoundary";
import { BrowserRouter, Link, Route, Routes, Navigate } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import ContactsPage from "./pages/ContactsPage";
import SingleCity from "./components/SingleCity/SingleCity";
import Layout from "./components/Layout/Layout";
import NotFoundPage from "./pages/NotFoundPage";

export const GlobalContext = createContext();

function App() {
  const [state, dispatch] = useCitiesList();
  const { citiesList } = state;

  return (
    <BrowserRouter>
      <GlobalContext.Provider value={{ state, dispatch }}>
        <div className="main">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="home" element={<MainPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="contacts" element={<ContactsPage />} />
              <Route path="city/:city" element={<SingleCity />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </div>
      </GlobalContext.Provider>
    </BrowserRouter>
  );
}

export default App;
