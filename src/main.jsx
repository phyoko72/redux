import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import AsyncAction from '../async/asyncAction'
import RTK from '../redux-toolkit'
import store from '../redux-toolkit/app/store'
// import store from '../rtk/store'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Provider store={store}>
      <App />
    </Provider>
    {/* <AsyncAction/> */}
    {/* <RTK/> */}
  </React.StrictMode>,
)
