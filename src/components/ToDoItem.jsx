import { useDispatch } from 'react-redux';
import {
  toggleToDo,
  removeToDo,
} from '../Redux/actions';
import {Text, Flex, Checkbox} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

const TodoItem = ({ toDo, index }) => {
  const dispatch = useDispatch();

  return (
    <Flex direction={'column'} padding={'10px'}>
            
            <Flex align={'center'}>
                <div >   
                        <Flex  key={index} index={index} style={{alignItems: 'center'}} >
                            <span style={{marginRight: '5px'}}>{index + 1}</span>
                            <Checkbox
                                size={'md'}
                                colorScheme="green" 
                                isChecked={toDo.completed}
                                borderBottom={"1px"}
                                borderColor={'black'}
                                cursor={'pointer'}
                                onClick={()=> dispatch(toggleToDo(toDo.index))}
                            >
                                <Text
                                    style={{ textDecoration: toDo.completed ? 'line-through' : 'none' }}
                                >
                                    {toDo.text}
                                </Text>
                            </Checkbox>
                            <DeleteIcon color={'red'} boxSize={"6"} cursor={'pointer'} onClick={()=> dispatch(removeToDo(index))}/>
                        </Flex>    
                </div>
            </Flex>
        </Flex>
  );
};

export default TodoItem;