import './App.css';
import Todos from './components/Todos';

function App() {
  return (
    <div >
      <Todos items={['Learn React', 'Learn TypeScript', 'Learn Next.js'] } />
    </div>
  );
}

export default App;
