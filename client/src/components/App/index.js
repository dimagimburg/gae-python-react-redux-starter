import React from 'react';
import TopNavBar from '../TopNavBar';
import CSSModules from 'react-css-modules';
import styles from './App.css';


let App = ({ children }) => {
    return (
        <div styleName="app-wrapper">
            <TopNavBar />
            <div styleName="content">
                {children}
            </div>
        </div>
    );
};

export default CSSModules(App, styles);