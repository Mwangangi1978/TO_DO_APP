import {useState} from 'react'
import Header from './Header'
import Input from './Input'
import ToDo from './To_do'
import DropDown from './Dropdown'
import { Flex, Box, Button } from '@chakra-ui/react'


const Home =()=>{
    return(
        <Box>
            <Flex direction={'column'}>
                <Header/>
                <Input/>
                <Flex justifyContent={'space-between'}>
                        <Flex>
                            <DropDown/>
                            <Button colorScheme='#725BFF'>Mark All Completed</Button>
                        </Flex>
                        <Input/>
                </Flex>
                <ToDo/>
            </Flex>
        </Box>
    )
}