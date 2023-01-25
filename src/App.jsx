import { useState } from 'react'
import Header from '../useContext/Header'
import MainContent from '../useContext/MainContent'
import DataProvider from '../useContext/userContext'
import UserContext, { DataContext } from '../useContext/userContext'

function App() {
  const [count, setCount] = useState(0)


  return (
    <div className="App">
		<h1>Hello</h1>
		<Header/>
		<MainContent/>
    </div>
  )
}

export default App
