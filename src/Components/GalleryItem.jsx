import { useState } from 'react';

export default function GalleryItem() {
    let [showDetails, setShowDetails] = useState(false)

    return (
        <div onClick={() => setShowDetails(!showDetails)} 
        style={{'display': 'inline-block'}}>
            <p>One Gallery Item</p>
        </div>
    )
}