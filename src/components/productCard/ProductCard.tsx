import React, {useCallback} from 'react';
import s from './ProductCard.module.scss';
import {SvgSelector} from '../../assets/SvgSelector';
import {addInCartAC, ProductsType} from '../../store/products-reducer';
import {useDispatch} from 'react-redux';

type ProductCartProps = {
    products: ProductsType
}

export const ProductCard = React.memo((props: ProductCartProps) => {

    const dispatch = useDispatch()

    const addInCart = useCallback((id: string) => () => dispatch(addInCartAC(id)), [dispatch])

    return (
        <div className={s.productCard} style={!props.products.inStock ? {opacity: '0.5'} : {}}>
            <img src={props.products.gallery} alt="ProductImage"/>
            <span>
                {props.products.name}
            </span>
            <span className={s.productPrise}>
                Price
            </span>
            <div onClick={addInCart(props.products.id)} className={s.addToCart} style={!props.products.inStock ? {display: 'none'} : {}}>
                <SvgSelector id={'ADD-TO-CART'}/>
            </div>
        </div>
    );
})
