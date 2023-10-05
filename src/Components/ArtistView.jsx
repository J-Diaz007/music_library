// This component will be making separate API calls from the app component to serve specific data about our artist
import { useState, useEffect } from 'react'

export default function ArtistView() {
    const [ artistData, setArtistData ] = useState([])

    return(
        <div>
            <p>Artist Data goes here!</p>
        </div>
    )
}

