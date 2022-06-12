import React from 'react';
import s from './PageTitle.module.scss';

type PageTitleType = {
    title: string
}

export const PageTitle = (props: PageTitleType) => {
    return (
        <div className={s.pageTitle}>
            {props.title}
        </div>
    );
}
