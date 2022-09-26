import './App.css';
import List from './Component/List';

const items = [
  {text: 'Item1'},
  {text: 'Item2'},
  {text: 'Item3'},
  {text: 'Item4'},
]

function App() {
  return (
    <div className="App">
      <List items={items} />
    </div>
  );
}

export default App;
