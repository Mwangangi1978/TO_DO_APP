import { AddIcon, SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement} from '@chakra-ui/react';

const Input = (props)=>{
    return(
        <InputGroup>
            <InputLeftElement>
                {props.type == 'search'? <SearchIcon color={'blue'}/> : <AddIcon color={'blue'}/>}
            </InputLeftElement>
            <Input 
                variant='outline' 
                placeholder={props.type == 'search'? "Search Todos" : "Add Todo"}
            />
        </InputGroup>
    )
}

export default Input;