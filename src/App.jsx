import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CakeView from '../redux-toolkit/feature/cake/CakeView'
import IceCreamView from '../redux-toolkit/feature/icecream/IceCreamView'
import UserView from '../redux-toolkit/users/UserView'
import CounterView from '../rtk/CounterView'
import StoreView from '../redux-toolkit/store/storeView'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <CakeView/>
      <br /> <hr /> <br />
      <IceCreamView/>
      <br /> <hr /> <br />
      <StoreView/>
      <br /> <hr /> <br />
      <UserView/>
      <br /> <hr /> <br />

      <CounterView/>
    </div>
  )
}

export default App
