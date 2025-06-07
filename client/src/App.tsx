import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/Login';
import Home from './pages/Home';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from './context/useAuth';
//import Ativo from './pages/Ativo';

function App() {
  return (
    // <AuthProvider>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<Login />} />
    //       <Route path="/home" element={
    //         <PrivateRoute>
    //           <Home />
    //         </PrivateRoute>
    //       } />
    //     </Routes>
    //   </BrowserRouter>
    // </AuthProvider>
    <UserProvider>

      <ToastContainer/>
    </UserProvider>
  );
}

export default App;
