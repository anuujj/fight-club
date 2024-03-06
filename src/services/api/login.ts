import fetchWrapper from "../fetch.ts";

async function login(username: string, password: string): Promise<Response> {
  const url = "http://localhost:3000/api/login"; 
  try{
    const res = await fetchWrapper(url, "POST", { username, password })
  
    const data = await res.json()
    return data; 
  }catch(err){
    console.log('Error in login', err);
    throw err;
  }
}

export default login;
