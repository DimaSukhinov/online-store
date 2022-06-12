import React from 'react';
import s from './WomenPage.module.scss';
import {PageTitle} from '../../common/pageTitle/PageTitle';
import {ProductCard} from '../../productCard/ProductCard';
import {useAppSelector} from '../../../store/store';
import img from '../../../assets/Green Arrow.jpg';
import {ProductsType} from '../../../store/womenProducts-reducer';

export const WomenPage = () => {

    // const womenProducts = useAppSelector(store => store.womenProducts)
    const initialState: ProductsType[] = [
        {title: 'First', price: '$50', img: img},
        {title: 'Second', price: '$70', img: img},
        {title: 'Third', price: '$20', img: img},
        {title: 'Fourth', price: '$25', img: img},
        {title: 'Fifth', price: '$1234', img: img},
    ]


    return (
        <div className={s.womenPage}>
            <PageTitle title={'Women'}/>
            <div className={s.products}>
                {/*{*/}
                {/*    womenProducts.map(p => <ProductCard products={p}/>)*/}
                {/*}*/}
                {
                    initialState.map(p => <ProductCard products={p}/>)
                }
            </div>
        </div>
    );
}
