import React from 'react';
import Main_slide from './Main_slide';
import Shopping from './Shopping';
import Story from './Story';
import SNS from './SNS';

function Main(props) {
    return (
        <main>
            <Main_slide />
            <Shopping />
            <Story />
            <SNS />
        </main>
    );
}

export default Main;