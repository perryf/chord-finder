import { combineReducers } from 'redux';
import { notesMaster } from './notes';
import { ui } from './ui';

export const reducer = combineReducers({ notesMaster, ui });
