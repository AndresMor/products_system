const product_url = "http://127.0.0.1:8000/api/product";
import axios from "axios";
const product = {};

product.save = async(data)=>{
    const url = product_url + "/create";
    const res = await axios.post(url,data)
    .then(response=>{return response.data;})
    .catch(error => {return error;})
    return res;
}

product.list = async() =>{
    const res = await axios.get(product_url)
    .then(response=>{return response.data;})
    .catch(error => {return error;})
    return res;
}

product.edit =async(id) =>{
    const urlEdit = product_url + "/edit/" + id;
    const res = await axios.get(urlEdit)
    .then(response=>{return response.data;})
    .catch(error => {return error;})
    return res;
}

product.update = async(data) =>{
    const urlUpdate = product_url + "/update/" +data.id;
    const res = await axios.put(urlUpdate,data)
    .then(response=>{return response.data;})
    .catch(error => {return error;})
    return res;
}

product.destroy = async(id) =>{
    const urlDestroy = product_url + "/delete/" + id;
    const res = await axios.delete(urlDestroy)
    .then(response=>{return response.data;})
    .catch(error => {return error;})
    return res;
}

export default product;