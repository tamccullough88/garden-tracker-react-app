import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import mockGardens from '../mockData';

const PlantScreen = () => {
    const { gardenId, plantId } = useParams();
    const navigate = useNavigate();
    const [plant, setPlant] = useState(null);

    useEffect(() => {
        console.log("Garden ID:", gardenId);
        console.log("Plant ID:", plantId);

        const garden = mockGardens.find(garden => garden.gardenId === parseInt(gardenId));
        console.log("Garden:", garden);

        if (garden) {
            const foundPlant = garden.plants.find(plant => plant.plantId === parseInt(plantId));
            console.log("Found Plant:", foundPlant);

            if (foundPlant) {
                setPlant(foundPlant);
            } else {
                console.log("No plant found with ID:", plantId);
            }
        } else {
            console.log("No garden found with ID:", gardenId);
        }
    }, [gardenId, plantId]);

    console.log("Plant:", plant);

    return (
        <div style={styles.scrollViewContainer}>
            <div style={styles.plantDetails}>
                <p style={styles.plantDetailTitle}>Plant Details:</p>
                {plant ? (
                    <div style={styles.plantDetail}>
                        <p>Name: {plant.name}</p>
                        <p>Date Planted: {plant.datePlanted}</p>
                        <p>Comments: {plant.comments}</p>
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
