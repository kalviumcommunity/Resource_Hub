import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import './Update.css'

function UpdateUser() {
    const { id } = useParams();
    const navigate = useNavigate();

    // Initialize state with empty strings to ensure  input className="update-input"s are controlled
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');
    const [created_by, setcreated_by] = useState(sessionStorage.getItem("username"));

    useEffect(() => {
        // Fetch the current item's data and update the state
        axios.get(`https://resource-hub-1.onrender.com/info/${id}`).then(response => {
            const data = response.data;
            setImage(data.Img || '');
            setName(data.Resources || '');
            setDescription(data.Description || '');
            setLink(data.Link || '');
        }).catch(error => console.error(error));
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            Img: image,
            Resources: name,
            Description: description,
            Links: link,
            created_by:created_by
        };

        console.log('Sending PUT request with data:', userData);

        try {
            const response = await axios.put(`https://resource-hub-1.onrender.com/updateUser/${id}`, userData);

            console.log('Response:', response.data);

            if (response.status >= 200 && response.status < 300) {
                navigate('/');
            } else {
                console.error(`Unexpected response status: ${response.status}`);
            }
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };




    return (
        <div className="update-container">
            <form onSubmit={handleSubmit}>
                <h1 className='up'>Update</h1>
                Image URL:< input className="update-input1" id="image" name="image" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image URL" />


                Name:< input className="update-input2" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />


                Description:<input className="update-input3" id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter your Description" />


                Link:< input className="update-input4" id="link" name="link" value={link} onChange={(e) => setLink(e.target.value)} placeholder="URL" />

                < button className="update-button" value="Submit">Submit</button>
            </form>
        </div>
    );
}
export default UpdateUser;