import {combineReducers, createStore} from 'redux';
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {womenProductsReducer} from './womenProducts-reducer';

const rootReducer = combineReducers({
    womenProducts: womenProductsReducer,

})

export const store =createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

// @ts-ignore
window.store = store
