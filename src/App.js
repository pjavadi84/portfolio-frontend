import './App.css';
import {UserProvider} from './providers/UserProvider';
import {Login} from './components/Login';

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Login />
      </div>
    </UserProvider>
    
  );
}

export default App;
