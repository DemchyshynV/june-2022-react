import {useReducer} from "react";

import {DEC, INC, RESET, SET} from "./count.actions";

const reducer = (state, action) => {
    switch (action.type) {
        case INC:
            return {count1: state.count1 + 1}
        case DEC:
            return {count1: state.count1 - 1}
        case RESET:
            return {count1: 0}
        case SET:
            return {count1: action.payload}
    }
}

const useCount1Reducer = () => useReducer(reducer, {count1: 0})

export {
    useCount1Reducer
}
