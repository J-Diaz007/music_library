import { useState } from 'react'

export default function SearchBar() {
    return (
        <form onSubmit={e => handleSearch(e, searchTerm)}>
            <input type="text" placeholder='Enter a search term' onChange={e => setSearchTerm(e.target.value)} />
            <input type="submit" />
        </form>
    )
}