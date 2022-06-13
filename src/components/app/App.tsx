import React, {useEffect, useState} from 'react';
import s from './App.module.scss';
import {Header} from '../header/Header';
import {Products} from '../Products/Products';
import {useQuery} from '@apollo/client';
import {GET_DATA} from '../../query/queries';
import {useDispatch} from 'react-redux';
import {setCurrenciesAC} from '../../store/currencies-reducer';
import {useAppSelector} from '../../store/store';
import {setCategoriesAC} from '../../store/categories-reducer';
import {setProductsAC} from '../../store/products-reducer';

export type CategoryType = 'all' | 'tech' | 'clothes'

export const App = React.memo(() => {

    const dispatch = useDispatch()
    const [currentCategory, setCurrentCategory] = useState<CategoryType>('all')

    const {data, loading} = useQuery(GET_DATA, {variables: {title: currentCategory}})

    const setNewCategory = (category: CategoryType) => setCurrentCategory(category)

    useEffect(() => {
        if (!loading) {
            dispatch(setCurrenciesAC(data.currencies))
            dispatch(setCategoriesAC(data.categories))
            dispatch(setProductsAC(data.category.products))
        }
    }, [data])

    const currencies = useAppSelector(store => store.currencies)
    const categories = useAppSelector(store => store.categories)
    const products = useAppSelector(store => store.products)

    return (
        <div className={s.app}>
            <Header categories={categories} currencies={currencies} products={products} setNewCategory={setNewCategory}/>
            <Products title={currentCategory} products={products}/>
        </div>
    );
})
