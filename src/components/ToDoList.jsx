
import { useSelector } from "react-redux";
import ToDoItem from "./TodoItem";
import { Text } from "@chakra-ui/react";

const TodoList = () => {
  const filteredToDos = useSelector((state) => {
    const toDos = state.toDos;
    const filter = state.filter;
    const searchTerm = state.searchTerm.toLowerCase(); // Convert search term to lowercase for case-insensitive search

    return toDos.filter((toDo) => {
      const matchesFilter = (filter === 'COMPLETED' && toDo.completed) ||
        (filter === 'INCOMPLETE' && !toDo.completed) ||
        filter === 'ALL';

      const matchesSearch = toDo.text.toLowerCase().includes(searchTerm);

      return matchesFilter && matchesSearch;
    });
  });

  

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