import {useState} from 'react'
import Header from './Header'
import Field from './Input'
import ToDo from './ToDoList'
import DropDown from './Dropdown'
import { Flex, Box, Button, Text } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { addToDo, markAllCompleted, updateSearchTerm, filterToDo } from '../Redux/actions'; // Import your Redux actions here
import { createSelector } from 'reselect';
 



const Home =()=>{
    const dispatch = useDispatch()
    const [item, setItem] = useState({newToDo:"", searchTerm:""})
    const handleChange =(event)=>{
        const {value , name} = event.target
        setItem(prevItem=>({
            ...prevItem,
            [name]: value
        }
        ))
    }

    const handleAddToDo =(text)=>{
        dispatch(addToDo(text))
    }
    const handleAdd =()=>{
        if(item.newToDo.trim() !== ""){
            handleAddToDo(item.newToDo.trim());
            setItem(prevItem=>({
                ...prevItem,
                newToDo: ""
            }))
        }
    }
    const handleSearch = ()=>{
        dispatch(updateSearchTerm(searchTerm))
    }
    
    return(
        <Box 
            backgroundColor={'#F5F5F5'}
            borderRadius={'5px'}
            padding={'10px'}
            position={'absolute'}
            top={"0"}
            alignSelf={'center'}

        >
            <Flex direction={'column'} >
                <Header/>
                <Field type={'add'} value={item.newToDo} onChange={handleChange} onAdd={handleAdd} name="newToDo" />
                <Flex justifyContent={'space-between'}>
                        <Flex justifyContent={'space-between'}>
                            <DropDown />
                            <Button colorScheme='purple' onClick={()=> dispatch(markAllCompleted())}><Text fontSize="xs">Mark All Completed</Text></Button>
                        </Flex>
                        <div style={{width: '1/3'}}>
                            <Field type={'search'} name="searchTerm" value={item.search} onChange={handleChange} onSearch={handleSearch} style/>
                        </div>
                </Flex>
                <ToDo/>
            </Flex>
        </Box>
    )
}

export default Home;