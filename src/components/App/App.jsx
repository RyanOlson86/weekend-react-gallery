
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
      setGalleryItems(response.data);
    })
    .catch(error => {
      console.log('Error in GET', error)
    })
  }

  return (
    <div data-testid="app">
      <header>
        <h1>React Gallery</h1>
      </header>

      <p>The gallery goes here!</p>
      <GalleryList galleryItems={galleryItems} renderImages={renderImages}/>
    </div>
  );
}

export default App;
