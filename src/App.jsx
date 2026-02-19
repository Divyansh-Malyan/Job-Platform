import React from 'react'
import LoginPage from './pages/LoginPage/LoginPage';
import SignUp from './pages/SignUp/SignUp';
import Student from './pages/Student/Student';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './pages/HomePage/HomePage';
import HomeLayout from './components/HomeLayout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* With navbar */}

        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<MainLayout />}>
          <Route path="/student/profile" element={<Student />} />
        </Route>
        {/* Without navbar */}

        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
