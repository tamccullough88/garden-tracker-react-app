import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [gardens, setGardens] = useState([]);
    const [dropdownVisible, setDropdownVisible] = useState(false);

    useEffect(() => {
        fetch('http://localhost:8000/api/gardens')
            .then(response => response.json())
            .then(data => setGardens(data))
            .catch(error => console.error('Error fetching gardens:', error));
    }, []);

    const showDropdown = () => setDropdownVisible(true);
    const hideDropdown = () => setDropdownVisible(false);

    return (
        <nav style={styles.navbar}>
            <ul style={styles.navList}>
                <li style={styles.navItem}>
                    <Link to="/" style={styles.navLink}>Home</Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/new-garden" style={styles.navLink}>New Garden</Link>
                </li>
                <li style={styles.navItem} onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                    <Link to="/" style={styles.navLink}> Gardens</Link>
                    {dropdownVisible && (
                        <ul style={styles.dropdown}>
                            {gardens.map(garden => (
                                <li key={garden.id} style={styles.dropdownItem}>
                                    <Link to={`/gardens/${garden.id}`} style={styles.navLink}>{garden.name}</Link>
                                </li>
                            ))}
                        </ul>
                    )}
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
        position: 'relative',
    },
    navLink: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '1.2rem',
    },
    dropdown: {
        position: 'absolute',
        top: '100%',
        left: 0,
        backgroundColor: '#333',
        listStyle: 'none',
        padding: '0.5rem',
        margin: 0,
    },
    dropdownItem: {
        margin: 0,
    },
};

export default Navbar;