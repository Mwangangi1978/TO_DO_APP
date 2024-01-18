import { Select } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { filterToDo } from '../Redux/actions';



const DropDown = ()=>{
    const dispatch = useDispatch()
    const currentFilter = useSelector((state)=> state.filter);
    const handleFilter = (filter)=>{
        dispatch(filterToDo(filter))
    }
    return(
        <Select _focus={'none'} borderColor={'gray-300'} color={'black'} value={currentFilter} onChange={(e)=> handleFilter(e.target.value)}>
            <option value='ALL'>Default</option>
            <option value='COMPLETED'>Completed</option>
            <option value='INCOMPLETE'>Incomplete</option>
        </Select>
    )
}

export default DropDown;