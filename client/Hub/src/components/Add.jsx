import React, { useState } from 'react';
import '../components/Add.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function update() {

    const navigate = useNavigate()

    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');

    const handleImageChange = (e) => {
        setImage(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleLinkChange = (e) => {
        setLink(e.target.value);
    };
    const handleClick = () => {
        
        try {
            axios.post(" https://resource-hub-1.onrender.com/post", {
                "Resources": name,
                "Links": link,  
                "Description": description,  
                "Img": image
            })
            .then(response => console.log(response.data))
            .then(navigate("/"))
        }
        catch (err) {
            console.log(err);
        }
    }

    const passData = () => {
    };

    return (
        <div>

            <div className="container">
                <div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="fname">Image</label>
                        </div>
                        <div className="col-75">
                            <input onChange={handleImageChange} type="text" id="fname" name="firstname" placeholder="URL" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="lname">Name</label>
                        </div>
                        <div className="col-75">
                            <input onChange={handleNameChange} type="text" id="lname" name="lastname" placeholder="Site name" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="country">Description</label>
                        </div>
                        <div className="col-75">
                            <input onChange={handleDescriptionChange} id="country" name="country" placeholder="Description"/>    
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="subject">Link</label>
                        </div>
                        <div className="col-75">
                            <input onChange={handleLinkChange} id="subject" name="subject" placeholder="URL" />
                        </div>
                        <button className='submit-button' onClick={handleClick}>
                            Submit
                        </button>
                    </div>
                    <div className="row-button">
                    </div>
                </div>
            </div>


        </div>
    );
}

export default update;
