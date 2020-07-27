import React from 'react';
import counterReducer from './counterReducer'
import { combineReducers } from 'redux'

export const allReducers = combineReducers({counterReducer})