import url from "../url";
import axios from "axios";
const product = {};

product.save = async(data)=>{
    const res = await axios.post(`${url}/api/product/create`,data)
    .then(response=>{return response.data;})
    .catch(error => {return error;})
    return res;
}

product.list = async() =>{
    const res = await axios.get(`${url}/api/product`)
    .then(response=>{return response.data;})
    .catch(error => {return error;})
    return res;
}

product.edit =async(id) =>{
    const res = await axios.get(`${url}/api/product/edit/${id}`)
    .then(response=>{return response.data;})
    .catch(error => {return error;})
    return res;
}

product.update = async(data) =>{
    const res = await axios.put(`${url}/api/product/update/${data.id}`,data)
    .then(response=>{return response.data;})
    .catch(error => {return error;})
    return res;
}

product.destroy = async(id) =>{
    const res = await axios.delete(`${url}/api/product/delete/${id}`)
    .then(response=>{return response.data;})
    .catch(error => {return error;})
    return res;
}

export default product;