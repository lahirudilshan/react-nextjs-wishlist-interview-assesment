// Sagas
import { all, fork } from '@redux-saga/core/effects';
import weatherSaga from '../../modules/weather/state/sagas/weather.saga';

// Export the root saga
export default function* rootSaga() {
    console.log("Hello From Redux-Saga!")

    yield all([
        fork(weatherSaga)
    ])
}