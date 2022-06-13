import {combineReducers, createStore} from 'redux';
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {currenciesReducer} from './currencies-reducer';
import {categoriesReducer} from './categories-reducer';
import {productsReducer} from './products-reducer';

const rootReducer = combineReducers({
    currencies: currenciesReducer,
    categories: categoriesReducer,
    products: productsReducer,

})

export const store =createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

// @ts-ignore
window.store = store
