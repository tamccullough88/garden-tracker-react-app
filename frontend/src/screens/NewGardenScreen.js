import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewGardenScreen = () => {
    const [gardenName, setGardenName] = useState('');
    const navigate = useNavigate();

    const createGarden = () => {
        fetch('http://localhost:5000/api/gardens', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: gardenName }),
        })
            .then(response => response.json())
            .then(() => navigate('/'))
            .catch(error => console.error('Error creating garden:', error));
    };

    return (
        <div>
            <input
                placeholder="Garden Name"
                value={gardenName}
                onChange={(e) => setGardenName(e.target.value)}
            />
            <button onClick={createGarden}>Create Garden</button>
        </div>
    );
};

export default NewGardenScreen;

