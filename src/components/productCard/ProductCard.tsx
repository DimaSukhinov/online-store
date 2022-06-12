import React from 'react';
import s from './ProductCard.module.scss';
import {SvgSelector} from '../../assets/SvgSelector';
import {ProductsType} from '../../store/womenProducts-reducer';

type ProductCartProps = {
    products: ProductsType
}

export const ProductCard = (props: ProductCartProps) => {
    return (
        <div className={s.productCard}>
            <img src={props.products.img} alt="ProductImage"/>
            <span>
                {props.products.title}
            </span>
            <span className={s.productPrise}>
                {props.products.price}
            </span>
            <div className={s.addToCart}>
                <SvgSelector id={'ADD-TO-CART'}/>
            </div>
        </div>
    );
}
