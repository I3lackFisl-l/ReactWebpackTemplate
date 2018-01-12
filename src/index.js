import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import { AppContainer } from 'react-hot-loader'
import Layout from './Layout'
import configureStore from './Store/ConfigureStore';
import { Provider } from 'react-redux'

const _store = configureStore();

ReactDOM.render(
    <Provider store={_store}>
        <AppContainer>
            <Layout/>
        </AppContainer>
    </Provider>,
    document.getElementById('root')
)
  