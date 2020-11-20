import React, { useContext, useState ,useEffect } from 'react'
import { Context } from '../../API/Datacenter'
 

export default function Update(props){
    
const [product,setproduct]=useState({})


const {products,updatec}=useContext(Context)

    const {id}=props.match.params // <==destraction 


    function handleUpdate(e){
        setproduct({
            ...product,
            [e.target.name]:e.target.value
        })
    }

    function sentToparent(){
        
        updatec(product,id)
        props.history.push('/home')
    } 

    
    useEffect (() =>{
        products.filter(data=>data.id==id)
        .map(data=>{
            setproduct({
                name:data.name,
                price:data.price,
                stock_item:data.stock_item,
                description:data.description
            }) })
        
    },[]);
 
    
return(
  
    <div class='form-group col-md-6 offset-3 mt-5'>
    <h1 className='text-secondary text-center'>Update Contact</h1>
    <input name ='name' onChange= {handleUpdate} defaultValue={product.name}   type="text" className="from-control"/>
    <input name ='price' onChange= {handleUpdate} defaultValue={product.price}  type="text" className="from-control"/>
    <input name = 'stock_item' onChange= {handleUpdate} defaultValue={product.stock_item}   type="text" className="from-control"/>
    <input name = 'description' onChange= {handleUpdate} defaultValue={product.description}   type="text" className="from-control"/>

    <button onClick= {sentToparent} className="btn btn-warning float-right mt-2"> Update contact</button>
    </div>

   
   
)


}