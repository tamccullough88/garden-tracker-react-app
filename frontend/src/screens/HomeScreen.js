import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import mockGardens from '../mockData';

const HomeScreen = () => {
    /* eslint-disable no-unused-vars */
    const [gardens, setGardens] = useState([]);
    const API_URL = process.env.REACT_APP_API_URL;

    //Uncomment and adjust this for fetching real data
    useEffect(() => {
        const fetchGardens = async () => {
            try {
                const response = await fetch(`${API_URL}gardens/`);
                const data = await response.json();
                setGardens(data);
            } catch (error) {
                console.error('Error fetching gardens:', error);
            }

        };
        console.log(gardens)
        fetchGardens();

    }, [API_URL]);
    console.log(gardens)
    const navigate = useNavigate(); // Use useNavigate instead of useHistory

    const navigateToGarden = (id) => {
        navigate(`/garden/${id}`);
    };

    const navigateToNewGarden = () => {
        navigate('/new-garden');
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>My Gardens:</h1>
            {gardens.map((gardens) => (
                <div
                    key={gardens.id}
                    onClick={() => navigateToGarden(gardens.id)}
                    style={styles.gardenContainer}>
                    <button > <h2 style={styles.gardenName}>{gardens.name}</h2></button>
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