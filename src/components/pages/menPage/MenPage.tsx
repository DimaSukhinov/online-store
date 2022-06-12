import React from 'react';
import s from './MenPage.module.scss';
import {PageTitle} from '../../common/pageTitle/PageTitle';

export const MenPage = () => {
    return (
        <div className={s.womenPage}>
            <PageTitle title={'Men'}/>
        </div>
    );
}
