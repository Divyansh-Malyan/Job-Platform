import React from 'react';
import './LoginPage.css';
import google from '../../assets/google.svg';
import github from '../../assets/github.svg';

const LoginPage = () => {

    return (
        <div className='login-page'>


            <form className='left-side-form'>
                <h2>Log In</h2>
                <input type="text" placeholder='Your email' />
                <input type="password" placeholder='password' />
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
                    <a href="/sign-up">Sign Up</a>
                </section>
            </form>

            <div className='right'>
                <h1>Connecting the right <span>talent</span><br /> with the right <span>jobs.</span></h1>
            </div>
        </div>

    )
}

export default LoginPage
