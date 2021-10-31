import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/root.saga';
import rootReducer from './reducers/root.reducer';
import { applyMiddleware, createStore } from 'redux';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(sagaMiddleware))
)

// run middleware
sagaMiddleware.run(rootSaga)

export default store