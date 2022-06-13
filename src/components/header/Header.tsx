import React, {useCallback, useState} from 'react';
import s from './Header.module.scss';
import {SvgSelector} from '../../assets/SvgSelector';
import {CategoryType} from '../app/App';
import {CategoriesType} from '../../store/categories-reducer';
import {CurrenciesType} from '../../store/currencies-reducer';
import {ProductsType} from '../../store/products-reducer';

type HeaderPropsType = {
    categories: CategoriesType[]
    currencies: CurrenciesType[]
    products: ProductsType[]
    setNewCategory: (category: CategoryType) => void
}

export const Header = React.memo((props: HeaderPropsType) => {

    const [openCart, setOpenCart] = useState<boolean>(false)
    const [openCurrencySelection, setOpenCurrencySelection] = useState<boolean>(false)

    const handleOpenCart = useCallback(() => {
        setOpenCart(true)
        setOpenCurrencySelection(false)
    }, [])

    const handleOpenCurrencySelection = useCallback(() => {
        setOpenCurrencySelection(true)
        setOpenCart(false)
    }, [])

    const handleCloseCart = useCallback(() => setOpenCart(false), [])
    const handleCloseCurrencySelection = useCallback(() => setOpenCurrencySelection(false), [])

    const handleChangeCategory = (newCategory: CategoryType) => () => props.setNewCategory(newCategory)

    return (
        <div className={s.header}>
            <div className={s.links}>
                {
                    props.categories.map(c => <span key={c.name} onClick={handleChangeCategory(c.name)} className={s.link}>{c.name}</span>)
                }
            </div>
            <div className={s.logo}>
                <SvgSelector id={'HEADER_LOGO'}/>
            </div>
            <div className={s.actions}>
                <div className={s.currencyAction}>
                    <div onClick={openCurrencySelection ? handleCloseCurrencySelection : handleOpenCurrencySelection}
                         className={s.value}>
                        <div className={s.currentValue}>
                            $
                        </div>
                        <SvgSelector id={'HEADER-VECTOR'}/>
                    </div>
                    {openCurrencySelection && <div className={s.selection}>
                        {
                            props.currencies.map(c => <div className={s.item}>{c.symbol} {c.label}</div>)
                        }
                    </div>}
                </div>
                <div className={s.cartAction}>
                    <div onClick={openCart ? handleCloseCart : handleOpenCart}>
                        <SvgSelector id={'HEADER-EMPTY-CART'}/>
                    </div>
                    {openCart && <div className={s.cart}>
                        <div className={s.aboutCart}>
                            My Bag, 3 items
                        </div>
                        {
                            props.products.map(p => p.inCart && <div>
                                {p.name}
                            </div>)
                        }
                    </div>}
                </div>
            </div>
        </div>
    )
})
