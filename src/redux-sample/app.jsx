import React from "react";
import { useSelector } from "react-redux";
import { legacy_createStore as createStore } from "redux";

const reducer = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count+ action.payload,
                action: "incrementx"
            };
        case "DECREMENT":
            return {
                count: state.count - action.payload,
                action: "decrementx"
            };
        default:
            return {
                count: state,
                action: "defaultx"
            };
    }
};

export const store = createStore(reducer);

function doIncrement(num) {
    store.dispatch({
        type: "INCREMENT",
        payload: num
    });
}

function doDeCrement(num) {
    store.dispatch({
        type: "DECREMENT",
        payload: num
    });
}
function ReduxSample() {
    store.subscribe(() => {
        console.log("current state", store.getState())
    })
    const count = useSelector((state) => `${state.action} to ${state.count}`)
    return (
        <div>
            <button onClick={() => doIncrement(1)}>increment</button>
            <button onClick={() => doDeCrement(1)}>decrement</button>
            <div>{count}</div>
        </div>
    )
}
export default ReduxSample


