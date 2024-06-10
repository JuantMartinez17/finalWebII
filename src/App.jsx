import './App.css';
import Login from './components/Login'
import NavBar from './components/NavBar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Login/>
    </BrowserRouter>
  );
}

export default App;
