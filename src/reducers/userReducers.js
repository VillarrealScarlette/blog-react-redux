import { Switch } from "react-router-dom";
import { bindActionCreators } from "redux";

const INITIAL_STATE = {
    users: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'get_users':
            return {...state, users: action.payload}

            default: return state;
    }
}