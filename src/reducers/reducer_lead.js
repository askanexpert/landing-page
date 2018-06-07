import React from 'react';

import {ACTION_SIGNUP} from '../actions/index';

export default function(state = {}, action) {
    // In case of successful submission
    switch(action.type) {
      case ACTION_SIGNUP:
        console.log('Signup response');
        console.log(action);
        return state;
      default:
        console.log('No change, default state');
        return state;
    }
}
