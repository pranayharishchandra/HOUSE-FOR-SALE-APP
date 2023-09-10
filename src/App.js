
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// https://fkhadra.github.io/react-toastify/installation/
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ForgotPassword from './pages/ForgotPassword';
import Explore from './pages/Explore';
import Offers  from './pages/Offers';
import Profile from './pages/Profile';
import SignIn  from './pages/SignIn';
import SignUp  from './pages/SignUp';
import Navbar  from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/'               element={<Explore        />} />
          <Route path='/offers'         element={<Offers         />} />

          {/* nesting route because we don't want profile to get rendered immediately,
          we want to get rendered after the data is fetched from firebase, 
          whether we are logged in or not */}
          <Route   path='/profile'      element={<PrivateRoute /> }   >
            <Route path='/profile'      element={<Profile        />} />
          </Route> 

          <Route path='/sign-in'        element={<SignIn         />} />
          <Route path='/sign-up'        element={<SignUp         />} />
          <Route path='/forgot-password' element={<ForgotPassword />} /> 
        </Routes>

        <Navbar />
      
      </Router>

      <ToastContainer />
    </>
  );
}

export default App;
