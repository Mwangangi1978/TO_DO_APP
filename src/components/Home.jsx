import {useState} from 'react'
import Header from './Header'
import Input from './Input'
import ToDo from './To_do'
import DropDown from './Dropdown'
import { Flex, Box, Button } from '@chakra-ui/react'


const Home =()=>{

    
    return(
        <Box 
            color={'#F5F5F5'}
            borderRadius={'5px'}
            mx={'auto'}
            maxW={'4xl'}
        >
            <Flex direction={'column'}>
                <Header/>
                <Input type={'add'}/>
                <Flex justifyContent={'space-between'}>
                        <Flex>
                            <DropDown />
                            <Button colorScheme='#725BFF' marginLeft={'5px'}>Mark All Completed</Button>
                        </Flex>
                        <Input type={'search'}/>
                </Flex>
                <ToDo/>
            </Flex>
        </Box>
    )
}

export default Home;