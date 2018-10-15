import React from 'react';
import {render} from 'react-dom';

import {Provider} from 'react-redux';
import {createStore} from 'redux'


import './Style.css'

import Search from './Search-app/Search-app'
import ClientsList from './ClientsList-app/ClientsList-app';
import ClientInfo from './ClientInfo-app/ClientInfo-app';
import findStore from './reducer/redux'


const store = createStore(findStore);


let GetHTML = () => {
    return (
        <Provider store={store}>
            <section id={'Container'}>

                <section id="left_main">
                    <Search/>
                    <ClientsList/>
                </section>
                <section id={'right_main'}>
                    <ClientInfo/>
                </section>
            </section>
        </Provider>
    )
};


render(<GetHTML/>, document.getElementById('root'));

