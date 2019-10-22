import { combineReducers } from 'redux'
import noteInfo from './nodeInfo'
import ui from './ui'

export const reducer = combineReducers({ noteInfo, ui })
