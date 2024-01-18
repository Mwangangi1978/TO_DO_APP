import { useDispatch } from 'react-redux';
import { toggleToDo, removeToDo } from '../Redux/actions';
import { Text, Flex, Checkbox } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

const TodoItem = ({ toDo, index }) => {
  const dispatch = useDispatch();

  return (
    <Flex direction={'column'} padding={'10px'}>
      <Flex align={'center'} justify={'space-between'} borderBottom={'1px'} borderColor={'black'} paddingBottom={'10px'}>
        <div>
          <Flex style={{ alignItems: 'center' }} >
            <span style={{ marginRight: '5px' }}>{index + 1}</span>
            <Checkbox
              size={'md'}
              colorScheme="green"
              isChecked={toDo.completed}
              cursor={'pointer'}
              onChange={() => dispatch(toggleToDo(index))}
            >
              <Text style={{ textDecoration: toDo.completed ? 'line-through' : 'none' }}>
                {toDo.text}
              </Text>
            </Checkbox>
          </Flex>
        </div>
        <DeleteIcon
          color={'red'}
          boxSize={'6'}
          cursor={'pointer'}
          onClick={() => dispatch(removeToDo(index))}
        />
      </Flex>
    </Flex>
  );
};

export default TodoItem;
