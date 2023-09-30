import axios from "axios";
import {apiCallBegan} from "../api";

const api= ({dispatch}) => next => async action => {
    if (action.type !== apiCallBegan.type) {
        return next(action);
    }
    const {url,method,data,onStart,onSuccess,onError} = action.payload;

    if(onStart) dispatch({type:onStart});

try {
    const response = await axios.request({
        baseURL:"http://localhost:4000/api",
        method,
        url,
        data
    })
    
    
    dispatch({type:onSuccess,payload:response.data});
    
} catch (error) {
    if(onError)    dispatch({type:onError,payload:error.message});

    dispatch({type:"error",payload:error.message});
}
};


export default api;