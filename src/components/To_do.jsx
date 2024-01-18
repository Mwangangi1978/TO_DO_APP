import { DeleteIcon, CheckIcon } from "@chakra-ui/icons";
import { Text, Flex, Checkbox } from "@chakra-ui/react";

const ToDo = (props)=>{
    return(
        <Flex direction={'column'}>
            <Text><em>All your notes here...</em></Text>
            <Flex align={'center'}>
                <Checkbox size={'md'} colorScheme="green" isChecked={props.isChecked}>{props.todo}</Checkbox>
                <DeleteIcon/>
            </Flex>
        </Flex>
    )
}