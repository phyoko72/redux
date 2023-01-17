import React from 'react'
import ReactDOM from 'react-dom/client'
import AsyncAction from '../async/asyncAction'
import RTK from '../redux-toolkit'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <AsyncAction/> */}
    <RTK/>
  </React.StrictMode>,
)
