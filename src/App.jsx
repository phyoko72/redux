import { connect } from 'react-redux'
import { increment, decrement } from '../reduxInReact'
import './App.css'

function App(props) {

  console.log("Props: ",props);

  return (
    <>
      <h1>App Page</h1>
      <h1>Count: {props.count} </h1>
      <button onClick={()=>props.decrement(1)}>-</button>
      <button onClick={()=>props.increment(1)}>+</button>
    </>
  )
}

function mapStateToProps(globalState){
  return { 
    count : globalState
  }
}

const mapDispatchToProps = {
  increment,
  decrement
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
