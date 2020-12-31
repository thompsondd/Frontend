import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import useTodoState from './useTodoState';
import './style.css';
const App = () => {
  const { todos, addTodo, deleteTodo } = useTodoState([]);
  const [color,setColor] = useState('purple');
  const [colorForm, setColorForm]=useState('yellow');
  const [per,setper]= useState(1);
  return (
    <div style={{background: color}} className='App'  >
      <Typography className='h1' component='h1' variant='h2'>
        Todos
        <span>Get things done, one item at a time.</span>
      </Typography>

      <TodoForm
        colorfill={{color:colorForm}}
        opa={{percent:per}}
        saveTodo={todoText => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {
            addTodo(trimmedText);
          }
        }}
      />

      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <button onClick={()=>setColor("red")}>red color</button>
      <button onClick={()=> setColor("blue")}>blue color</button>
      <button onClick={()=> setper(0.8)}>set opacity</button>
      <button onClick={()=>setColorForm("gray")}> gray color form </button>

    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
