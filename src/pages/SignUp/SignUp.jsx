import React from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import google from '../../assets/google.svg';
import github from '../../assets/github.svg';

const LoginPage = () => {

    return (
        <div className='signup-page'>

            <div className='Left-Image'>
                <h1>Connecting the right <span>talent</span><br /> with the right <span>jobs.</span></h1>
            </div>
            <form className='left-side-form'>
                <h2>Sign Up</h2>
                <input type="text" placeholder='Your email' />
                <input type="password" placeholder='Password' />
                <input type="password" placeholder='Repeat Password' />
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

export default LoginPage
