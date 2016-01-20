import {UPDATE_ROUTE} from 'actions/constants';

export const SUBMIT_FORM = 'frontshift:SUBMIT_FORM';

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
