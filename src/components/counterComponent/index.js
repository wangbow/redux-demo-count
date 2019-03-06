import React, { Component } from "react";

class Counter extends Component {
    render() {
        let { value, activeAction } = this.props;
        return <div>
            <div>
                <span>  value: {value}</span>
                <div>
                    <button onClick={activeAction.increment} >+ </button>
                    <button onClick={activeAction.decrement} >- </button>
                </div>
            </div>
        </div>
    }
}

export default Counter;