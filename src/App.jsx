import './App.css';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Login from './Pages/Login';
import DevMock from './Pages/DevMock';
import Footer from './Components/Footer';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from '../firebase';
import GettingStarted from './Pages/GettingStarted';
import JavaScriptInterview from './Pages/JavaScriptInterview/JavaScriptInterview';
import ThankYou from './Pages/ThankYou '; 
import ReactInterview from './Pages/ReactInterview/ReactInterview'
import NodejsInterview from './Pages/NodejsInterview/NodejsInterview'

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Logged In");
        // Redirect to "/" only if user is not on /starting
        if (location.pathname === "/login") {
          navigate('/');
        }
      } else {
        console.log("Logged Out");
        // Redirect to "/login" only if user is not on the login page
        if (location.pathname !== "/login") {
          navigate('/login');
        }
      }
    });
  }, [navigate, location]);

  return (
    <>
      <Routes>
        <Route path="/" element={<DevMock />} />
        <Route path="/login" element={<Login />} />
        <Route path="/starting" element={<GettingStarted />} />
        <Route path='/starting/javascriptInterview' element={<JavaScriptInterview/>} />
        <Route path='/starting/reactInterview' element={<ReactInterview />} />
        <Route path='/starting/nodejsInterview' element={<NodejsInterview />} />
        <Route path='/thank-you' element={<ThankYou/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
