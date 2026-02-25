import React, { useState } from 'react';
import './LoginPage.css';
import google from '../../assets/google.svg';
import github from '../../assets/github.svg';
import { Link , useNavigate} from 'react-router-dom';
import { login } from '../../utils/Auth_Client'
import toast from 'react-hot-toast';


const LoginPage = () => {

    const navigate = useNavigate();

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
            navigate("/jobs"); // change route if needed
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

                <a className='forget-pass' href="/forgot-password" >Forgot password?</a>

                <div className="divider">
                    <hr />
                    <span>or</span>
                    <hr />
                </div>

                <div className='social-login-buttons'>
                    <button type='button'><img src={google} alt="Google Icon" /> Google</button>
                    <button type='button'><img src={github} alt="Github Icon" /> Github</button>
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
