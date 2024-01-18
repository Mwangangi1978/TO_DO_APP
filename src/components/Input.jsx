import { AddIcon, SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement} from '@chakra-ui/react';



const Field = (props)=>{
    return(
        <InputGroup margin={'5px'}>
            <InputRightElement cursor={'pointer'}>
                {props.type == 'search'? <SearchIcon color={'blue'} onClick={props.onSearch}/> : <AddIcon color={'blue'} onClick={props.onAdd}/>}
            </InputRightElement>
            <Input
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                variant='outline' 
                placeholder={props.type == 'search'? "Search Todos" : "Add Todo"}
            />
        </InputGroup>
    )
}

export default Field;