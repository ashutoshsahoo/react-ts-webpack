export interface ICredentials {
  email: string;
  password: string;
}

export const loginUser = async (credentials: ICredentials) => {
  return fetch("http://localhost:3080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(credentials)
  }).then((data) => data.json());
};
