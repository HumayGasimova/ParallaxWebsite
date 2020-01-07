import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';

import { createEpicMiddleware } from 'redux-observable';

import {
    createBrowserHistory
} from 'history';

import {
    routerMiddleware
} from 'connected-react-router';

import {
    createLogger
} from 'redux-logger';

import thunk from 'redux-thunk';
import createRootReducer from '../reducers/reducers';
import {rootEpic} from '../epics/rootEpics';

// import pingEpic from '../epics/exEpic1';


// const middleware = [thunk];

const logger = createLogger({
    collapsed: true
});

const middleware = [];
const epicMiddleware = createEpicMiddleware();

if (process.env.ENVIRONMENT !== 'production') {
    // middleware.push(logger);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export default createStore(
//     rootReducer, 
//     composeEnhancers(
//         applyMiddleware(thunk,logger)
// ));


export const history = createBrowserHistory();

export default createStore(
    createRootReducer(history),
    composeEnhancers(
        applyMiddleware(
            epicMiddleware,
            routerMiddleware(history),
           
            // logger,
            
            thunk
            )
        )
    );

epicMiddleware.run(rootEpic);

// export default function configureStore(preloadedState){
//     const store = createStore(
//         rootReducer(history),
//         preloadedState,
//         compose(
//             applyMiddleware(logger, routerMiddleware(history))
//         )
//     );
//     return store
// };