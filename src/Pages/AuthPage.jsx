import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function AuthPage() {
    const navigates = useNavigate();
    const handleAppleButtonClick = () => {
        navigates('/');
    };

    const handleGoogleButtonClick = () => {
        navigates('/');
    };
    return (
        <div className='auth'>
            <div className='authentication'>
                <section className='leeway-icon'>
                    <img src='icon.svg'></img>
                    <img src='leeway.svg'></img>
                </section>
                <section className='auth-content'>
                    <p>continue with</p>
                    <div className='authentication-option'>
                        <button className='ios' onClick={handleAppleButtonClick}><img src='ios.svg'></img></button>
                        <button className='google' onClick={handleGoogleButtonClick}><img src='google.svg'></img></button>
                    </div>
                    <p className='terms'>by continuing, you agree to our&nbsp;<Link to='#' className='terms-condition'>terms & conditions</Link></p>
                </section>
            </div>
        </div>
    );
}

export default AuthPage;

