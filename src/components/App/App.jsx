
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import GalleryList from "../GalleryList/GalleryList";

function App() {
  const [galleryItems, setGalleryItems] = useState('')

  useEffect(()=>{
    renderImages()
  },[])

  const renderImages = ()=>{
    axios.get('/api/gallery')
    .then(response => {
      const newArray = response.data.sort((a, b) => a.id - b.id)
      setGalleryItems(newArray);
    })
    .catch(error => {
      console.log('Error in GET', error)
    })
  }

  return (
    <div data-testid="app" className="header">
      <header >
        <h1>React Gallery</h1>
      </header>
      <GalleryList galleryItems={galleryItems} renderImages={renderImages}/>
    </div>
  );
}

export default App;
