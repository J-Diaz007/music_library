import GalleryItem from "./GalleryItem"

export default function Gallery(props) {
    const display = props.data.map((item, index) =>
     <GalleryItem item={item} index={index} />)

    return (
        <div>
            {display}
        </div>    
    )
}