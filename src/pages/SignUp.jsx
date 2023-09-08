import { useState } from 'react'
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
// import { ReactComponent as visibilityIcon } from '../assets/svg/visibilityIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
import { Link, useNavigate } from 'react-router-dom';

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



  return (
    <>
      <div className='pageContainer'>

        <header >
          <p className='pageHeader'>
            Welcome Back!
          </p>
        </header>

        <form action="">

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

