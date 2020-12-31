import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './useInputState';

const TodoForm = ({ saveTodo,colorfill,...props }) => {
  const { value, reset, onChange } = useInputState();
  const {color}=colorfill;
  const {percent}=props.opa;
  return (
    <form
      onSubmit={event => {
        event.preventDefault();

        saveTodo(value);
        reset();
      }}>
      <TextField
        style={{backgroundColor: color, opacity:percent}}
        className='TextField'
        variant='outlined'
        placeholder='Add todo'
        margin='normal'
        onChange={onChange}
        value={value}
      />
    </form>
  );
};

export default TodoForm;

