import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// ReactDom connects this file to the index.html and <App /> will be executed and display the website.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Browse Router is the react browser and it is a global function for all the routes and allows users to 
    navigate */}
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>
)
