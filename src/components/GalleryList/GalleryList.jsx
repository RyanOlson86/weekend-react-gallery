import GalleryItem from "../GalleryItem/GalleryItem"

const GalleryList = ({galleryItems}) => {

    return (
        <div data-testid="galleryList" className="galleryList" >
            {galleryItems && galleryItems.map((image) => (
            <GalleryItem 
                image={image} 
                key={image.id}
                />
            ))}
        </div>
    )
}

export default GalleryList