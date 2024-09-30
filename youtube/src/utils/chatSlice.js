import { createSlice } from "@reduxjs/toolkit";
import { OFFSEL_LIVE_CHAT } from "./constant";

const chatSlice=createSlice({
    name:'chat',
    initialState:{
        message:[]
    },
    reducers:{
        addMessage:(state,action)=>{
            state.message.slice(OFFSEL_LIVE_CHAT,1)
            state.message.unshift(action.payload)
        }
    }
})
export const{addMessage}=chatSlice.actions
export default chatSlice.reducer