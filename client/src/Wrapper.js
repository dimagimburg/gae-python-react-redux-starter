import React, { Component } from 'react';
import RootRouteWrapper from './components/RootRouteWrapper';
import App from './components/App';
import configureStore from './stores/configureStore';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';


const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

export default class Wrapper extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Route path="/" component={App}>
                        <IndexRoute component={RootRouteWrapper} />
                    </Route>
                </Router>
            </Provider>
        );
    }
}