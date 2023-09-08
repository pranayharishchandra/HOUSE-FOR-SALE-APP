import { useState } from 'react'
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
// import { ReactComponent as visibilityIcon } from '../assets/svg/visibilityIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
import { Link, useNavigate } from 'react-router-dom';

function SignIn() {

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData;

  const navigate = useNavigate();

  function onChangeEP(e) {
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

          <input type='email'
            className='emailInput'
            placeholder='Email'
            id='email'
            value={email}
            onChange={onChangeEP}
          />

          <div className="passwordInputDiv">
            <input type={showPassword ? 'text' : 'password'}
              className='passwordInput'
              placeholder='Password'
              id='password'
              value={password}
              onChange={onChangeEP}
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

            <div className='signInBar'>
              <p className='signInText'>
                Sign In
              </p>
                <button className="signInButton">
                  <ArrowRightIcon fill='white' width='34px' height='34px' />
                </button>
            </div>

          </div>
        </form>

        <Link to='/sign-up' className='registerLink'>
          Sign Up Instead
        </Link>
      </div>


    </>
  )
}

export default SignIn
