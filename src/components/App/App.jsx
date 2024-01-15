
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import GalleryList from "../GalleryList/GalleryList";
import GalleryForm from "../GalleryForm/GalleryForm";

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
    <div data-testid="app" className="app">
      <header className="header">
        <h1>React Gallery</h1>
      </header>
      <GalleryForm renderImages={renderImages}/>
      <GalleryList galleryItems={galleryItems} />
    </div>
  );
}

export default App;
