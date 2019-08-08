import React, { createContext, useReducer } from 'react';
import todoReducer from '../reducers/todo.reducer';

const defaultTodos = [
  {id: 1, task: 'Mow the lawn using goats', completed: false},
  {id: 2, task: 'Release the ladybugs into garden', completed: true}
];
export const TodoContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos);
  return (
    <TodoContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodoContext.Provider>
  );
};
