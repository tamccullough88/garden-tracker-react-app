// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <ul style={styles.navList}>
                <li style={styles.navItem}>
                    <Link to="/" style={styles.navLink}>Home</Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/new-garden" style={styles.navLink}>New Garden</Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/add-plant" style={styles.navLink}>Add Plant</Link>
                </li>
            </ul>
        </nav>
    );
};

const styles = {
    navbar: {
        backgroundColor: '#333',
        padding: '1rem',
    },
    navList: {
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-around',
        margin: 0,
        padding: 0,
    },
    navItem: {
        margin: '0 1rem',
    },
    navLink: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '1.2rem',
    },
};

export default Navbar;
