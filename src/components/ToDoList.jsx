
import { useSelector } from "react-redux";
import ToDoItem from "./TodoItem";
import { getFilteredToDos } from '../selectors';
import { Text } from "@chakra-ui/react";

const TodoList = () => {
  const filteredToDos = useSelector(getFilteredToDos);

  return (
    <>
      <Text><em>All your notes here...</em></Text>
      {filteredToDos.map((toDo, index) => (
        <ToDoItem key={index} toDo={toDo} index={index} />
      ))}
    </>
  );
};

export default TodoList;