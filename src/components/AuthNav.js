import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
    link: {
        display: 'inline-block',
        textDecoration: 'none',
        padding: 12,
        fontWeight: 700,
        color: '#E84A5F',
    },
    activeLink: {
        color: '#00ffff', 
    },
};

export default function AuthNav() {
    return (
        <div>
            <NavLink
                to="/register"
                exact
                style={styles.link}
                activeStyle={styles.activeLink}
            >
                Registration
            </NavLink>
            <NavLink
                to="/login"
                exact
                style={styles.link}
                activeStyle={styles.activeLink}
            >
                LogIn
            </NavLink>
        </div>
    );
}