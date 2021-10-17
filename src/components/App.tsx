import React from 'react';
import Routes from "./routes/index"
import { useAuth0 } from "@auth0/auth0-react";
import LinearIndeterminate from "../components/atoms/progress/LinearProgress";

const App = () => {
  const { isLoading } = useAuth0();

  if(isLoading){
    return (
      <LinearIndeterminate />
    )
  }

  return(
    <>
      <Routes />
    </>
  )
}

export default App;
