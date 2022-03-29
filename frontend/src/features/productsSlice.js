import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

const initialState={
    items:[],
    status: null
};
export const productsFetch = createAsyncThunk(
    "products/productsFetch",
   async() => {
    const response = await axios.get("http://localhost:3003/products" ,{ headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.84 Safari/537.36' }  })
    return response?.data   
}
)
const productsSlice =  createSlice({
    name: "products",
    initialState,
    reducers:{},
    extraReducers:{
        [productsFetch.pending]: (state, action) =>{
            state.status = "pending"
        },
        [productsFetch.fulfilled]: (state, action) =>{
            state.status = "succes"
            state.items= action.payload
        },
        [productsFetch.rejected]: (state, action) =>{
            state.status = "pending"
        }
    }
});




export default productsSlice.reducer