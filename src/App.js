import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Datacenter } from './API/Datacenter'
import Products from './components/Products/Products'
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom'
import Navbar from './components/Products/Navbar/Navbar'
import Addnew from './components/Products/Addnew'
import Message from './components/Products/Message'
import Carte from './components/Products/Carte'
import UpdateD from './components/Products/UpdateD'
import Update from './components/Products/Update'


function App() {

  
  return (
    <div className="App"> 
      <Datacenter>
      <Router>
      <Navbar/>  
 <Switch>   
    <Route exact path='/home' component={Products}/> 
    <Route exact path='/Addnew' component={Addnew}/>  
    <Route exact path='/message/:id' component={Message}/>
    <Route exact path='/Carte' component={Carte}/> 
    <Route exact path='/updateD/:id' component={UpdateD}/>
    <Route exact path='/Update/:id' component={Update}/>
     </Switch>
     </Router> 

   
     </Datacenter>

 </div>
  );
}

export default App;
