import url from "../url";
import axios from "axios";
const category = {};

category.list = async() =>{
    const res = await axios.get(`${url}/api/category/index`)
    .then(response=>{return response.data;})
    .catch(error => {return error;})
    return res;
}

category.save = async(data)=>{
    
    const res = await axios.post(`${url}/api/category`,data)
    .then(response=>{return response.data;})
    .catch(error => {return error;})
    return res;
}

export default category;