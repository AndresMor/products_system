import { set } from 'lodash';
import React, { useEffect, useState } from 'react';
import categoryService from "../../services/category";
import productService from "../../services/product";

function Form(){

  const[name, setName] = useState(null);
  const[price,setPrice] = useState(null);
  const[amount,setAmount] = useState(null);
  const[state,setState] = useState(null);
  const[category,setCategory] = useState(null);
  const[list, setList ] = useState([]);


  useEffect(()=>{
    async function fetchDataCategory(){
      const res = await categoryService.list();
      setList(res.data)
    }
    fetchDataCategory();
  },[]);

  const saveProduct = async() =>{
    const data = {
      name,
      price,
      amount,
      state,
      category
    };
    const res = await productService.save(data);
    if(res.success){
      alert(res.message);
      setName('');
      setPrice('');
      setAmount('');
      setState('');
      setCategory('');
    }else{
      alert(res.message);
    }
  };

  return(
    <div>
      <div class="row justify-content-center">
        <div class="col-md-6 mb-3">
          <label for="productName">Product Name</label>
          <input type="text" class="form-control" placeholder="Name" value={name}
          onChange={(event)=>setName(event.target.value)} />
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-md-6 mb-3">
          <label for="price">Price</label>
          <input type="number" class="form-control" placeholder="$5.00" value={price}
          onChange={(event)=>setPrice(event.target.value)} />
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-md-6 mb-3">
          <label for="amount">Amount</label>
          <input type="number" class="form-control" placeholder="Amount"  value={amount}
          onChange={(event)=>setAmount(event.target.value)} />
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-md-6 mb-3">
					<label for="state">State</label>
					<select id="inputState" class="form-control" onChange={(event)=>setState(event.target.value)} value={state}>
             <option selected>Choose...</option>
             <option>Good</option>
             <option>Bad</option>
          </select>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-md-6 mb-3">
					<label for="category">Category</label>
					<select id="inputState" class="form-control" onChange={(event)=> setCategory(event.target.value)} value={category}>
             <option selected>Choose...</option>
             {
               list.map((item)=>{
                 return(
                   <option value={item.id}>{item.name}</option>
                 )
               })
             }
          </select>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-md-6 mb-3">
          <button class="btn btn-dark btn-block" type="submit" onClick={()=>saveProduct()}>Save</button>
        </div>
      </div>
    </div>
  )
}

export default Form;
