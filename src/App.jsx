import { useEffect, useState, Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Gallery from "./Components/Gallery.jsx"
import SearchBar from "./Components/SearchBar.jsx"
import AlbumView from "./Components/AlbumView.jsx"
import ArtistView from "./Components/ArtistView.jsx"

function App() {
	let [search, setSearch] = useState('')
	let [message, setMessage] = useState('Search for Music!')
	let [data, setData] = useState([])

	const API_URL = 'https://itunes.apple.com/search?term='

	useEffect(() => {
		if(search) {
            // FETCH DATA
			const fetchData = async () => {
				document.title = `${search} Music`
				const response = await fetch(API_URL + search)
				const resData = await response.json()
				if (resData.results.length > 0) {
                    // SETS STATE AND CONTEXT VALUE
					return setData(resData.results)
				} else {
					return setMessage('Not Found')
				}
			}
			fetchData()
		}
	}, [search])
	
	const handleSearch = (e, term) => {
		e.preventDefault()
		setSearch(term)
	}

	return (
		<div>
			{message}
			<Router>
				<Routes>
					<Route path="/" element={
						<Fragment>
							<SearchBar handleSearch = {handleSearch}/>
							<Gallery data={data} />
						</Fragment>
					} />
					<Route path="/album/:id" element={<AlbumView />} />
					<Route path="/artist/:id" element={<ArtistView />} />
				</Routes>
			</Router>
		</div>
  	);
}

export default App;

// import './App.css';
// import { useState, useRef } from 'react'
// import { DataContext } from "./Context/DataContext.js"
// import { SearchContext } from "./Context/SearchContext.js"
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// import Gallery from "./Components/Gallery.jsx"
// import SearchBar from "./Components/SearchBar.jsx"
// import AlbumView from "./Components/AblumView"
// import ArtistView from "./Components/ArtistView"

// function App() {
//   let [data, setData] = useState([])
//   let [message, setMessage] = useState("Search for Music!")
//   let searchInput = useRef('')

//   const API_URL = 'https://itunes.apple.com/search?term='

//   const handleSearch = (e, term) => {
//     e.preventDefault()
//     // FETCH DATA
//     const fetchData = async () => {
//         document.title = `${term} Music`
//         const response = await fetch(API_URL + term)
//         const resData = await response.json()
//         if (resData.results.length) {
//             //SETS STATE AND CONTEXT VALUE
//             setData(resData.results)
//         } else {
//             setMessage('Not found 😞')
//         }      
//     }
//     fetchData()
//   }

//   return (
//     <div className="App">
//         <SearchContext.Provider value={{
//             term: searchInput,
//             handleSearch: handleSearch
//         }}>
//             <SearchBar />
//         </SearchContext.Provider>
//         {message}
//         <DataContext.Provider value={data} >
//             <Gallery />
//             <AlbumView />
//             <ArtistView />
//         </DataContext.Provider>  
//     </div>
//   );
// }

// export default App;
