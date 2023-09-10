import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getAuth, updateProfile } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { db } from '../firebase.config';


function Profile() {

  const [user, setUser] = useState(null);

  const auth = getAuth();
  console.log('auth: ', auth)

  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  })

  const { name, email } = formData;

  const [changeDetails, setChangeDetails] = useState(false)

  const navigate = useNavigate();

  function onLogout(e) {
    auth.signOut();
    navigate('/');
  }

  async function onSubmit(e) {
    try {
      if (auth.currentUser.displayName !== name) {
        // changing name in firebase (service/plateform/ecosystem)
        await updateProfile(auth.currentUser, {
          displayName: name,
        })
        // changing name in firestore (db), collectionns --- listings, users
        const userDocRef = doc(db, 'users', auth.currentUser.uid); // creating reference of the doc
        await updateDoc(userDocRef, {
          name: name
        })


      }
    } catch (error) {
      console.log('Profile.jsx, on submit, error: ', error)
      toast.error('User profile could not be updated')
    }

  }

  async function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }






  return (
    <div className='profile'>
      <header className='profileHeader'>

        <p className='pageHeader'> My Profile </p>

        <button type='button' className='logOut' onClick={onLogout}> Logout </button>

      </header>

      <main>
        <div className="profileDetailsHeader">
          <p className="profileDetailsText">
            Personal Details
          </p>

          <p className="changePersonalDetails"
            onClick={() => {
              changeDetails &&  
                              onSubmit()
                              setChangeDetails((prevState) => !prevState)
                    }}>

                      
            {changeDetails ? 'done' : 'change'}
          </p>
        </div>

        <div className='profileCard'>
          <form>

            <input type='text'
                   id='name'
                   className={!changeDetails ? 'profileName' : 'profileNameActive'}
                   disabled={!changeDetails}
                   value={name}
                   onChange={onChange}
            />

            <input type='email'
                   id='email'
                   className={!changeDetails ? 'profileName' : 'profileNameActive'}
                   disabled={!changeDetails}
                   value={email}
                   onChange={onChange}
            />

          </form>
        </div>
      </main>
    </div>
  )
}

export default Profile
