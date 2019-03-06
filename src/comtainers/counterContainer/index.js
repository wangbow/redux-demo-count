import React from "react";
import {connect} from 'react-redux';
import Counter from "../../components/counterComponent";
import { CountersAction } from "../../action/counter";
import { bindActionCreators } from "redux";

const mapStateToProps = state => ({
    value: state.countInfo.count
})

const mapDispatchToProps = (dispatch) => ({
    activeAction: bindActionCreators(CountersAction, dispatch)
})

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter)


export default CounterContainer;



