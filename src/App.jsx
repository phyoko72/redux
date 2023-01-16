import { connect, useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../reduxInReact'
import './App.css'

function App(props) {

   const count = useSelector(state=>state)

  const dispatch = useDispatch()

  return (
    <>
      <h1>App Page</h1>
      <h1>Count: {count} </h1>
      <button onClick={()=>dispatch(decrement(1))}>-</button>
      <button onClick={()=>dispatch(increment(1))}>+</button>
    </>
  )
}

// function mapStateToProps(globalState){
//   return { 
//     count : globalState
//   }
// }

// const mapDispatchToProps = {
//   increment,
//   decrement
// }

// export default connect(mapStateToProps,mapDispatchToProps)(App)
export default App

// https://thoughtbot.com/blog/using-redux-with-react-hooks
// https://react-redux.js.org/api/hooks#usage-warnings