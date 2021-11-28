import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit'
import { SectionReducer } from './section/reducer'
import createSagaMiddleware from 'redux-saga'

/*

*/
const rootReducer = combineReducers({
  section: SectionReducer,
})

/**
 * rootReducerから推定した型を示す
 * @export
 */
export type AppState = ReturnType<typeof rootReducer>

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), sagaMiddleware]
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;
