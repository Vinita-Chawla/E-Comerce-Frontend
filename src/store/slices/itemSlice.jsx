import {createSlice, createAction, createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"


export const fetchItems = createAsyncThunk("fetchItems", async()=>{
    const response = await axios("https://fakestoreapi.com/products");
    return response.data;
})

export const clickAction = createAction("clickAction")

const itemSlice = createSlice({
    name:"items",
    initialState:{
        isLoading:false,
        isError:false,
        data:null
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchItems.pending,(state,action)=>{
            state.isLoading= true;
        })
        builder.addCase(fetchItems.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchItems.rejected, (state,action)=>{
            state.isError = true
        })
        builder.addCase("clickAction",(state,action)=>{
            state.itemClicked = state?.data?.find((u)=> String(u.id) === action.payload);
        })
    }

})

export default itemSlice.reducer