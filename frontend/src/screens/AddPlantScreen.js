import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const AddPlantScreen = () => {
    const { gardenId } = useParams();
    const navigate = useNavigate();
    const [plantName, setPlantName] = useState('');
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [comments, setComments] = useState('');

    const addPlant = () => {
        fetch(`http://localhost:5000/api/plants/${gardenId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: plantName,
                date_planted: date,
                comments: comments,
            }),
        })
            .then(response => response.json())
            .then(() => navigate(-1))
            .catch(error => console.error('Error adding plant:', error));
    };

    return (
        <div style={styles.container}>
            <label>
                Plant Name:
                <input
                    type="text"
                    value={plantName}
                    onChange={(e) => setPlantName(e.target.value)}
                    style={styles.input}
                    placeholder='Plant Name'
                />
            </label>
            <label>
                Date Planted:
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    style={styles.input}
                />
            </label>
            <label>
                Comments:
                <textarea
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    style={styles.textarea}
                    placeholder='Comments'
                />
            </label>
            <button onClick={addPlant} style={styles.button}>Add Plant</button>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        padding: '20px',
    },
    input: {
        padding: '10px 20px',
        margin: '5px 10px',
        width: '25%',
    },
    textarea: {
        padding: '10px 20px',
        margin: '5px 10px',
        width: '25%',
        height: '100px',
    },
    button: {
        padding: '10px 20px',
        marginTop: '10px',
        cursor: 'pointer',
        width: '25%',
    },
};

export default AddPlantScreen;
