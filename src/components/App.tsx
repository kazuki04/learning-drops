import React from 'react';
import Routes from "./routes/index"
import Header from "../components/molecules/header/Header"
import { useAuth0 } from "@auth0/auth0-react";
import LinearIndeterminate from "../components/atoms/progress/LinearProgress";

const App = () => {
  const { isLoading, isAuthenticated } = useAuth0();


  if (isLoading) {
    return (
      <LinearIndeterminate />
    )
  }

  if (!isAuthenticated) {
    return (
      <Header />
    )
  }

  return (
    <>
      <Routes />
    </>
  )
}

export default App;
