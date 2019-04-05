import React from 'react'
import { connect } from 'react-redux'
import { sayHello,addItem,helloWorld } from '../actions'

let Button = ({ whatsUp, stateObject, saySomething,add,hello }) => (
  <div >
    {/* <button onClick={saySomething}>PRESS TO DISPATCH FIRST ACTION</button>
    <h2>{whatsUp}</h2> */}
    <button onClick={add}>Item Add</button>
    <button onClick={hello}>Hello World</button>
    {/* <h1>{stateObject.Count}</h1> */}
  </div>
)

const mapStateToProps = (state) => ({
  whatsUp: state.say,
  stateObject: state
})

const mapDispatchToProps = (dispatch) => ({
  saySomething: () => { dispatch(sayHello())},
  add: () => { dispatch(addItem())},
  hello: () => { dispatch(helloWorld())}
})

Button = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)

export default Button;
