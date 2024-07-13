import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import mockGardens from '../mockData';

const HomeScreen = () => {
    /* eslint-disable no-unused-vars */
    const [gardens, setGardens] = useState([]);
    /* eslint-enable no-unused-vars */

    // Uncomment and adjust this for fetching real data
    // useEffect(() => {
    //   fetch('http://localhost:5000/api/gardens')
    //     .then((response) => response.json())
    //     .then((data) => setGardens(data))
    //     .catch((error) => console.error('Error fetching gardens:', error));
    // }, []);

    const navigate = useNavigate(); // Use useNavigate instead of useHistory

    const navigateToGarden = (gardenId) => {
        navigate(`/garden/${gardenId}`);
    };

    const navigateToNewGarden = () => {
        navigate('/new-garden');
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>My Gardens:</h1>
            {mockGardens.map((garden) => (
                <div
                    key={garden.id}
                    onClick={() => navigateToGarden(garden.gardenId)}
                    style={styles.gardenContainer}>
                    <button > <h2 style={styles.gardenName}>{garden.name}</h2></button>
                </div>
            ))}
            <button onClick={navigateToNewGarden}>Create Garden</button>
        </div>
    );
};


const styles = {
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    gardenContainer: {
        marginBottom: 20,
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        borderRadius: 5,
    },
    gardenName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    }
};

export default HomeScreen;