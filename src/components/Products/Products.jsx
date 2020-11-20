import React, { useContext } from 'react'
import { Context } from '../../API/Datacenter'
import Product from './Product'

export default function Products() {
    const {products}=useContext(Context)

    return(
        <div className='container'>
             
            
            <div className="row">
            {products.map(data=>(
                        <Product myData={data}/>
                        
    
                    ))}
                
         
 </div>
       
 </div>
      )
    
    }