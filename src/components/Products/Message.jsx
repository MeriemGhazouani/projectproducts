import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../API/Datacenter'

export default function Message(props) {

    const {products} = useContext(Context)

    const id=props.match.params.id

    return(
        products.filter(data=>data.id==id)
        .map(info=>(




            <div className='col-md-4 mt-5'>
            <ul className="list-group">
    
                     <li className="list-group-item btn btn-warning">Products Id{props.match.params.id}</li>
                    <li className="list-group-item">Name : {info.name}</li>
                    <li className="list-group-item"> Price : {info.price}</li>
                    <li className="list-group-item">stock_item : {info.stock_item}</li>
                    <li className="list-group-item">description: {info.description} </li>   
                   
                    
            </ul>
     
           
        </div>








        ))
            
    )
}



{/* <div>
    
               
               <h1>Id{props.match.params.id}</h1> 

               <h1>Name : {info.name}</h1>
               <h1>Price : {info.price}</h1>
               <h1>stock_item : {info.stock_item} </h1>
               <h1>description: {info.description} </h1>
               
       </div> */}