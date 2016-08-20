import React, { Component } from 'react';
import styles from './RootRouteWrapper.css';
import CSSModules from 'react-css-modules';
import config from '../../constants/config';


class RootRouteWrapper extends Component {
    render() {
        return (
            <div className="container-fluid" styleName="root-container">
                <div className="row" styleName="root-row">
                    <div className="col-md-4" styleName="root-left">
                        1 + {config.HOST_API}
                    </div>
                    <div className="col-md-8 full-height no-padding">
                        2
                    </div>
                </div>
            </div>
        )
    }
};

export default CSSModules(RootRouteWrapper, styles);