import React, {useState} from 'react';
import './SignUp.css';
import { Link, useNavigate } from 'react-router-dom';
import google from '../../assets/google.svg';
import github from '../../assets/github.svg';
import toast from 'react-hot-toast';
import { signup } from '../../utils/Auth_Client';


const SignUp = () => {

    const navigate = useNavigate();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [repeatPassword, setRepeatPassword] = React.useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();

        if(!email || !password || !repeatPassword) {
            toast.error("Please fill all fields");
            return;
    }
    if(password !== repeatPassword) {
        toast.error("Passwords do not match");
        return;
    }

    const res = await signup(email, password);

    if(!res.success) {
        toast.error(res.message);
    } else{
        toast.success("Account created successfully");
        navigate("/login");
    }
    }
    return (
        <div className='signup-page'>

            <div className='Left-Image'>
                <h1>Connecting the right <span>talent</span><br /> with the right <span>jobs.</span></h1>
            </div>
            <form className='left-side-form'
                onSubmit={handleSubmit}>
                <h2>Sign Up</h2>

                <input type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Your email' />

                <input type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password' />

                <input type="password"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                placeholder='Repeat Password' />

                <button className='submit-button' type='submit'>Sign Up</button>

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
                    <p>Already have an account?</p>
                    <Link to="/">Log In</Link>
                </section>
            </form>
        </div>



    )
}

export default SignUp;
