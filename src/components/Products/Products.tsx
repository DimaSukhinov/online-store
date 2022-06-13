import React from 'react';
import s from './Products.module.scss';
import {ProductCard} from '../productCard/ProductCard';
import {ProductsType} from '../../store/products-reducer';

type ProductsPropsType = {
    title: string
    products: ProductsType[]
}

export const Products = React.memo((props: ProductsPropsType) => {
    return (
        <div className={s.all}>
            <div className={s.pageTitle}>
                {props.title}
            </div>
            <div className={s.products}>
                {
                    props.products.map((p: any) => <ProductCard products={p}/>)
                }
            </div>
        </div>
    );
})
