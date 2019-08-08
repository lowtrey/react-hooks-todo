import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';
import { TodoContext } from './contexts/todos.context';

function EditTodoForm({ id, task, toggleEditForm }) {
  const [value, handleChange, reset] = useInputState(task);
  const { dispatch } = useContext(TodoContext);
  return (
    <form 
      onSubmit={e => {
        e.preventDefault();
        dispatch({ type: 'EDIT', id: id, newTask: value });
        reset();
        toggleEditForm();
      }}
      style={{ marginLeft: '1rem', width: '50%' }}
    >
      <TextField 
        fullWidth 
        autoFocus
        value={value} 
        margin='normal' 
        onChange={handleChange} 
      />
    </form>
  );
}

export default EditTodoForm;