import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Redux01 from '../redux/Redux_01'
import './index.css'
import { Provider } from 'react-redux'
import store from '../reduxInReact'


ReactDOM.createRoot(document.getElementById('root')).render(


  <React.StrictMode>
    {/* <App /> */}
    <Provider store={ store } >
      <App />
    </Provider>

  </React.StrictMode>,
)
