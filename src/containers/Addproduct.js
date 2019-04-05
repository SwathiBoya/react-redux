import React from 'react'
import { connect } from 'react-redux'
import { helloWorld } from '../actions'

let Button = ({hello }) => (
  <div >
    {/* <button onClick={saySomething}>PRESS TO DISPATCH FIRST ACTION</button>
    <h2>{whatsUp}</h2> */}
    <button onClick={hello}>Item Add</button>
    {/* <h1>{stateObject.Count}</h1> */}
  </div>
)

const mapStateToProps = (state) => ({
  whatsUp: state.say,
  stateObject: state
})

const mapDispatchToProps = (dispatch) => ({
  hello: () => { dispatch(helloWorld())}
})

Button = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)

export default Button;
