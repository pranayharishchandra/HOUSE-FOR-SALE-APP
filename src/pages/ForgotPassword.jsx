import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import { toast } from 'react-toastify'

function ForgotPassword() {

  const [email, setEmail] = useState('');


  async function onSubmit(e) {
    e.preventDefault();

    try {
      const auth = getAuth();
      // send email as a string direcly (consise) or like an object (here), js library accepts both equally
      await sendPasswordResetEmail(auth, {
        email: email
      })

      toast.success('Email has been sent to your mail')
    }
    catch (error) {
      console.log('ForgotPassword.jsx, error : ', error);
      toast.error('Email could not be sent');
    }
  }



  return (
    <div className='pageContainer'>

      <header>
        <p className='pageHeader'>Forgot Password</p>
      </header>

      <main>
        <form onSubmit={onSubmit}>

          <input
            type='email'
            className='emailInput'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id='email'
            placeholder='Email'
          />
        </form>

        <Link to='sign-in'>
          Sign-In
        </Link>

        <div className="signInBar">
          <div className="signInText">
            <button className='signInButton'>
              <ArrowRightIcon fill='#ffffff' width='34px' height='34px' />
            </button>
          </div>
        </div>

      </main>

    </div>
  )
}

export default ForgotPassword
