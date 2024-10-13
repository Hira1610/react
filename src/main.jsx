import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Card from './components/Card.jsx'

createRoot(document.getElementById('root')).render(
<>
    <App />
    {/* <Navbar /> */}
    <Card />
</>
)
