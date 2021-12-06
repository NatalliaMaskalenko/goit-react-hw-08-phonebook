import { NavLink } from 'react-router-dom';
import s from './AppBar.module.css';

const Navigation = () => (
    <nav className ={s.navigation}>
        <NavLink exact to='/' className={s.link} activeClassName={s.activeLink}>Home</NavLink>               
    </nav>
)

export default Navigation;