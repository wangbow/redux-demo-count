import { CountersAction } from "../../action/counter";

export function Counter(state = { count: 0 }, action) {
    switch (action.type) {
        case CountersAction.INCREMENT:
            return {
                count: state.count + 1
            }
        case CountersAction.DECREMENT:
            return {
                count: state.count - 1
            }
        default:
            return state
    }
}