import { useEffect } from 'react'
import Header from './components/Header/Header';
import SearchBar from './components/SeachBar/SearchBar';

function App() {
    useEffect(() => {
        document.documentElement.className = "theme-light";
    }, [])

  return (
    <div>
        <div className="top-bar-section">
        <Header />
        <SearchBar />
        </div>
    </div>
  )
}

export default App
