import React  from 'react';
import { useDispatch } from 'react-redux';
import '../App.css';
import { addToCart } from '../features/cartSlice';
import {  useGetAllproductsQuery } from '../features/productsApi'


function Home() {
    const dispatch = useDispatch()
 const {data , error , isLoading} = useGetAllproductsQuery();
 
 const handleAddToCart = (produit) =>{
dispatch(addToCart(produit))
 }

 return (
   <div className="home-container">
     {isLoading ? (<p>"isloding.." </p> ): error ?( <p>an error</p> ):
     (
       <>
       <h2>New arrivals</h2>
       <div className="products">
         {data?.map(produit => <div key ={produit.id} className="produit">
           <h3>{produit.name}</h3>
           <img src={produit.image} alt={produit.name} />
         <div className="details">
           <span>{produit.desc}</span>
           <span className='price'>${produit.price}</span>
         </div>
         <button onClick={() => handleAddToCart(produit)}>
                    Add To Cart
        </button>      
        </div>
          )}
       </div>
       </>

     )
     
     }
  </div>
 )
}
export default Home