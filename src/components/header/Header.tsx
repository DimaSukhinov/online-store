import React, {useCallback, useState} from 'react';
import s from './Header.module.scss';
import {SvgSelector} from '../../assets/SvgSelector';
import {useNavigate} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

export const Header = React.memo(() => {

    const navigate = useNavigate()
    const navigateTo = useCallback((path: 'women' | 'men' | 'kids') => () => navigate(path), [navigate])

    const [openValue, setOpenValue] = useState(false)
    const anchorRef = React.useRef<HTMLButtonElement>(null)

    const handleToggle = useCallback(() => setOpenValue((prevOpen) => !prevOpen), [])

    const handleCloseValue = useCallback((event: React.MouseEvent<EventTarget>) => {
        if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
            return
        }
        setOpenValue(false)
    }, [])

    const handleListKeyDown = useCallback((event: React.KeyboardEvent) => {
        if (event.key === 'Tab') {
            event.preventDefault()
            setOpenValue(false)
        }
    }, [])

    const [openCart, setOpenCart] = useState<boolean>(false)

    const handleOpenCart = useCallback(() => setOpenCart(true), [])
    const handleCloseCart = useCallback(() => setOpenCart(false), [])

    return (
        <div className={s.header}>
            <div className={s.links}>
                <span onClick={navigateTo('women')} className={s.link}>Women</span>
                <span onClick={navigateTo('men')} className={s.link}>Men</span>
                <span onClick={navigateTo('kids')} className={s.link}>Kids</span>
            </div>
            <div className={s.logo}>
                <SvgSelector id={'HEADER_LOGO'}/>
            </div>
            <div className={s.actions}>
                <div className={s.currencyAction}>
                    <Button
                        ref={anchorRef}
                        aria-controls={openValue ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                    >
                        <span className={s.value}>$</span>
                        <SvgSelector id={'HEADER-VECTOR'}/>
                    </Button>
                    <Popper open={openValue} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                        {({TransitionProps, placement}) => (
                            <Grow
                                {...TransitionProps}
                                style={{transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'}}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={handleCloseValue}>
                                        <MenuList autoFocusItem={openValue} id="menu-list-grow"
                                                  onKeyDown={handleListKeyDown}>
                                            <MenuItem onClick={handleCloseValue}>Profile</MenuItem>
                                            <MenuItem onClick={handleCloseValue}>My account</MenuItem>
                                            <MenuItem onClick={handleCloseValue}>Logout</MenuItem>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </div>
                <div className={s.cartAction}>
                    <div onClick={openCart ? handleCloseCart : handleOpenCart}>
                        <SvgSelector id={'HEADER-EMPTY-CART'}/>
                    </div>
                    {openCart && <div className={s.cart}>
                        Hi
                    </div>}
                </div>
            </div>
        </div>
    )
})
