// Authentication: https://console.firebase.google.com/project/house-for-sale-app/authentication/users
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'

// https://firebase.google.com/docs/auth/web/start
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// https://firebase.google.com/docs/firestore/manage-data/add-data
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';

// importing db from the config
import { db } from '../firebase.config';


function SignUp() {

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const { name, email, password } = formData;

  const navigate = useNavigate();

  function onChangeNEP(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
    
  }

  async function onSubmit(e) {
    e.preventDefault();

    try {
      // Getting the authentication object using getAuth()
      const auth = getAuth();
    
      // Registering the user using createUserWithEmailAndPassword(), which returns a promise
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
      // Extracting the user object from userCredential
      const user = userCredential.user;
    
      // Updating the user's display name
      await updateProfile(auth.currentUser, {
        displayName: name,
      });
    
      // ADDING INTO DATABASE
    
      // Creating a copy of the formData object to avoid modifying the original state
      const formDataCopy = { ...formData };
    
      // Removing the 'password' field from formDataCopy
      delete formDataCopy.password;
    
      // Adding a 'timeStamp' field to formDataCopy with the current server timestamp
      formDataCopy.timeStamp = serverTimestamp();
    
      /*
        1. setDoc() is used to update the database.
        2. db is the database instance that was imported from the configuration.
        3. 'users' is the name of the collection in the database.
        4. user.uid is the unique identifier of the user, which is typically their user ID.
        5. formDataCopy contains the data you want to store in the database.
      */
      await setDoc(doc(db, 'users', user.uid), formDataCopy);
    
      // Navigating to a different page, presumably after a successful registration
      navigate('/');
    } 
    catch (error) {
      // Handle any errors that may occur during registration
      console.error('Error during registration:', error);
    }
    
  }



  return (
    <>
      <div className='pageContainer'>

        <header >
          <p className='pageHeader'>
            Welcome Back!
          </p>
        </header>

        <form onSubmit={onSubmit}>

          <input type='text'
            className='nameInput'
            placeholder='Name'
            id='name'
            value={name}
            onChange={onChangeNEP}
          />

          <input type='email'
            className='emailInput'
            placeholder='Email'
            id='email'
            value={email}
            onChange={onChangeNEP}
          />

          <div className="passwordInputDiv">
            <input type={showPassword ? 'text' : 'password'}
              className='passwordInput'
              placeholder='Password'
              id='password'
              value={password}
              onChange={onChangeNEP}
            />

            <img src={visibilityIcon} alt='show passowrd'
              className='showPassword'
              onClick={() => setShowPassword((prevState) =>
                !prevState
              )}
            />

            {/* <img src={visibilityIcon} alt='show passowrd'
              className='showPassword'
              onClick={() => setShowPassword(!showPassword)}
            /> */}

            <Link to='/forgot-password'
              className='forgotPasswordLink'>
              Forgot Password
            </Link>

            <div className='signUpBar'>
              <p className='signUpText'>
                Sign Up
              </p>
                <button className="signUpButton">
                  <ArrowRightIcon fill='white' width='34px' height='34px' />
                </button>
            </div>

          </div>
        </form>

        <Link to='/sign-in' className='registerLink'>
          Sign In Instead
        </Link>
      </div>


    </>
  )
}

export default SignUp

