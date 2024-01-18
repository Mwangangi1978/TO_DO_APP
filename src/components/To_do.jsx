import { DeleteIcon, CheckIcon } from "@chakra-ui/icons";
import { Text, Flex } from "@chakra-ui/react";

const ToDo = (props)=>{
    return(
        <Flex direction={'column'}>
            <Text>All your notes here...</Text>
            <Flex align={'center'}>
                <p></p>
                <DeleteIcon/>
                <CheckIcon/>
            </Flex>
        </Flex>
    )
}