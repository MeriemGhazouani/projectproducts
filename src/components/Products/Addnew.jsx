import React, { useContext, useState } from 'react'
import { Context } from '../../API/Datacenter'
import {store} from '../../firebase/Config'

export default function Addnew(props) {

    const {addnew}=useContext(Context)

    const [product,setproduct]=useState([]);

    const handlinputs=(e)=>{
        setproduct({

            ...product, 
           [e.target.name]:e.target.value
        })
        }

        function sendToparent(){
            addnew(product)
            props.history.push('/home')
        }

        ///////  PICTURE =====> FIREBASE

        const onChange = (e) =>{
            const file =e.target.files[0];
            const storageRef = store.storage().ref()
            const  fileref =storageRef.child(file.name)
            fileref.put(file).then(()=>{
                console.log("Uploaded a file Picture Meriem")
            })}

            
    
    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
<div className='col-md-4 mt-5 m-auto'>
<ul className="list-group">
<li><label>    Name_Prod   : <input     onChange={handlinputs} name='name'      type="text" className="from-control"/></label></li>
<li><label>    Price_Prod : <input      onChange={handlinputs} name='price'       type="text" className="from-control"/></label></li>  
<li><label>    Stock_item  : <input    onChange={handlinputs}   name='stock_item ' type="text" className="from-control"/></label></li>
<li> <label>  Description : <input     onChange={handlinputs}  name='description ' type="text" className="from-control"/></label></li>
<li>   <input class='form-control'  onChange={onChange}  type="file" className="from-control"/></li>

</ul>
 <button onClick={sendToparent} className="btn btn-success float-right mt-2">Add New</button>
</div>
</div>




    // <div className='col-md-4 mt-5'>
    //     <div className="list-group">
    //    <label> Name :       <input  class='form-control' name='name'  type="text" className="from-control"/></label>
    //    <label> Price :      <input class='form-control' name='username'   type="text" className="from-control"/></label>
    //    <label> Stock_item : <input class='form-control' name='email' type="text" className="from-control"/></label>
    //    <label> Description :<input class='form-control' name='email' type="text" className="from-control"/></label>
    //    <button  className="btn btn-success float-right mt-2">Add New</button>
    //  </div>
    //  </div>
    )
}
