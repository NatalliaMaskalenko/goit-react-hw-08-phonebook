import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import { NavLink } from 'react-router-dom';

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
        color:'#E84A5F',
    },
    link: {
        display: 'inline-block',
        textDecoration: 'none',
        padding: 12,
        fontWeight: 700,
        color: '#E84A5F',
    },
    activeLink: {
        color: "#00ffff",
    },
    button: {
        borderRadius: 5,
        padding: 3,
        backgroundColor: '#e8ecec30',
        color: "#E84A5F",
    }
};

export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUsername);


    return (
        <div style={styles.container}>
            <NavLink
            to="/contacts"
            exact
            style={styles.link}
            activeStyle={styles.activeLink}
        >
            Contacts
        </NavLink>
            <span style={styles.name} >Wellcome, {name}</span>
            <button type="button" style={styles.button} onClick={() => dispatch(authOperations.logOut())}>
                LogOut
            </button>
        </div>
    );
}