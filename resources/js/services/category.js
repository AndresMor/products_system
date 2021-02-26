const category_url = "http://127.0.0.1:8000/api/category";
import axios from "axios";
const category = {};

category.list = async() =>{
    const url = category_url + "/index";
    const res = await axios.get(url)
    .then(response=>{return response.data;})
    .catch(error => {return error;})
    return res;
}

category.save = async(data)=>{
    const res = await axios.post(category_url,data)
    .then(response=>{return response.data;})
    .catch(error => {return error;})
    return res;
}

export default category;