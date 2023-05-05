import { createSlice } from "@reduxjs/toolkit";


export const likeSlice=createSlice({
    name:"like",
    initialState:[],
    reducers:{
        addtolike:(state,action)=>{
            state.push(action.payload)
        },
        removefromlike:(state,action)=>{
            return state.filter((item)=>item.id!=action.payload)
        }
    }
})

export const {addtolike,removefromlike}=likeSlice.actions;
export default likeSlice.reducer;