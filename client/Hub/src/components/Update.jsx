import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function UpdateUser() {
    const { id } = useParams()
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');
    const navigate = useNavigate()
    return (
        <div>
            <div >
                <label htmlFor="fname">Image</label>
                <input type="text" id="fname" name="firstname" placeholder="Image URL" />

                <label htmlFor="lname">Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Name" />

                <label htmlFor="country">Description</label>
                <input type="text" id="lname" name="lastname" placeholder="Enter your Description" />

                <label htmlFor="country">Link</label>
                <input type="text" id="lname" name="lastname" placeholder="URL" />




                <input type="submit" value="Submit" />
            </div>
        </div>
    )
}
export default UpdateUser;
