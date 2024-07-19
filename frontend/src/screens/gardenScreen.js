import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import mockGardens from '../mockData';

const GardenScreen = () => {
    const { gardenId } = useParams();
    const navigate = useNavigate();
    const [plants, setPlants] = useState([]);
    const API_URL = process.env.REACT_APP_API_URL;

    const navigateToPlant = (plantId) => {
        navigate(`/plant/${plantId}`);
    };

    useEffect(() => {
        const fetchPlants = async () => {
            try {
                const response = await fetch(`${API_URL}plants/?garden=${gardenId}`);
                const data = await response.json();
                setPlants(data);
            } catch (error) {
                console.error('Error fetching plants:', error);
            }
        };

        fetchPlants();
    }, [gardenId, API_URL]);

    // Find the maximum x and y coordinates among all the plants
    // const maxX = plants.reduce((max, plant) => Math.max(max, plant.xLocation), 0);
    // const maxY = plants.reduce((max, plant) => Math.max(max, plant.yLocation), 0);

    return (
        <div style={styles.scrollViewContainer}>
            <div style={styles.container}>
                <p>Plants in Garden:</p>
                {/* Plants Section */}
                <div style={styles.plantList}>
                    <p style={styles.plantListTitle}>Plant Details:</p>
                    <div style={styles.tableHeader}>
                        <p style={styles.columnHeader}>Plant Name</p>
                        <p style={styles.columnHeader}>Date Planted</p>
                    </div>
                    {plants.map(plant => (
                        <div
                            key={plant.plantId}
                            onClick={() => navigateToPlant(plant.id)}
                            style={styles.tableRow}>
                            <p style={styles.cellText}>{plant.name}</p>
                            <p style={styles.cellText}>{plant.date_planted}</p>
                        </div>
                    ))}
                </div>
                <button onClick={() => navigate(`/add-plant/${gardenId}`)}>Add Plant</button>
            </div>
        </div>
    );
};

const styles = {
    scrollViewContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    container: {
        padding: '20px',
        alignItems: 'center',
    },
    plantList: {
        borderWidth: '1px',
        borderColor: 'black',
        flexGrow: 1,
        width: '300px',
        justifyContent: 'space-between',
    },
    plantListTitle: {
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    tableHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '5px',
    },
    columnHeader: {
        flex: 1,
        fontWeight: 'bold',
        fontSize: '16px',
        padding: '20px',
    },
    tableRow: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '5px',
        cursor: 'pointer',
    },
    cellText: {
        flex: 1,
        fontSize: '16px',
    },
};

export default GardenScreen;