/* global APP_DIR */
import React, { Component, PropTypes } from 'react';
import style from './style.scss';

class TestPlugin extends Component {

    static propTypes = {}

    static defaultProps = {}

    constructor () {
        super();
    }

    state = {}

    render () {
        return (
          <div className={style.plugin}>
            Test plugin
          </div>
        );
    }
}

export default TestPlugin;
