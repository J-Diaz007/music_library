import GalleryItem from "./GalleryItem"
import { DataContext } from "../Context/DataContext"
import { useContext } from "react"


export default function Gallery() {
    const data = useContext(DataContext)

    const display = data.map((item, index) =>
     <GalleryItem key={index} item={item} />)
     
    return (
        <div>
            {display}
        </div>
    )
}


