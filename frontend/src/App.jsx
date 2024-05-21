import {Routes, Route} from 'react-router-dom'; // react router it is basically what it is it routes you through files
import Login from './maincomponents/login';
import Admin from './maincomponents/admin';
import Adboard from './maincomponents/admin-subpage/admin-dashboard';
import Calendar from './maincomponents/admin-subpage/calendar';
import Insert from './maincomponents/admin-subpage/insertdatas';
import Chart from './maincomponents/admin-subpage/charts';
import SDLearning from './maincomponents/admin-subpage/skinlearning';
import ITrain from './maincomponents/admin-subpage/imagetrain';
import './App.css';

import 'react-calendar/dist/Calendar.css';

function App() {

  return (
    <>
    {/* React Router is a navigation tools that allows users to navigate through the website
      To navigate around the website is a lot like navigating through filesExplorer. But it does not create
      the navigation links. To create the navigation links is to go to the navigate.jsx under maincomponents.
    */}
      <Routes>
        {/* / is the first page that a user will see. */}
          <Route exact path="/" element={<Login />} />
            <Route path="/admin" element={<Admin />} >
              {/* index allows you to set the default page whenever you log in. */}
              <Route index path='admindashboard' element={<Adboard />}/>
              <Route path="calendar" element={<Calendar />} />
              <Route path="insert" element={<Insert />} />
              <Route path="chart" element={<Chart />} />
              <Route path="skinlearning" element={<SDLearning />} />
              <Route path="skindiseasetraining" element={<ITrain />} />
            </Route>
      </Routes>
    </>
  )
}

export default App
