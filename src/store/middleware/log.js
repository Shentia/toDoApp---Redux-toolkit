const logger = store => next=> action => {
    console.log("action",action);
    console.log("next",next);
    console.log("store",store);
    next(action);
}


export default logger;