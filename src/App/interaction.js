import axios from 'axios';

const BASE_URL = '';

//const BASE_URL="https://localhost:4000"
export const login = (email,password)=>{
    return axios
    .post(`${BASE_URL}/login`,{email,password})
    .then((res)=>res.data).catch((error)=>(error.response.data))
}

export const signup=(email,firstname,lastname,password)=>{
    return axios
    .post(`${BASE_URL}/register`,{email,firstname,lastname,password})
    .then((res)=>res.data).catch((error)=>(error.response.data));
}

export const forgetpassword=(email)=>{
    return axios
    .post(`${BASE_URL}/forgetpassword`,{email})
    .then((res)=>res.data).catch((error)=>(error.response.data));
}

export const updatepassword=(token,password)=>{
    return axios
    .post(`${BASE_URL}/updatepassword`,
    {password},
    {
        headers:{
            authorization:token
        }
    }
    )
    .then((res)=>res.data).catch((error)=>(error.response.data));
}

export const getfile=(token)=>{
    return axios
    .get(`${BASE_URL}/getfile`,
    {
        headers:{
            authorization:token
        }
    }
    ).then((res)=>res.data).catch((error)=>(error.response.data));

}

export const upload=(token,file)=>{
    const formData=new FormData();
    formData.append('somefile',file);
   return axios.post(`${BASE_URL}/upload`,formData,
    {
        headers:{
            authorization:token
        }
    }
    ).then((res)=>res.data).catch((error)=>(error.response.data));
}

export const getdatas=(token,file)=>{
    return axios
    .get(`${BASE_URL}/file/`+file,
    {
        headers:{
            authorization:token
        }
    }
    ).then((res)=>res.data).catch((error)=>(error.response.data));

}