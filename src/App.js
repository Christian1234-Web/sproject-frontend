import { Routes, Route,BrowserRouter } from 'react-router-dom';
import StoreContext from "./context/store";

import Home from './pages/Home';
import Signup from './pages/Signup';
import SignIn from './pages/SignIn';
import Setting from './pages/Setting';
import Test from './pages/Test';
import EditProfile from './pages/EditProfile';
import Profile from './pages/Profile';
import Message from './pages/Message';
import Workshop from './pages/Workshop';
import Assesment from './pages/SelfAssesment';
import AssesmentTwo from './pages/SelfAssesmentTwo';
import AssesmentThree from './pages/SelfAssesmentThree';

import './index.css';
import Jobs from './pages/Jobs';
import Application from './pages/Application';
import Dashboard from './pages/Dashboard';
import Steps from './pages/Steps';
import 'notyf/notyf.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <StoreContext>

    <BrowserRouter>
     <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/steps" element={<Steps />} />

          <Route path="/settings" element={<Setting />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/messages" element={<Message />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/self-assesment" element={<Assesment />} />
          <Route path="/self-assesment-two" element={<AssesmentTwo />} />
          <Route path="/self-assesment-three" element={<AssesmentThree />} />
          <Route path="/applications" element={<Application />} />

          <Route path="/test" element={<Test />} />

       </Routes>
       </BrowserRouter>
       </StoreContext>


  );
}

export default App; 