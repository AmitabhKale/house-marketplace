import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Navbar from './component/Navbar';
import Explore from './pages/Explore';
import ForgotPassword from './pages/ForgotPassword';
import Offers from './pages/Offers';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './component/PrivateRoute';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Explore />} />
          <Route path='/offers' element={<Offers />} />
         <Route path='/profile' element={<PrivateRoute />}>
            <Route path='/profile' element={<Profile />} />
         </Route>
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='forgot-password' element={<ForgotPassword />} />
        </Routes>
      <Navbar />
      </Router>

      <ToastContainer />
    </>
   
  );
}

export default App;
