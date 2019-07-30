import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import Todo from './Todo';

function TodoList({ editTodo, removeTodo, todos, toggleTodo }) {
  if(todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <>
              <Todo 
                {...todo}
                key={todo.id}
                editTodo={editTodo}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
              />
              {i < todos.length - 1 && <Divider />}
            </>
          ))}
        </List>
      </Paper>
    );
  return null;
}

export default TodoList;