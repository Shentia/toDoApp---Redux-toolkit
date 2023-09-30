import React, { useEffect,useState} from "react";
import { loadTasks } from "../store/tasks";
import { useDispatch ,useSelector} from "react-redux";
// import storeContext from "../context/storeContext";

const Tasks = () => {
    
//    const store = useContext(storeContext);  
    // const [tasks, setTasks] = useState([]);
    const dispatch = useDispatch();
    const {tasks,loading} = useSelector(state => state.tasks);

    useEffect(()=>{
        dispatch(loadTasks());
    }, [dispatch])

    //    const unsubscribe = store.subscribe(()=>{
    //         const storeTasks = store.getState().tasks.tasks;
    //         if(storeTasks !== tasks) {
    //             setTasks(storeTasks);
    //         }
    //     })
    //     return  () => unsubscribe();
    // },[])

    // console.log(taskSlice.tasks);

    return (
        <> 
            {loading ? <p>Loading...</p> :   
                <div>
                    {tasks.map(task => <p key={task.id}>{task.task}</p>)}
                </div>
            }
        </>
    )
    
}
export default Tasks;