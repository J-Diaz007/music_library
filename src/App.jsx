import './App.css';
import { useEffect, useState } from 'react';
import Gallery from "./Components/Gallery.jsx";
import SearchBar from "./Components/SearchBar.jsx";

function App() {
  let [search, setSearch] = useState("")
  let [data, setData] = useState([])
  let [message, setMessage] = useState("Search for Music!")

  useEffect(() => {
    const fetchData = async () => {
      document.title = `${search} Music`
      const response = await fetch('https://itunes.apple.com/search?term=the%20grateful%20dead')
      const resData = await response.json()
      if (resData.results.length) {
        setData(resData.results)
      } else {
        setMessage('Not found 😞')
      }      
    }
  }, [])

  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearch(term)
  }

  return (
    <div className="App">
      <SearchBar handleSearch={handleSearch} />
      {message}
      <Gallery />
    </div>
  );
}

export default App;
