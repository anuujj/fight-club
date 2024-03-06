import { getSessionToken } from "../utils";

export default async function fetchWrapper(url:string, method = "GET", body?:any, headers?:any) {
  const commonHeader = {
    "Content-Type": "application/json",
    "Session-Token": getSessionToken(),
    ...headers,
  };
  try {
    const response = await fetch(url, {
      method,
      headers: commonHeader,
      body: body ? JSON.stringify(body) : undefined,
    });
    //error handling here
    if(response.status===401 && !url.includes('login')){
      window.location.href = '/login';
    }
    return response;
  } catch (err:any) {
    return Promise.reject({error:'some error occured'});
  }
}
