import React from 'react'
import LoginPage from './pages/LoginPage/LoginPage';
import SignUp from './pages/SignUp/SignUp';
import Student from './pages/Student/Student';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/sign-up" element={<SignUp/>} />
      <Route path="/student/profile" element={<Student/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
