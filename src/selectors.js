// selectors.js
import { createSelector } from 'reselect';

const getToDos = (state) => state.toDos;
const getFilter = (state) => state.filter;
const getSearchTerm = (state) => state.searchTerm.toLowerCase();

export const getFilteredToDos = createSelector(
  [getToDos, getFilter, getSearchTerm],
  (toDos, filter, searchTerm) => {
    return toDos.filter((toDo) => {
      const matchesFilter = (filter === 'COMPLETED' && toDo.completed) ||
        (filter === 'INCOMPLETE' && !toDo.completed) ||
        filter === 'ALL';

      const matchesSearch = toDo.text.toLowerCase().includes(searchTerm);

      return matchesFilter && matchesSearch;
    });
  }
);
