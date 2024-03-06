import fetchWrapper from "../fetch.ts";

async function signup(username: string, password: string, email:string): Promise<Response> {
  const url = "http://localhost:3000/api/register"; 
  try{
    const res = await fetchWrapper(url, "POST", { username, password, email })
  
    const data = await res.json()
    return data; 
  }catch(err){
    console.log('Error while signing up', err);
    throw err;
  }
}

export default signup;
