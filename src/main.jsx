import React from 'react'
import ReactDOM from 'react-dom/client'
import Reducer from '../reducer'
import Test from '../reducer/Test'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Reducer/> */}
    <Test/>
  </React.StrictMode>,
)
