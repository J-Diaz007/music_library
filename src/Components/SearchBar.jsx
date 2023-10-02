import { useState } from 'react'

export default function SearchBar() {
    let [searchTerm, setSearchTerm] = useState('')

    return (
        <form>
            <input type="text" placeholder='Enter a search term' />
            <input type="submit" />
        </form>
    )
}