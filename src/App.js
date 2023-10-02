import './App.css';
import { useEffect, useState } from 'react';
import Gallery from "./Components/Gallery.jsx";
import SearchBar from "./Components/SearchBar.jsx";

function App() {
  let [search, setSearch] = useState("")
  let [data, setData] = useState([])
  let [message, setMessage] = useState("Search for Music!")
  return (
    <div className="App">
      <SearchBar />
      {message}
      <Gallery />
    </div>
  );
}

export default App;
