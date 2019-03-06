//import {Hello} from "./comtainers/counterContainer";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import CounterContainer from "./comtainers/counterContainer";
import counterReducers from "./reducers/counterReducer";
import { createStore } from "redux";

let store = createStore(counterReducers);
ReactDOM.render(
    <Provider store={store}>
        <CounterContainer />
    </Provider>,
    document.getElementById("app")
)

