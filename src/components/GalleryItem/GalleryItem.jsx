import { useState } from "react"
import axios from "axios";

const GalleryItem = ({image}) => {
    const [toggleState, setToggleState] = useState(false)
    const [likeState, setLikeState] = useState(image.likes)
    const [displayState, setDisplayState] = useState(true)

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
        axios.put(`/api/gallery/like/${event.target.id}`)
        .then(response => {
            console.log(response)
          setLikeState(likeState + 1)
        })
        .catch(error => {
          console.log('Error in GET', error)
        })
      }

    const handleDelete = () => {
        console.log('delete clicked', event.target.id)

        axios.delete(`/api/gallery/${event.target.id}`)
        .then((response) => {
            setDisplayState(false)
        })
        .catch((error) => {
            console.log('error in DELETE', error)
        })
    }

    const HandleDisplay = () => {
        if(displayState){
            return (
                <div data-testid="galleryItem" className="gallery-item">
                    <button data-testid="toggle" onClick={handleToggle} className="img-button">
                        <RenderItem />
                    </button>
                    <p className="img-title">{image.title}</p>
                    <button className="like-btn" onClick={handleLike} id={image.id} data-testid="like">Like</button>
                    <p className="likes">{likeState} people like this!</p>
                    <button className="del-btn" onClick={handleDelete} id={image.id}>🗑️</button>
                </div>
            )
        }
    }

    return (
        <HandleDisplay />
    )
}

export default GalleryItem