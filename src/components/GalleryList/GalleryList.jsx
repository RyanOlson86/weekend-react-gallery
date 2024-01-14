import GalleryItem from "../GalleryItem/GalleryItem"

const GalleryList = ({galleryItems, renderImages}) => {

    return (
        <div data-testid="galleryList" className="galleryList" >
            {galleryItems && galleryItems.map((image) => (
            <GalleryItem 
                image={image} 
                key={image.id}
                renderImages={renderImages}
                />
            ))}
        </div>
    )
}

export default GalleryList