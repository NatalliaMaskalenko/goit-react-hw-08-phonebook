import { NavLink } from 'react-router-dom';
import s from './AppBar.module.css';

const AuthNav = () => (
    <nav className={s.navigation}>
        <NavLink to='/register' className={s.link} activeClassName={s.activeLink}>Register</NavLink>
        <NavLink to='/login' className={s.link} activeClassName={s.activeLink}>Login</NavLink> 
        
    </nav>
)

export default AuthNav;