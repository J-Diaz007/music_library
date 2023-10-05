import './App.css';
import { useState, useRef } from 'react'
import Gallery from "./Components/Gallery.jsx"
import SearchBar from "./Components/SearchBar.jsx"
import { DataContext } from "./Context/DataContext.js"
import { SearchContext } from "./Context/SearchContext.js"

function App() {
  let [data, setData] = useState([])
  let [message, setMessage] = useState("Search for Music!")
  let searchInput = useRef('')

  const API_URL = 'https://itunes.apple.com/search?term='

  const handleSearch = (e, term) => {
    e.preventDefault()
    // FETCH DATA
    const fetchData = async () => {
        document.title = `${term} Music`
        const response = await fetch(API_URL + term)
        const resData = await response.json()
        if (resData.results.length) {
            //SETS STATE AND CONTEXT VALUE
            setData(resData.results)
        } else {
            setMessage('Not found 😞')
        }      
    }
    fetchData()
  }

  return (
    <div className="App">
        <SearchContext.Provider value={{
            term: searchInput,
            handleSearch: handleSearch
        }}>
            <SearchBar />
        </SearchContext.Provider>
        {message}
        <DataContext.Provider value={data} >
            <Gallery />
        </DataContext.Provider>  
    </div>
  );
}

export default App;


//BROKEN CODE BELOW//

// import { useEffect, useState, Fragment } from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// import Gallery from './Components/Gallery'
// import SearchBar from './Components/SearchBar'
// import AlbumView from './Components/AlbumView'
// import ArtistView from './Components/ArtistView'

// const API_URL = 'https://itunes.apple.com/search?term='

// export default function App() {
//     let [search, setSearch] = useState('')
//     let [message, setMessage] = useState('Search for Music!')
//     let [data, setData] = useState([])

//     useEffect(() => {
//         if(search) {
//             const fetchData = async () => {
//                 document.title = `${search} Music`
//                 const response = await fetch(API_URL + search)
//                 const resData = await response.json()
//                 if (resData.results.length > 0) {
//                         return setData(resData.results)
//                 } else {
//                         return setMessage('Not Found')
//                 }
//             }
//             fetchData()
//         }
//     }, [search])
    
//     const handleSearch = (e, term) => {
//         e.preventDefault()
//         setSearch(term)
//     }

//     return (
//       <div>
//       {message}
//           <Router>
//               <Routes>
//                   <Route path="/" element={
//                       <Fragment>
//                           <SearchBar handleSearch = {handleSearch}/>
//                           <Gallery data={data} />
//                       </Fragment>
//                   } />
//                   <Route path="/album/:id" element={<AlbumView />} />
//                   <Route path="/artist/:id" element={<ArtistView />} />
//               </Routes>
//           </Router>
//       </div>
//   )
//   ;
// }


