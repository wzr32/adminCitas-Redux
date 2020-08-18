import { combineReducers } from 'redux';
import citasReducers from './CitasReducer';
import ValidacionReducer from './ValidacionReducer'

export default combineReducers ({
    citas: citasReducers,
    error: ValidacionReducer
})