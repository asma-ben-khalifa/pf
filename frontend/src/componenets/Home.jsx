import React ,{useEffect} from 'react'
import {useSelector} from "react-redux"
import { useDispatch } from 'react-redux'
import {productsFetch} from '../features/productsSlice'

function Home() {
    
 const {items, status} =  useSelector(state => state.products )
 const dispatch = useDispatch()

 useEffect(() =>{
   dispatch(productsFetch)
 }, [dispatch])

 return (
   <div className='products'>
     
    {items.map((item) =>{
      <div>{item.title}</div>
    }

    )}
    
        </div>
  )
  
  
}

export default Home