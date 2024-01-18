import { Select } from "@chakra-ui/react";

const DropDown = (props)=>{
    return(
        <Select placeholder='Default'>
            <option value='option1'>Complete</option>
            <option value='option2'>Incomplete</option>
        </Select>
    )
}

export default DropDown;