import { useState } from "react"
import axios from "axios";

const GalleryItem = ({image, renderImages}) => {
    const [toggleState, setToggleState] = useState(false)

    const RenderItem = () => {
        if(toggleState){
            return (<p className="description" >{image.description}</p>)
        } else {
            return <img  src={image.url} />
        }
    }

    const handleToggle = () => {
        if(toggleState){
            setToggleState(false)
        }
        else{
            setToggleState(true)
        }
    }

    const handleLike = ()=>{
        console.log(event.target.id);
        axios.put(`/api/gallery/like/${event.target.id}`)
        .then(response => {
          renderImages()
        })
        .catch(error => {
          console.log('Error in GET', error)
        })
      }

    return (
        <div data-testid="galleryItem" className="gallery-item">
            <button data-testid="toggle" onClick={handleToggle} className="img-button">
                <RenderItem />
            </button>
            <p className="img-title">{image.title}</p>
            <button className="like-btn" onClick={handleLike} id={image.id} data-testid="like">Like</button>
            <p>{image.likes} people like this!</p>
        </div>
        
    )
}

export default GalleryItem