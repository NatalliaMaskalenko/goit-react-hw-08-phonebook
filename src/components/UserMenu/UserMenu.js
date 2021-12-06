import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from '../../redux/auth/auth-selectors';
import { NavLink } from 'react-router-dom';
import { logOut } from '../../redux/auth/auth-operations';
import s from '../AppBar/AppBar.module.css';

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
    },
    avatar: {
        marginRight: 4,
    },
    name: {
        fontWeight: 700,
        marginRight: 12,
    },
};

export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(getUserName);


    return (
        <div style={styles.container}>
            <NavLink to='/contacts' className={s.link} activeClassName={s.activeLink}>Contacts</NavLink>
            <span style={styles.name}>Wellcome, {name}</span>
            {/* <button type="button" onClick={() => dispatch(authOperations.logOut())}>
                LogOut
            </button> */}
        </div>
    );
}