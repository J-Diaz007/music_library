import './App.css';
import { useEffect, useState, useRef } from 'react'
import Gallery from "./Components/Gallery.jsx"
import SearchBar from "./Components/SearchBar.jsx"
import { DataContext } from "./Context/DataContext.js"
import { SearchContext } from "./Context/SearchContext.js"


const API_URL = 'https://itunes.apple.com/search?term='

function App() {
  let [search, setSearch] = useState("")
  let [data, setData] = useState([])
  let [message, setMessage] = useState("Search for Music!")
  let searchInput = useRef('')

  useEffect(() => {
    if(search) {

    }
  }, [search])

  const handleSearch = (e, term) => {
    e.preventDefault()
    const fetchData = async () => {
      document.title = `${search} Music`
      const response = await fetch(API_URL + search)
      const resData = await response.json()
      if (resData.results.length) {
        setData(resData.results)
      } else {
        setMessage('Not found 😞')
      }      
    }
    fetchData()
    setSearch(term)
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
