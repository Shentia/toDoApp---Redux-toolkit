

import { createSlice,  } from '@reduxjs/toolkit';
import {apiCallBegan} from "./api";

let initialState = {
    tasks:[],
    loading:false,
    error:null
}

// export const fetchTasks = createAsyncThunk('fetchTasks', async (a, {rejectWithValue}) => {
//     try {
//         const response = await axios.get("/tasks")
//     return {tasks:response.data};
  
//     } catch (error) {
//         return rejectWithValue({type:"error",payload:error.message})
//     }
// });


 const taskSlice = createSlice({ 
    name: "tasks",
    initialState: initialState,
    reducers: {
        //actions:function

        apiRequestFailed:(state,action)=>{
                state.error = action.payload;
                state.loading = false;
        },

        apiRequest:(state,action)=>{
            state.loading = true;
        },

        getTasks:(state,action)=>{
            state.tasks = action.payload;
            state.loading = false;
            

        },

       
        // addTask:(state,action,)=>{
        //     state.tasks.push({
        //         id:++id,
        //         task:state.tasks.task,
        //         completed:false
        //     })
        // },
        addTask:(state,action,)=>{
            state.tasks.push(action.payload,)
        },
        removeTask:(state,action)=>{
            const index = state.tasks.findIndex(task => task.id === action.payload.id);
            state.tasks.splice(index,1);
        },
        completedTask:(state,action)=>{
            const index = state.tasks.findIndex(task => task.id === action.payload.id);
            state.tasks[index].completed = action.payload.completed;


        }
        
    },
    // extraReducers:{
    //     [fetchTasks.pending]:(state,action)=>{
    //         state.loading = true;
    //     },
    //     [fetchTasks.fulfilled]:(state,action)=>{
    //         state.tasks = action.payload.tasks;
    //     },
    //     [fetchTasks.rejected]:(state,action)=>{
    //         state.loading = false;
    //         state.error = action.error.message;
    //     }
    // }
 });


    export const {apiRequest,apiRequestFailed, getTasks,addTask,removeTask,completedTask} = taskSlice.actions;
    export default taskSlice.reducer;

//action creators
const url = "/tasks";
   export  const loadTasks =() => {
    
        return apiCallBegan({
            url:url,
            method:"get",
            onStart:apiRequest.type,
            onSuccess:getTasks.type,
            onError:apiRequestFailed.type
        })
    }

export const addNewTask = (task) => {
    return apiCallBegan({
        url:url,
        method:"post",
        data:task,
        onSuccess:addTask.type,
        onError:apiRequestFailed.type
    })
}

export const updateTask = (task) => {
    return apiCallBegan({
        url:`${url}/${task.id}`,
        method:"PATCH",
        data:task,
        onSuccess:completedTask.type,
        onError:apiRequestFailed.type
    })
}

export const removingTask = (task) => {
    return apiCallBegan({
        url:`${url}/${task.id}`,
        method:"DELETE",
        onSuccess:removeTask.type,
        onError:apiRequestFailed.type
    })
}