const error = store => next => action => {
   if(action.type === "error")
   {
       console.log("Error middleware",action.payload.error);
       next(action);
   } else {
       next(action);
   }
}

export default error;