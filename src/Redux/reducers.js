import { ADD_TO_DO, MARK_ALL_COMPLETED, TOGGLE_TO_DO, REMOVE_TO_DO, UPDATE_SEARCH_TERM , FILTER_TO_DO} from "./actionTypes";

const initialState ={
    toDos: [],
    filter: "ALL",
    searchTerm: ""
}


export const toDoReducer = (state= initialState, action)=>{
    switch(action.type){
        case ADD_TO_DO:
            return{
                toDos: [...state.toDos, {text: action.payload.text, completed:false}],
                filter: state.filter,
                searchTerm: state.searchTerm
        }
        case REMOVE_TO_DO:
            return{
                toDos: state.toDos.filter((toDo, index) =>
                index!== action.payload.id),
                filter: state.filter,
                searchTerm: state.searchTerm
        }
        case TOGGLE_TO_DO:
            return{
                toDos: state.toDos.map((toDo, index)=>
                index === action.payload.id ? {...toDo, completed:!toDo.completed}: toDo),
                filter: state.filter,
                searchTerm: state.searchTerm
                
        }
        
        case MARK_ALL_COMPLETED:
            return{
                toDos: state.toDos.map((toDo)=>({...toDo, completed:true})),
                filter: state.filter,
                searchTerm: state.searchTerm
        }
        case FILTER_TO_DO:
            return{
                toDos: state.toDos,
                filter: action.payload.filter,
                searchTerm: state.searchTerm
            } 
        case UPDATE_SEARCH_TERM:
            return{
               toDos: state.toDos,
               filter:state.filter,
               searchTerm: action.payload.searchTerm 
            }
        default:
            return state;
    }
}