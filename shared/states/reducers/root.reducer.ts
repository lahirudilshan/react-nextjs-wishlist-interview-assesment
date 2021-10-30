import { combineReducers } from 'redux';
import weatherReducer from '../../modules/weather/state/reducers/weather.reducer';


const rootReducer = combineReducers({
    weather: weatherReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;