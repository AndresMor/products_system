import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import productService from "../../services/product";
import categoryService from "../../services/category";

function Edit(props){

    const[id, setId] = useState(null);
    const[name, setName] = useState(null);
    const[price,setPrice] = useState(null);
    const[amount,setAmount] = useState(null);
    const[state,setState] = useState(null);
    const[category,setCategory] = useState(null);
    const[selectCategory, setSelectCategory] = useState(null);
    const[list, setList ] = useState([]);

    const history = useHistory();


    useEffect(()=>{
        async function fetchDataProduct(){
            let id = props.match.params.id;
            const res = await productService.edit(id);

            if(res.success){
                console.log(res.data);
                const data = res.data;
                setId(data.id)
                setName(data.name)
                setPrice(data.price)
                setAmount(data.amount)
                setState(data.state)
                setCategory(data.category_id)
                setSelectCategory(data.category.name)
            }else{
                alert(res.message);
            }
        }
        fetchDataProduct();

        async function fetchDataCategory(){
            const res = await categoryService.list();
            setList(res.data)
          }
        fetchDataCategory();

    },[]);

    const updateProduct = async() =>{
        const data = {
            id,
            name,
            price,
            amount,
            state,
            category
        }

        const res = await productService.update(data);
        if (res.success) {
            alert(res.message)
            history.push('/product/index');
          }
          else {
            alert(res.message)
        }
    }

  return (
    <div>
      <h4>Edit product </h4>
      <hr/>
      <div class="row justify-content-center">
        <div class="col-md-6 mb-3">
          <label for="productName">Name Product</label>
          <input type="text" class="form-control" value={name} 
           onChange={(event)=>setName(event.target.value)}/>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-md-6 mb-3">
          <label for="price">Price</label>
          <input type="email" class="form-control" placeholder="$5.00" value={price}
          onChange={(event)=>setPrice(event.target.value)}/>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-md-6 mb-3">
          <label for="amount">Amount</label>
          <input type="text" class="form-control" placeholder="5" value={amount} 
          onChange={(event)=>setAmount(event.target.value)}/>
        </div>
      </div>


      <div class="row justify-content-center">
        <div class="col-md-6 mb-3">
					<label for="state">State</label>
					<select id="inputState" class="form-control" value={state} onChange={(event)=>setState(event.target.value)}>
             <option selected>Choose...</option>
             <option>Good</option>
             <option>Bad</option>
          </select>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-md-6 mb-3">
					<label for="category">Category</label>
					<select id="inputCategory" class="form-control" value={category} onChange={(event)=> setCategory(event.target.value)}>
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
          <button class="btn btn-dark btn-block" type="submit" onClick={()=>updateProduct()}>Save</button>
        </div>
      </div>
    </div>
  )

}

export default Edit;
