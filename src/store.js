import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import {createStore, applyMiddleware} from 'redux'
const DEBUG = true
export const createMyStore = function(rootReducer) {
  let middlewares = []
	middlewares.push(thunkMiddleware)
  // middlewares for development
	if (DEBUG) {
		// middleware that logs the global state for debug
		const loggerMiddleware = createLogger({
			stateTransformer: (state) => {
				return state.toJS()
			},
		})
		middlewares.push(loggerMiddleware)
	}
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
  const store = createStoreWithMiddleware(rootReducer)

  return store
}
