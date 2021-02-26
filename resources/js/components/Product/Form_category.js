import React, { useEffect, useState } from 'react';
import categoryService from "../../services/category";


function Form(){

  const[name,setName] = useState(null);

  const saveCategory = async() =>{
    const data = {name};
    const res = await categoryService.save(data);
    if(res.success){
      alert(res.message);
      setName('');
    }else{
      alert(res.message);
    }
  };

  return(
    <div>
      <div class="row justify-content-center">
        <div class="col-md-6 mb-3">
          <label for="categorytName">Name Category</label>
          <input type="text" class="form-control" placeholder="Name" value={name}
          onChange={(event)=>setName(event.target.value)}/>
        </div>
      </div>

     
      <div class="row justify-content-center">
        <div class="col-md-6 mb-3">
          <button class="btn btn-dark btn-block" type="submit" onClick={()=>saveCategory()}>Save</button>
        </div>
      </div>
    </div>
  )
}

export default Form;
