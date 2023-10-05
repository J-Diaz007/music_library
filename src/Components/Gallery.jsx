import { DataContext } from "../Context/DataContext"
import { useContext } from "react"
import GalleryItem from "./GalleryItem"


export default function Gallery() {
    const data = useContext(DataContext)
    
    const display = data.map((item,index) => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })
    return (
        <div>
            {display}
        </div>
    )
}
