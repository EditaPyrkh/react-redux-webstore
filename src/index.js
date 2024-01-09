import './main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserHistory} from 'history'
import {applyMiddleware} from 'redux'
import {legacy_createStore as createStore} from 'redux'
/* later switch from createStore to new configureStore */
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {ConnectedRouter, routerMiddleware} from 'connected-react-router'
import {Provider} from 'react-redux'

import createRootReducer from 'reducers'
import routes from 'routes'

const history = createBrowserHistory()
const middlewares = [thunk, routerMiddleware(history)]
const store = createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(...middlewares))
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>{routes}</ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
