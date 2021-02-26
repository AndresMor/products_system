import React, { useEffect, useState } from 'react';
import productService from "../../services/product";
import { useHistory } from "react-router-dom";

import { Link } from "react-router-dom";

function List(){

  const[list, setList ] = useState([]);

  const history = useHistory();

  useEffect(()=>{
    async function fetchDataProduct(){
      const res = await productService.list();
      setList(res.data)
    }
    fetchDataProduct();
  },[]);

  const onClickDelete = async(i,id)=>{
    var yes = confirm("Are you sure to delete this product?");
    if(yes===true){
      const res = await productService.destroy(id);
      if(res.success){
        alert(res.message);
        const newList = list;
        newList.splice(i,1);
        setList(newList);
        history.push('/product/index');
      }else{
        alert(res.message);
      }
    }
  }

  return (
    <section>
      <table class="table">
        <thead class="thead-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Amount</th>
            <th scope="col">State</th>
            <th scope="col">Category</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            list.map((item,i)=>{
              return(
                <tr>
                  <th scope="row">{i}</th>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.amount}</td>
                  <td>{item.state}</td>
                  <td>{item.category.name}</td>
                  <td>
                    <Link to={"/Product/Edit/"+item.id} class="btn btn-light"> Edit </Link>
                    <a class="btn btn-danger" onClick={()=>onClickDelete(i,item.id)}> Delete </a>
                  </td>
                </tr>
              ); 
            })
          }

        </tbody>
      </table>
    </section>
  )
}

export default List;
