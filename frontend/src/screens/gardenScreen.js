import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


const GardenScreen = () => {
    const { gardenId } = useParams();
    const navigate = useNavigate();
    const [plants, setPlants] = useState([]);
    const [gardenName, setGardenName] = useState([])
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

    useEffect(() => {
        const fetchGarden = async () => {
            try {
                const response = await fetch(`${API_URL}gardens/${gardenId}`)
                const data = await response.json();
                setGardenName(data)
            } catch (error) {
                console.error('Error fetching plants:', error);
            }
        };
        fetchGarden()

    }, [gardenId, API_URL]);

    return (
        <div style={styles.scrollViewContainer}>
            <div style={styles.container}>
                <h1>Plants in {gardenName.name} Garden:</h1>
                {/* Plants Section */}
                <div style={styles.plantList}>
                    <div style={styles.tableHeader}>
                        <p style={styles.columnHeader}>Plant Name</p>
                        <p style={styles.columnHeader}>Date Planted</p>
                    </div>
                    {plants.map(plant => (
                        <div
                            key={plant.id}
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