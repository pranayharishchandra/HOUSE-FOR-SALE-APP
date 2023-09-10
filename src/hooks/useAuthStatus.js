import { useEffect, useState } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth"

export function useAuthStatus() {
    // checks if user loggedin or not
    const [loggedIn, setLoggedIn] = useState(false);            

    // initially  checkingStatus is true, right after we get the Response, we will set it to false 
    // checks if response recived or not from firebase
    const [checkingStatus, setCheckingStatus] = useState(true);

    useEffect(() => {
        const auth = getAuth();
        // onAuthStateChanged return an object 
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoggedIn(true);
            }
            setCheckingStatus(false);
        })
    })

    return { loggedIn, checkingStatus }
}

// export default useAuthStatus
