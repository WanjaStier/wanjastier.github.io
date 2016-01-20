import * as actionTypes from 'actions/constants'

export function updateRoute(state = 'home', action) {
    if (action.type === actionTypes.UPDATE_ROUTE) {
        return;
    }
    return state;
}
