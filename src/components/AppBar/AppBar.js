import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors'
import s from './AppBar.module.css';
import AuthNav from './AuthNav';
import Navigation from './Navigation';
import UserMenu from '../UserMenu/UserMenu';

const AppBar = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);
    return(<header className={s.navigation}>
        <Navigation />
        {isLoggedIn ? <AuthNav />: <UserMenu /> }                 
    </header>)    
};

export default AppBar;