import React, { useEffect, useState,createContext }  from 'react'
import { db } from '../firebase/Config';

export const Context =createContext()

export function Datacenter(props){

const [products,setproducts]=useState([]);
 
 

    useEffect(() =>{

        function fetchData(){
           db.collection('products').get()
           .then(result=>{
               const data=result.docs.map(product=>{

                   return{
                       ...product.data(),
                       id:product.id
                   }
               })
               setproducts(data)
           })
            
      
            }
            fetchData()
    
        },[]);



        //ADD FIREBASE MANUELLEMENT
    //       useEffect(() =>{
    //       db.collection('products').add({
          
    //       name:'phone 12',
    //       price:'1200$',
    //       stock_item:'12.223.220',

    //   })
    //     },[]);

    //     console.log(products);

//////////////ADD NEW
  function addnew(product){
      
            // const newdata={  
            //     id:products.length+1,
            //     name:products.name,
            //     price:product.price,
            //     stock_item:product.stock_item,
            //     description:product.description
            // }
            // setproducts([...products,newdata])

          
            db.collection('products').add(product)
            console.log(product)
        }



        function filterpro(id){
            //filtrerID 
              const res=products.filter(data=>data.id == id)
              console.log(res)
              //ajouter dans firebase
              db.collection('products').add(...res)

        }

        
 
        useEffect(()=>{ 
            function fetchData(){
                db.collection('products').get()
                .then(res=>{
                    const resu = res.docs.map(product=>{
                        return{
                            ...product.data(),
                            id:product.id
                        }
                    })
                    setproducts(resu) ; 
                 })  
                
            }
            fetchData()
    
        },[]);

        function deletefb(id){
            db.collection('products').doc(id).delete()
           }

////////////////UPDATE
           function updatec(data,id){
            // const newdata={  
            //     id:id,
            //     name:data.name,
            //     price:data.price,
            //     stock_item:data.stock_item,
            //     description:data.description
            // }
            // setproducts(
            //     products.map(cnt=>cnt.id==id? cnt=newdata :cnt)
                
            //     )
            //     db.collection('products').doc(id).set(data)
                console.log(id)
        }
        
///////////////UPDATE
        // function updatec(product,id){
        //     db.collection('products').set(product,id)
        //     console.log(product)
        // }


        return(
            <div>
            {/* FICHIER DATA */}
            <Context.Provider value =
            {{ products, addnew,filterpro,deletefb,updatec }}>
       
        
    {props.children}
    </Context.Provider>
            
            </div>
          )
        
        }
