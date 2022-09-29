import {useReducer} from "react";

import {DEC, INC, RESET, SET} from "./count.actions";

const reducer = (state, action) => {
    switch (action.type) {
        case INC:
            return {count2: state.count2 + 1}
        case DEC:
            return {count2: state.count2 - 1}
        case RESET:
            return {count2: 0}
        case SET:
            return {count2: action.payload}
    }
}

const useCount2Reducer = () => useReducer(reducer, {count2: 0})

export {
    useCount2Reducer
}
