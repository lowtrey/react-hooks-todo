import React, { createContext } from 'react';
import useTodoState from '../hooks/useTodoState';

const defaultTodos = [
  {id: 1, task: 'Mow the lawn using goats', completed: false},
  {id: 2, task: 'Release the ladybugs into garden', completed: true}
];
export const TodoContext = createContext();
export function TodosProvider(props) {
  const todosStuff = useTodoState(defaultTodos);
  return (
    <TodoContext.Provider value={todosStuff}>
      {props.children}
    </TodoContext.Provider>
  );
};
