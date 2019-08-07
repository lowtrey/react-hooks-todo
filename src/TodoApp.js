import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useTodoState from './hooks/useTodoState';
import { TodosProvider } from './contexts/todos.context';

function TodoApp() {
  const initialTodos = [{ id: 1, task: 'Pet A Monkey', completed: false }];
  const { 
    addTodo, 
    editTodo, 
    removeTodo, 
    todos, 
    toggleTodo 
  } = useTodoState(initialTodos);

  return (
    <Paper 
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: '#fafafa'
      }}
      elevation={0}
    >
      <AppBar color='primary' position='static' style={{ height: '64px' }}>
        <Toolbar>
          <Typography color='inherit'>TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify='center' style={{ marginTop: '1rem' }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodosProvider>
            <TodoForm addTodo={addTodo} />
            <TodoList 
              todos={todos} 
              removeTodo={removeTodo} 
              toggleTodo={toggleTodo} 
              editTodo={editTodo}
            />
          </TodosProvider>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;