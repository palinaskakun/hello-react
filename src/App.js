import {useState} from 'react';
import logo from './logo.svg';
import './App.css';

const isLoggedIn = true;

const todos = [
  { id: 1, text: 'Learn React (And have fun doing it!)' },
  { id: 2, text: 'Build a project' },
  { id: 3, text: 'Deploy to Netlify' }
];


function TodoList() {
  return (
    <div>
      <h2>Todo List</h2>
      <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
        {todos.map(todo => (
          <li key={todo.id} style={{ textAlign: 'left', marginBottom: '5px' }}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

function TodoItem({ text }) {
  return <li>{text}</li>;
}


function MagicButton() {
  const [count, setCount] = useState(0);
  function countClicks() {
    setCount(count + 1);
    alert('I count how many times you click on me!');
  }
  return (
    <button onClick={countClicks}>
      Magic {count} times
    </button>
  );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <TodoList />
        <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
          <TodoItem text="Finish lab assignment" />
          <TodoItem text="Work on final project" />
          <TodoItem text="Master React" />
        </ul>
        <MagicButton />
        <br></br>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Palina Skakun is learning React!😍
        </a>
      </header>
    </div>
  );
}

export default App;
