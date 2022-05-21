import './assets/css/bootstrap.min.css';
import './App.css';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Forgetpass from './components/Forgetpass';
import Resetpass from './components/Resetpass';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <>
      {/* <Login /> */}
      {/* Route */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget-password" element={<Forgetpass />} />
          <Route path="/reset-password" element={<Resetpass />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
