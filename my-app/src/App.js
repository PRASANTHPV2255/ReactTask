
import './App.css';
import LoginPage from './LoginPage';
import MainPage from './MainPage';
import RegisterPage from './RegisterPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<RegisterPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/main' element={<MainPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
