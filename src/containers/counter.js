import React, { Component } from 'react';

import { connect } from 'react-redux';
import { increment,decrement } from '../actions';

let Counter = ({stateObj,inc,dec}) =>{
    return <div>
             <button onClick={(inc)}>Increment</button>
             <button onClick={dec}>Decrement</button>
             <label>Count: {stateObj.counter}</label>
           </div>
}

const mapStateToProps = (state)=>({
    stateObj:state
});
const mapDispatchToProps = (dispatch)=>({
    inc:()=>{dispatch(increment())},
    dec:()=>{dispatch(decrement())}
});
Counter=connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
export default Counter;