import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../API/Datacenter'

export default function Product(props) {

    const {products}=useContext(Context)


    const{filterpro}=useContext(Context)

    function sendtodatacenter(){
        filterpro(props.myData.id)
    }

    return (
        <div className='col-md-4 mt-5'>
        <ul className="list-group">
 
        <li className="list-group-item btn btn-dark">Products{props.myData.id}</li>
        <li className="list-group-item">{props.myData.name}</li>
        <li className="list-group-item">{props.myData.price}</li>
        <li className="list-group-item">{props.myData.stock_item}</li>

        <li className="list-group-item"> <Link className="btn btn-active" to={"/UpdateD/"+props.myData.id}>Update </Link></li>
        <li className="list-group-item"> <Link className="  btn btn-warning" to={"/Update/"+props.myData.id}>Update NEW </Link></li>
























        
            
        <Link className="btn btn-warning float-right mt-2" to={"/Message/"+props.myData.id}>View details </Link>
        <button  onClick={sendtodatacenter} className="btn btn-primary float-right mt-2"> Add to carte</button>
                
        </ul>
 
       
    </div>
    )
}
