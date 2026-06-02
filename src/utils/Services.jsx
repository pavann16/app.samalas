import axios from "axios";

export const axiosInstance = axios.create({
  baseURL : import.meta.env.VITE_BASE_API_URL,
  headers :{
    "Content-Type":"application/json",
  },
  
})
    
async function get(url,options={}){
  
  if(!options.headers){
    options.headers= {}
    options.headers["Content-Type"]="application/json"
  }
  var token = localStorage.getItem("token");
  if(token){
    options.headers["Authorization"]=`Bearer ${token}`
  }
 
  const promiseCallback = async (resolve, reject) =>{
    try{
      const response = await axiosInstance.get(url,options);
      return resolve(response);
      }
      catch(error){
          return reject(error);
      }
  }
  

  return new Promise(promiseCallback)
}

async function post(url,payload,options={}){
  
  if(!options.headers){
    options.headers= {}
    options.headers["Content-Type"]="application/json"
  }
  var token = localStorage.getItem("token");
  if(token){
    options.headers["Authorization"]=`Bearer ${token}`
  }
 
  const promiseCallback = async (resolve, reject) =>{
    try{
      const response = await axiosInstance.post(url,payload, options);
      return resolve(response);
      }
      catch(error){
        
          return reject(error);
      }
  }
  

  return new Promise(promiseCallback)
}


export const fetchServerInfo = () =>{
  try{
  return get("/healthcheck");
  }catch(error){
      throw new error;
  }
}

export const fetchProfileInfo = () =>{
  try{
  return get("/healthcheck");
  }catch(error){
      throw new error;
  }
}

export const healthcheck = () =>{
  try{
  return get("/healthcheck");
  }catch(error){
      throw new error;
  }
}

export const loginPage = (loginUserDto) =>{
  try{
  return post("/authenticate",loginUserDto);
  }catch(error){
      throw new error;
  }
}

export const registerUser = (data) =>{
  try{
  return post("/register", data);
  }catch(error){
      throw new error;
  }
}

