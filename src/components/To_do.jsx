import { DeleteIcon } from "@chakra-ui/icons";
import { Text, Flex, Checkbox } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { toggleToDo,removeToDo } from '../Redux/actions'; // Import your Redux actions here
import { createSelector } from 'reselect';



const ToDo = ()=>{
        
    const filteredToDos = useSelector((state)=>{
        const toDos = state.toDos;
        const filter = state.filter;
        const searchTerm = state.searchTerm;
        return toDos.filter((toDo)=>{
            const matchesFilter = (filter === "COMPLETED" && toDo.completed) || (filter === "INCOMPLETED" && !toDo.completed) || (filter === "ALL");
            const matchesSearch = toDo.text.toLowerCase().includes(searchTerm)

            return matchesFilter && matchesSearch
        })
    })

    

    const dispatch = useDispatch();

    return(
        <Flex direction={'column'} padding={'10px'}>
            <Text><em>All your notes here...</em></Text>
            <Flex align={'center'}>
                <ol >
                    {filteredToDos.map((toDo, index)=>(
                        
                        <li  key={index} style={{marginTop: '5px', marginBottom: '5px', flex:'row', justifyContent:'space-between'}} >
                            <Checkbox
                                size={'md'}
                                colorScheme="green" 
                                isChecked={toDo.completed}
                                borderBottom={"1px"}
                                borderColor={'black'}
                                cursor={'pointer'}
                                onClick={()=> dispatch(toggleToDo(index))}
                            >
                                <Text
                                    style={{ textDecoration: toDo.completed ? 'line-through' : 'none' }}
                                >
                                    {toDo.text}
                                </Text>
                            </Checkbox>
                            <DeleteIcon color={'red'} boxSize={"6"} cursor={'pointer'} onClick={()=> dispatch(removeToDo(index))}/>
                        </li>
                    ))}
                    
                </ol>
            </Flex>
        </Flex>
    )
}

export default ToDo;