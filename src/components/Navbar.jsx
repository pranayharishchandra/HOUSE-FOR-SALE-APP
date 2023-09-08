import { ReactComponent as OfferIcon } from '../assets/svg/localOfferIcon.svg'
import { ReactComponent as ExploreIcon } from '../assets/svg/exploreIcon.svg'
import { ReactComponent as PersonOutlineIcon } from '../assets/svg/personOutlineIcon.svg'
import { useLocation, useNavigate } from 'react-router-dom'

function Navbar() {

    const navigate = useNavigate();
    const location = useLocation();

    function pathMatchRoute(route) {
        // if path name mathes with the URL, then color of the icon will be changed
        if (route === location.pathname) return true;
        else return false;
    }




    return (
        <footer className='navbar'>
            <nav className='navbarNav'>
                <ul className='navbarListItems'>

                    <li className='navbarListItem' onClick={() => navigate('/')}>
                        <OfferIcon fill={pathMatchRoute('/') ? 'green' : 'grey'} width='36px' height='36px' />

                        <p className={pathMatchRoute('/') ? 'navbarListItemNameActive' : 'navbarListItemName'}>
                            Explore
                        </p>

                    </li>

                    <li className='navbarListItem' onClick={() => navigate('/offers')}>
                        <ExploreIcon fill={pathMatchRoute('/offers') ? 'green' : 'grey'} width='36px' height='36px' />

                        <p className={pathMatchRoute('/offers') ? 'navbarListItemNameActive' : 'navbarListItemName'}>
                            Offer
                        </p>

                    </li>

                    <li className='navbarListItem' onClick={() => navigate('/profile')}>
                        <PersonOutlineIcon fill={pathMatchRoute('/profile') ? 'green' : 'grey'} width='36px' height='36px' />
                        
                        <p className={pathMatchRoute('/profile') ? 'navbarListItemNameActive' : 'navbarListItemName'}>
                            Profile
                        </p>

                    </li>

                </ul>
            </nav>
        </footer>
    )
}

export default Navbar
