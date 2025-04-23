import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: 'User',
    initialState:{
        value : null
    },
    reducers:{
        addUser : (state,action)=>{
           state.value = action.payload
        },
        removeUser : (state,action)=>{
            state.value = null
        }
    }
})

export const { addUser,removeUser } = UserSlice.actions
export default UserSlice.reducer