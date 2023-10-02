import { SearchContext } from '../Context/SearchContext.js'
import { useContext } from 'react'

export default function SearchBar() {
    return (
        <form onSubmit={e => handleSearch(e, searchTerm)}>
            <input type="text" placeholder='Enter a search term' ref={term}/>
            <input type="submit" />
        </form>
    )
}