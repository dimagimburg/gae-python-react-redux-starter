import { AppContainer } from 'react-hot-loader'; // required
import React from 'react';
import ReactDOM from 'react-dom';
import Wrapper from './Wrapper';

const rootEl = document.getElementById('app');

ReactDOM.render(
    <AppContainer>
        <Wrapper />
    </AppContainer>,
    rootEl
);

if (module.hot) {
    module.hot.accept('./Wrapper', () => {

        const NextApp = require('./Wrapper').default;

        ReactDOM.render(
            <AppContainer>
                <NextApp />
            </AppContainer>,
            rootEl
        );
    });
}