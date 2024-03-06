async function checkUsername(username: string): Promise<Response> {
  const url = "http://localhost:3000/api/checkUsername";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username }),
  });
  if (!response.ok) throw new Error("Username already exists");
  const data = await response.json();
  return data;
}

export default checkUsername;
