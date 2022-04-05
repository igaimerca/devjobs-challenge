import { useEffect } from 'react'
import Header from './components/Header/Header';

function App() {
    useEffect(() => {
        document.documentElement.className = "theme-light";
    }, [])

  return (
    <div>
        <Header />
    </div>
  )
}

export default App
