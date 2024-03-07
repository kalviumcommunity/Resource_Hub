import React, { useState } from 'react';
import '../components/Add.css'


function update() {
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
    const handleClick = () => [
        passData()
    ]

    const passData = () => {
        try {
            axios.post(" https://resource-hub-1.onrender.com/post", {
                "name": name,
                "source": description,  
                "links": link,  
                "imageLinks": image
            })
            .then(response => console.log(response))
            .catch(error => console.error(error));
        }
        catch (err) {
            console.log(err);
        }
    };








    return (
        <div>

            <div className="container">
                <form action="/action_page.php">
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="fname">Image</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="fname" name="firstname" placeholder="URL" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="lname">Name</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="lname" name="lastname" placeholder="Site name" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="country">Description</label>
                        </div>
                        <div className="col-75">
                            <input id="country" name="country" placeholder="Description">
                                 
                            </input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="subject">Link</label>
                        </div>
                        <div className="col-75">
                            <input id="subject" name="subject" placeholder="URL" />
                        </div>
                    </div>
                    <div class="row">
                        <button onClick={handleClick} type="submit" value="Submit">
                            efbhiuewdbfoudjrbfvelj
                            </button>
                    </div>
                </form>
            </div>


        </div>
    );
}

export default update;
