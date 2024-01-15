import { useState } from "react";
import axios from 'axios'

const GalleryForm = ({renderImages}) => {
    const [titleInput, setTitleInput] = useState('')
    const [descInput, setDescInput] = useState('')
    const [urlInput, setUrlInput] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('api/gallery', {
            title: titleInput,
            description: descInput,
            url: urlInput
        })
        .then(response => {
            console.log(response)
            renderImages();
            setTitleInput('');
            setDescInput('');
            setUrlInput('');
        })
        .catch(error => {
            console.log('Error in POST', error)
        })
    }

    return (
        <form>
            <h3>Add a new image!</h3>
            <div>
                <p>Title: </p>
                <input 
                    type="text" 
                    placeholder="Title" 
                    onChange={()=>setTitleInput(event.target.value)}
                    value={titleInput}
                />
            </div>
            <div>
                <p>Description: </p>
                <input 
                    type="text" 
                    placeholder="Description" 
                    onChange={()=>setDescInput(event.target.value)} 
                    value={descInput}
                />
            </div>
            <div>
                <p>URL: </p>
                <input 
                    type="text" 
                    placeholder="URL" 
                    onChange={()=>setUrlInput(event.target.value)} 
                    value={urlInput}
                />
            </div>
            <button onClick={handleSubmit} >Add new image</button>
            
        </form>
    )
}

export default GalleryForm