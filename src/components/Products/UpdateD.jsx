import React, { useContext } from 'react'
import { Context } from '../../API/Datacenter'

export default function UpdateD(props) {

    const {products}=useContext(Context)
    const id=props.match.params.id

     return(
        products.filter(data=>data.id==id)
        .map(info=>(
            
<div>
               
               <h1>Id{props.match.params.id}</h1> 
               <input value={info.id}/>
               <input value={info.name}/>
               <input value={info.price}/>
               <input value={info.stock_item}/>
               
</div>
        ))
            
    )
}