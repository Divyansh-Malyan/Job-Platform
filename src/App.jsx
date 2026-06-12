import React, { useEffect } from 'react'
import LoginPage from './pages/LoginPage/LoginPage';
import SignUp from './pages/SignUp/SignUp';
import Student from './pages/Student/Student';
import AboutUs from './pages/AboutUs/AboutUs';
import Contact from './pages/ContactUs/ContactUs';
import RecruiterPost from './pages/RecruiterPost/RecruiterPost';
import JobDetail from './pages/JobDetail/Jobdetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './pages/HomePage/HomePage';
import HomeLayout from './components/HomeLayout';
import JobsPage from './pages/JobsPage/JobPage'
import { Toaster } from "react-hot-toast";
import useUserStore from "./store/userStore";
import EditProfile from "./pages/EditProfile/EditProfile";
import MyApplications from './pages/MyApplication/MyApplication';
import RecruiterDashboard from './pages/RecruiterDashboard/RecruiterDashboard';
import ManageJobs from "./pages/ManageJobs/ManageJobs";
import ViewApplicants from "./pages/ViewApplicants/ViewApplicants";
import SavedJobs from "./pages/SavedJob/SavedJob";
import StudentView from "./pages/StudentView/StudentView";
import EditJob from "./pages/EditJob/EditJob"
import Notifications from "./pages/Notification/Notification";
import Settings from "./pages/Setting/Setting";
import ForgotPassword
  from "./pages/ForgotPassword/ForgotPassword";
import ResetPassword
  from "./pages/ResetPassword/ResetPassword";



const App = () => {

  const initializeUser = useUserStore((state) => state.initializeUser);

  useEffect(() => {
    initializeUser();
  }, []);

  return (

    <>
      <Toaster position="top-right" />
      <BrowserRouter>
        <Routes>
          {/* With navbar */}

          <Route element={<HomeLayout />}>
            <Route path="/" element={<Home />} />
          </Route>

          <Route element={<MainLayout />}>
            <Route path="/student/profile" element={<Student />} />
            <Route path='/jobs' element={<JobsPage />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/jobs' element={<JobsPage />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/recruiterpost' element={<RecruiterPost />} />
            <Route path='/jobdetail/:id' element={<JobDetail />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/myapplications" element={<MyApplications />} />
            <Route path="/recruiterdashboard" element={<RecruiterDashboard />} />
            <Route path="/manage-jobs" element={<ManageJobs />} />
            <Route path="/job/:jobId/applicants" element={<ViewApplicants />} />
            <Route path="/saved-jobs" element={<SavedJobs />} />
            {/* <Route path="/student/:id" element={<StudentView />} /> */}
            <Route path="/edit-job/:id" element={<EditJob />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/settings" element={<Settings />} />
            {/* <Route path="/job/:jobId/applicants" element={<ViewApplicants />} /> */}
            <Route
              path="/student/:studentId"
              element={<StudentView />}
            />


          </Route>
          {/* Without navbar */}

          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/signup-recruiter" element={<SignUp />} />
          <Route
            path="/forgot-password"
            element={<ForgotPassword />}
          />

          <Route
            path="/reset-password"
            element={<ResetPassword />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
