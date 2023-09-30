import { createSlice } from "@reduxjs/toolkit";


let id = 0;


const empliyeeSlice = createSlice({
    name: "employee",
    initialState: [],
    reducers: {
        //actions:function
        addEmployee:(state,action)=>{
            state.push({
                id:++id,
                name:action.payload.name,
            })
        }
    }
});

export const {addEmployee} = empliyeeSlice.actions;
export default empliyeeSlice.reducer;