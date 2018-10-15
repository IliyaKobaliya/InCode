import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Search_Style.css';


class Search extends Component {
    constructor() {
        super();
        this.name = 'Search'
    }

    giveStore() {
        // console.log('findStore', this.searchInput.value);
        this.props.onClickBTN(this.searchInput.value, this.props.testStore)
    }

    render() {
        return (
            <section id={'Search'}>
                <div id={'search_div'}>
                    <input id={'search_input'} type="text" ref={(input) => {
                        this.searchInput = input
                    }}/>
                    <button id={'search_btn'} onClick={this.giveStore.bind(this)}><i className="fas fa-search big"/></button>
                </div>
            </section>
        )
    }
}

export default connect(
    state => ({
        testStore: state[0],
    }),
    dispatch => ({
        onClickBTN: (text, store) => {
            store.map(ThisClient => (!ThisClient.general.firstName.includes(text) && !ThisClient.general.lastName.includes(text)) ? ThisClient.general.show = false : ThisClient.general.show = true);
            dispatch({type: 'AddList', payload: [store]})
        }
    })
)(Search)




