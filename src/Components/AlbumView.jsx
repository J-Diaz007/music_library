// This component will be making separate API calls from the app component to serve specific data about our artist
import { useState, useEffect } from 'react'

export default function AlbumView() {
    const [ albumData, setAlbumData ] = useState([])

    return(
        <div>
            <p>Album Data goes here!</p>
        </div>
    )
}

