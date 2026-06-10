    import React, { useState } from 'react';
    import './SignUp.css';
    import { Link, useNavigate, useLocation } from 'react-router-dom';
    import google from '../../assets/google.svg';
    import github from '../../assets/github.svg';
    import toast from 'react-hot-toast';
    import { signup } from '../../utils/Auth_Client';

    const SignUp = () => {

        const navigate = useNavigate();
        const location = useLocation();

        // detect role from url
        const role = location.pathname === "/signup-recruiter" ? "recruiter" : "candidate";

        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [repeatPassword, setRepeatPassword] = useState('');
        const [name, setName] = useState('');
        const [companyName, setCompanyName] = useState('');

        const handleSubmit = async (e) => {
            e.preventDefault();

            if (role === 'recruiter' && !companyName) {
                toast.error("Please enter your company name");
                return;
            }

            if (!name || !email || !password || !repeatPassword) {
                toast.error("Please fill all fields");
                return;
            }

            if (password !== repeatPassword) {
                toast.error("Passwords do not match");
                return;
            }

            const res = await signup(name, email, password, role, companyName);

            if (!res.success) {
                toast.error(res.message);
            } else {
                toast.success("Account created successfully");
                navigate("/login");
            }
        }

        return (
            <div className='signup-page'>

                <div className='Left-Image'>
                    <h1>
                        Connecting the right <span>talent</span>
                        <br />
                        with the right <span>jobs.</span>
                    </h1>
                </div>

                <form className='left-side-form' onSubmit={handleSubmit}>

                    <h1>{role === "recruiter" ? "Recruiter Sign Up" : "Candidate Sign Up"}</h1>

                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Your full name'
                    />

                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Your email'
                    />

                    {role === "recruiter" && (
                        <input
                            type="text"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            placeholder='Company name'
                        />
                    )}

                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Password'
                    />

                    <input
                        type="password"
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                        placeholder='Repeat Password'
                    />

                    <button className='submit-button' type='submit'>
                        Sign Up
                    </button>

                    <div className="divider">
                        <hr />
                        <span>or</span>
                        <hr />
                    </div>

                    <div className='social-login-buttons'>
                        <button type='button'>
                            <img src={google} alt="Google Icon" />
                            Google
                        </button>

                        <button type='button'>
                            <img src={github} alt="Github Icon" />
                            Github
                        </button>
                    </div>

                    <section className='sign-up-redirect'>

                        <section className='login-redirect'>
                            <p>Already have an account?</p>
                            <Link to="/login">Log In</Link>
                        </section>

                        {role === "candidate" && (
                            <section className='recruiter-redirect'>
                                <p>Want to Sign-Up as a recruiter?</p>
                                <Link to="/signup-recruiter">Sign Up</Link>
                            </section>
                        )}

                        {role === "recruiter" && (
                            <section className='recruiter-redirect'>
                                <p>Want to Sign-Up as a candidate?</p>
                                <Link to="/sign-up">Sign Up</Link>
                            </section>
                        )}

                    </section>

                </form>
            </div>
        )
    }

    export default SignUp;