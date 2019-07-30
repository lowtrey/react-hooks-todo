import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function Todo({ completed, task }) {
  return (
    <ListItem>
      <ListItemText>
        {task}
      </ListItemText>
    </ListItem>
  );
}

export default Todo;