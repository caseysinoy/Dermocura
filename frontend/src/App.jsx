import react from 'react';
import {Routes, Route} from 'react-router-dom';
import Login from './maincomponents/login';
import Admin from './maincomponents/admin';
import Adboard from './maincomponents/admin-subpage/admin-dashboard';
import Calendar from './maincomponents/admin-subpage/calendar';
import Profile from './maincomponents/admin-subpage/profile';
import Insert from './maincomponents/admin-subpage/insertdatas';
import './App.css';

function App() {

  return (
    <>
      <Routes>
          <Route exact path="/" element={<Login />} />
            <Route path="/admin" element={<Admin />} >
              <Route index path='admindashboard' element={<Adboard />}/>
              <Route path="calendar" element={<Calendar />} />
              <Route path="profile" element={<Profile />} />
              <Route path="insert" element={<Insert />} />
            </Route>
      </Routes>
    </>
  )
}

export default App
