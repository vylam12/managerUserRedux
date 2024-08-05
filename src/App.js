import './App.css';
import { connect } from "react-redux";
import {
  increaseCounter,
  decreaseCounter,
} from "./action/actions"

function App(props) {
  //event handle là 1 function, là 1 hàm giúp xử lý event
  //event handle (handleIncrease)
  const handleIncrease = () => {
    //dispatch actions
    props.increaseCounter1()
  }
  return (
    <div className="App">
      <h1>Hello {props.abc}</h1>
      <div>Count: {props.count}</div>

      <button onClick={() => handleIncrease()}>Increase Count</button>

      <button onClick={() => props.decreaseCounter()}>Decrease Count</button>
    </div>
  );
}
//  map (connect) state của redux store cho vào props của react
const mapStateToProps = state => {
  return {
    //counter này bên file rootReducer    
    count: state.counter.count, // count là gọi đến biến count bên file counterReducer
    // abc là tên của biến muốn lấy ra
    // còn phần bên phải là giá trị gán cho biến abc
    abc: state.counter.name
  }
}
// map dispatch (Redux) to props react
const mapDispatchToProps = dispatch => {
  return {
    // increaseCounter1 tên của function muốn gọi tới
    increaseCounter1: () => dispatch(increaseCounter()), //increaseCounter : tên của action

    decreaseCounter: () => dispatch(decreaseCounter()),
  }
}
//higher order component
export default connect(mapStateToProps, mapDispatchToProps)(App)
