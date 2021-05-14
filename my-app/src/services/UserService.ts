export interface User {
  firstName: string
  lastName: string
  email: string
}

export async function fetchAllUsers () {
  const response = await fetch("/api/users");
  return await response.json();
}

export async function createUserApi (data: User) {
  const response = await fetch("/api/user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user: data })
  });
  return await response.json();
}
