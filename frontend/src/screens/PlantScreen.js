import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PlantScreen = () => {
    const { plantId } = useParams();
    const [plant, setPlant] = useState({});
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);


    useEffect(() => {
        fetch(`http://localhost:8000/api/plants/${plantId}`)
            .then(response => response.json())
            .then(data => {
                setPlant(data);
                setComments(data.comments || []);
            })
            .catch(error => console.error('Error fetching plant:', error));
    }, [plantId]);

    const addComment = () => {
        const formattedDate = new Date(date).toISOString().split('T')[0]; // Ensure date is correctly formatted

        fetch('http://localhost:8000/api/comments/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                plant: plantId, // Use plantId instead of plant.name for the foreign key
                text: newComment,
                created_at: formattedDate
            }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(comment => {
                setComments([...comments, comment]);
                setNewComment('');
            })
            .catch(error => console.error('Error adding comment:', error));
    };

    return (
        <div>
            <h1>{plant.name}</h1>
            <h2>Date Planted:</h2>
            <h4>{plant.date_planted}</h4>

            <h2>Comments</h2>
            <ul>
                {comments.map((comment, index) => (
                    <li key={index}>{comment.text} on {comment.created_at}</li>
                ))}
            </ul>

            <div>
                <textarea
                    placeholder="Add a comment"
                    value={newComment}
                    onChange={e => setNewComment(e.target.value)}
                />
                <input
                    type="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />
                <button onClick={addComment}>Submit</button>
            </div>
        </div>
    );
};

export default PlantScreen;

