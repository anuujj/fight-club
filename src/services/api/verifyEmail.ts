import fetchWrapper from "../fetch";

async function verifyEmail(token: string): Promise<Response> {
    const url = `http://localhost:3000/api/verify/${token}`; 
    try{
      const res = await fetchWrapper(url, "GET", )
    
      const data = await res.json()
      return data; 
    }catch(err){
      console.log('Error while signing up', err);
      throw err;
    }
  }
  
  export default verifyEmail;
  