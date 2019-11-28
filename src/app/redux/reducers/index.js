import { combineReducers } from 'redux';
import { notesMaster } from './notesReducer';
import { ui } from './uiReducer';

export const reducer = combineReducers({ notesMaster, ui });
