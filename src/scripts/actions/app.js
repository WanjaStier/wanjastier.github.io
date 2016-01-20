import {UPDATE_ROUTE} from 'actions/constants';

export function submitForm() {
    return {
        type: SUBMIT_FORM
    }
}

export function updateRoute(newRoute) {
   return {
       route: newRoute,
       type: UPDATE_ROUTE
   }
}
