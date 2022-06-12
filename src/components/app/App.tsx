import React from 'react';
import s from './App.module.scss';
import {Header} from '../header/Header';
import {Routes, Route} from 'react-router-dom';
import {WomenPage} from '../pages/womenPage/WomenPage';
import {MenPage} from '../pages/menPage/MenPage';
import {KidsPage} from '../pages/kidsPage/KidsPage';

export const App = () => {
    return (
        <div className={s.app}>
            <Header/>
            <Routes>
                <Route path="/" element={<WomenPage/>}/>
                <Route path="women" element={<WomenPage/>}/>
                <Route path='men' element={<MenPage/>}/>
                <Route path='kids' element={<KidsPage/>}/>
            </Routes>
        </div>
    );
}
