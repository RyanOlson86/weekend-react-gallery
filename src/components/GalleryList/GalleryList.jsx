import GalleryItem from "../GalleryItem/GalleryItem"

const GalleryList = ({galleryItems, renderImages}) => {
    console.log('in GalleryList', galleryItems)

    return (
        <div data-testid="galleryList" >
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