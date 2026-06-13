import React, { useState } from 'react';
import './LoginPage.css';
import google from '../../assets/google.svg';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { login, loginWithGoogle } from '../../utils/Auth_Client'
import toast from 'react-hot-toast';
import useUserStore from "../../store/userStore";



const LoginPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const initializeUser = useUserStore((state) => state.initializeUser);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();   // 🔥 prevent page reload

        if (!email || !password) {
            toast.error("Please fill all fields");
            return;
        }

        const res = await login(email, password);

        if (!res.success) {
            toast.error(res.message);
        } else {
            toast.success("Login successful 🚀");
            await initializeUser();   // refresh Zustand store
            const profile = useUserStore.getState().profile;

            const redirectTo =
                location.state?.redirectTo;

            if (redirectTo) {

                navigate(redirectTo);

            } else if (profile?.role === "recruiter") {

                navigate("/");

            } else {

                navigate("/");

            }
        }
    }

    return (
        <div className='login-page'>


            <form
                onSubmit={handleSubmit}
                className='left-side-form'>
                <h2>Log In</h2>

                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Your email' />


                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='password' />

                <button className='submit-button' type='submit'>Log In</button>

                <Link
                    className="forget-pass"
                    to="/forgot-password"
                >
                    Forgot password?
                </Link>

                <div className="divider">
                    <hr />
                    <span>or</span>
                    <hr />
                </div>
                <div className="google-login-note">
                    <p>Student Login Only</p>
                </div>

                <div className='social-login-buttons'>
                    <button type="button" onClick={loginWithGoogle}>
                        <img src={google} alt="Google Icon" />
                        Continue with Google
                    </button>
                </div>

                <section className='sign-up-redirect'>
                    <p>Don't have an account?</p>
                    <Link to="/sign-up">Sign Up</Link>
                </section>
            </form>

            <div className='right'>
                <h1>Connecting the right <span>talent</span><br /> with the right <span>jobs.</span></h1>
            </div>
        </div>

    )
}

export default LoginPage
