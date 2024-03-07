import react from 'react';
import {Routes, Route} from 'react-router-dom';
import Login from './maincomponents/login';
import Admin from './maincomponents/admin';
import './App.css';

function App() {

  return (
    <>
      <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  )
}

export default App
