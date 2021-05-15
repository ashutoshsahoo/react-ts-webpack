import { useState } from "react";

export const useToken = () => {
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    if (tokenString !== null) {
      const userToken = JSON.parse(tokenString);
      return userToken.token;
    }
  };

  const [token, setToken] = useState<string>(getToken());

  const saveToken = (userToken: any) => {
    sessionStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token
  };
};
