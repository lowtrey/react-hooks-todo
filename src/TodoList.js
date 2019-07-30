import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import Todo from './Todo';

function TodoList({ editTodo, removeTodo, todos, toggleTodo }) {
  return (
    <Paper>
      <List>
        {todos.map((todo, i) => (
          <>
            <Todo 
              id={todo.id}
              task={todo.task} 
              key={todo.id} 
              completed={todo.completed} 
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
            />
            {i < todos.length - 1 && <Divider />}
          </>
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;