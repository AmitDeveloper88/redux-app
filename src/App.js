import logo from './logo.svg';
import './App.css';
import { Counter } from './features/counter/counter';

function App() {
  return (
    <div className="App">
      <h1> Redux application example</h1>
      
      <Counter />
    </div>
  );
}

export default App;
