import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";
import Spinner from "./Spinner";


function PrivateRoute() {

    const { loggedIn, checkingStatus } = useAuthStatus();

    if (checkingStatus) {
        // return <h1>Loading...</h1>
        return <Spinner/>
    }

    return (
        <div>
            {loggedIn ? <Outlet /> : <Navigate to='/sign-in' />}
        </div>
    )
}

export default PrivateRoute
