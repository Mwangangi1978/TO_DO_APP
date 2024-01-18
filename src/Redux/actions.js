import { ADD_TO_DO, FILTER_TO_DO, MARK_ALL_COMPLETED, REMOVE_TO_DO, TOGGLE_TO_DO, UPDATE_SEARCH_TERM } from "./actionTypes";

export const addToDo =(text) =>({
    type: ADD_TO_DO,
    payload:{text}
});

export const removeToDo =(id) =>({
    type: REMOVE_TO_DO,
    payload:{id}
})



export const toggleToDo =(id) =>({
    type: TOGGLE_TO_DO,
    payload:{id}
})

export const updateSearchTerm =(searchTerm) =>({
    type: UPDATE_SEARCH_TERM,
    payload:{searchTerm}
})

export const filterToDo =(filter) =>({
    type: FILTER_TO_DO,
    payload:{filter}
})

export const markAllCompleted =() =>({
    type: MARK_ALL_COMPLETED,
    
})
