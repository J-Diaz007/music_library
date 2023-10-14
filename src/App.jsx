import './App.css';

import { DataContext } from "./Context/DataContext"
import { useEffect, useState, Suspense } from 'react'
import { createResource as fetchData } from './helper';

import Gallery from "./Components/Gallery.jsx";
import SearchBar from "./Components/SearchBar.jsx";
import Spinner from "./Components/Spinner.jsx"

const API_URL = 'https://itunes.apple.com/search?term='

function App() {
  let [searchTerm, setSearchTerm] = useState("")
  let [data, setData] = useState(null)
  let [message, setMessage] = useState("Search for Music!")

  useEffect(() => {
    if (searchTerm) {
        document.title=`${searchTerm} Music`
        console.log(fetchData(searchTerm))
        setData(fetchData(searchTerm))
    }
  }, [searchTerm])


  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearchTerm(term)
  }

  const renderGallery = () => {
    if(data){
        return (
            <Suspense fallback={<Spinner />}>
                <Gallery data={data} />
            </Suspense>
        )
    }
  }

  return (
    <div className="App">
      <SearchBar handleSearch={handleSearch} />
      {message}
      <DataContext.Provider value={data} >
        <Gallery />
      </DataContext.Provider>  
        {/* {renderGallery()} */}

    </div>
  );
}

export default App;
