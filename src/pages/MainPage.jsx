import React from "react";
import { Input } from "../components/Input/Input";
import { ErrorBoundary } from "../ErrorBoundary/ErrorBoundary";
import { CardList } from "../components/CardList/CardList";

const MainPage = () => {
  return (
    <>
      <Input />
      <ErrorBoundary>
        <CardList />
      </ErrorBoundary>
    </>
  );
};

export default MainPage;
