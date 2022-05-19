import './assets/css/bootstrap.min.css';
import './App.css';
import Login from './components/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Forgetpass from './components/Forgetpass';
import Resetpass  from './components/Resetpass';

function App() {
  return (
    <>
    {/* <Login /> */}
    {/* Route */}

    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/forgot-password" element={<Forgetpass/>}/>
        <Route path="/reset-password" element={<Resetpass/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
