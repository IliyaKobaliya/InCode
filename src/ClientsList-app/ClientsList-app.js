import React, {Component} from 'react';
import './ClientsList_Style.css';
import {Grid} from 'semantic-ui-react'
import {connect} from 'react-redux'

class ClientsList extends Component {
    render() {
        // console.log( 'This',this.props.testStore[0]);
        this.clients = this.props.testStore[0].map((client) => {
            if (client.general.show) {
                return (
                    <Grid.Row key={client.address.zipCode}>
                        <div className={'clients_container'} onClick={() => this.props.onActiveClient(client)}>
                            <div className={'Small_avatar'}>
                                <img src={client.general.avatar} alt="avatar"/></div>
                            <div className={'Personal_info'}>
                                <span
                                    className={'client_name'}>{client.general.firstName} {client.general.lastName}</span>
                                <span className={'job_title'}>{client.job.title}</span>
                            </div>
                        </div>
                    </Grid.Row>
                )
            }
            else {
                // console.log('asdasdsadasdasfasfdsgg');
                return false
            }
        });
        return (
            <section id={'Clients_List'}>
                <Grid reversed='computer vertically'>
                    {this.clients}
                </Grid>
            </section>
        )
    }
}

export default connect(
    state => ({
        testStore: state
    }),
    dispatch => ({
        onActiveClient: (client) => {
            // console.log(client);
            dispatch({type: 'AddActive', payload: client});
        }
    })
)(ClientsList)


