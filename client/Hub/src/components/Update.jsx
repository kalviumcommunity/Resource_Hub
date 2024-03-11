import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function UpdateUser() {
    const { id } = useParams()
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');
    const navigate = useNavigate()

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(`https://resource-hub-1.onrender.com/post/list/` + id)
            console.log("INDIVIDUAL DATA", res.data)
            setName(res.data.name)
            setImage(res.data.Img)
            setDescription(res.data.Description)
            setLink(res.data.Links)

        }
        getData()
    }, [])
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
