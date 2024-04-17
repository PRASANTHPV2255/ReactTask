
import './App.css';
import LoginPage from './LoginPage';
import MainPage from './MainPage';
import RegisterPage from './RegisterPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProfilePage from './components/Profile/ProfilePage';
import Settings from './components/Profile/Settings';


function App() {
  return (
    <div className="App">
      {/* Defining Path for different routes */}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<RegisterPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/main' element={<MainPage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/settings' element={<Settings/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
