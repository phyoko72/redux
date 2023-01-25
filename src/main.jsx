import React from 'react'
import ReactDOM from 'react-dom/client'
import Apple from '../useContext/Apple'
import App from './App'
// import App from '../useMemo/App'
import Ref from '../useRef/Ref'
import './index.css'
import DataProvider from '../useContext/userContext'
import UseCallBack from '../useCallback/UseCallBack'
import Timer from '../useRef/Timer'
import Home from '../customHooks'
import Pagination from '../Pagination/Pagination'
import UseMemoHome from '../useMemo'
import UseCallBack2 from '../useCallBack2'


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
      {/* <DataProvider>
        <App />

      </DataProvider> */}

      {/* <UseCallBack/> */}
      {/* <Home/>
      <Pagination/>
      <UseMemoHome/> */}
      <UseCallBack2/>
  </React.StrictMode>,
)
