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
        color: "#00ffff",
    },
};

const Navigation = () => (
    <nav>
        <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
            Home
        </NavLink>
    </nav>
);

export default Navigation;