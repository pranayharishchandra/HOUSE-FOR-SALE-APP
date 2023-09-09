import React, { useState } from 'react';
import SignIn from './SignIn';
import { getAuth } from 'firebase/auth';
import { useEffect } from 'react';


function Profile() {

  const [user, setUser] = useState(null);
  const auth = getAuth();
  console.log('auth: ',auth)

  useEffect(() => {
    console.log(auth.currentUser)
    setUser(auth.currentUser)
  }, [])








  return (
    <div>
      {user ? <h1> user : {user.displayName} </h1> : 'not logged in' }
      {/* <SignIn /> */}
    </div>
  )
}

export default Profile
