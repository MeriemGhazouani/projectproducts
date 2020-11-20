 
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../API/Datacenter";
 
export default function Navbar(){ 
  const {products} = useContext(Context);

return(
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">FireBase </a>
        <button className="navbar-toggler"
         type="button" data-toggle="collapse" data-target="#navbarNav" 
         aria-controls="navbarNav" aria-expanded="false" 
         aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
             
        <li className="nav-item">
       <Link className="nav-link"  to="/home"> Home    </Link> 
            </li>  
         
        <li className="nav-item">
       <Link className="nav-link"  to="/Addnew">Add New    </Link> 
            </li>   

            <li className="nav-item">
       <Link className="nav-link"  to="/Carte  "> Carte  {products.length}   </Link> 
            </li>




          </ul>
        </div>
      </nav>

  )
}
