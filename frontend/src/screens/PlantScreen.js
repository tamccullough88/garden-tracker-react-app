import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PlantScreen = () => {
    const { plantId } = useParams();
    const [plant, setPlant] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const API_URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
        const fetchPlantData = async () => {
            try {
                setLoading(true);
                // Fetch plant details and comments
                const response = await fetch(`${API_URL}plants/${plantId}/`);
                if (!response.ok) {
                    throw new Error('Failed to fetch plant details');
                }
                const plantData = await response.json();
                setPlant(plantData);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPlantData();
    }, [API_URL, plantId]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div style={styles.scrollViewContainer}>
            <div style={styles.plantDetails}>
                <p style={styles.plantDetailTitle}>Plant Details:</p>
                {plant ? (
                    <div style={styles.plantDetail}>
                        <p>Name: {plant.name}</p>
                        <p>Date Planted: {new Date(plant.date_planted).toLocaleDateString()}</p>
                        <p>Comments:</p>
                        {plant.comments.length > 0 ? (
                            <ul>
                                {plant.comments.map((comment) => (
                                    <li key={comment.id}>{comment.text} (Created at: {new Date(comment.created_at).toLocaleString()})</li>
                                ))}
                            </ul>
                        ) : (
                            <p>No comments available</p>
                        )}
                    </div>
                ) : (
                    <p>No plant found</p>
                )}
            </div>
        </div>
    );
}

const styles = {
    scrollViewContainer: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        padding: '10px'
    },
    plantDetails: {
        border: '1px solid black',
        padding: '10px'
    },
    plantDetailTitle: {
        fontWeight: 'bold',
        marginBottom: '10px'
    },
    plantDetail: {
        marginBottom: '5px'
    }
};

export default PlantScreen;