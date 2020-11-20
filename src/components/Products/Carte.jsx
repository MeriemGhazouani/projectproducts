import React, { useContext } from 'react'
import { Context } from '../../API/Datacenter'

export default function Carte() {
    
    const {products,deletefb} = useContext(Context)


    function sendtodata(id){
        deletefb(id)
    }


    return (
        <div>
            <h1>Carte</h1>
            
            {products.map(data=>(
                  
    <ul className="list-group col-md-4 mt-5">
    <li className="list-group-item btn btn-dark ">ID {data.id}</li>
    <li className="list-group-item danger"> </li>
     

    <li className="list-group-item">{data.name}</li>
    <li className="list-group-item">{data.price}</li>
    <li className="list-group-item">{data.stock_item}</li>
    <li className="list-group-item">{data.description}</li>


   <button onClick ={sendtodata.bind(this,data.id)}className="btn btn-danger col-md-12 " >delete
   </button>
{/*      
   <button className="btn btn-danger "oclick={sendtodatacenter} >Add To favorit
   </button> */}


           </ul>
          
    


            ))}
        </div>
    )
}
