import React from "react";
import "./App.scss";
import { Header } from "./components/Header/Header";
import { Login } from "./components/Login/Login";
import { useToken } from "./hooks/useToken";

const App = () => {
  const { token, setToken } = useToken();

  const setTokenAfterLogin = (tk: string) => {
    setToken(tk);
  };
  if (!token) {
    return <Login setToken={setTokenAfterLogin} />;
  }

  return (
    <div>
      <Header />
      <p>Ashu Sahoo</p>
    </div>
  );
};

export default App;
