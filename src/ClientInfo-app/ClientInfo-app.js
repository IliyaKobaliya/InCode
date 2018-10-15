import React, {Component} from 'react';
import {connect} from "react-redux";
import './ClientInfo_Style.css'

class ClientsInfo extends Component {
    render() {
         // console.log('ThisStore',this.props.testStore);
        this.personInfo = {
            avatar: `${this.props.testStore.general.avatar}`,
            name: `${this.props.testStore.general.firstName} ${this.props.testStore.general.lastName}`,
            job: `${this.props.testStore.job.title} ( ${this.props.testStore.job.company} )`,
            address: {
                street: `${this.props.testStore.address.street}`,
                city: `${this.props.testStore.address.city}`,
                zipCode: `${this.props.testStore.address.zipCode}`,
                country: `${this.props.testStore.address.country}`
            },
            contact: {
                email: `${this.props.testStore.contact.email}`,
                phone: `${this.props.testStore.contact.phone}`
            }
        };
        return (
            <section id={'Clients_Info'}>
                 <div id={'Client_avatar_img'}>
                     <img src={this.personInfo.avatar} alt="Avatar"/>
                 </div>
                 <div id={'Client_text'}>
                     <div id={'personalInfo'}>
                         <h1>{this.personInfo.name}</h1>
                         <div className={'info_container'}><b>Job :</b>
                             <div className={'Info_list'}>
                                 <span className={'infoItem'}>{this.personInfo.job}</span>
                             </div>
                         </div>
                     </div>
                     <div id={'otherInfo'}>
                         <div className={'info_container'}><b>Address :</b>
                             <div className={'Info_list list_df'}>
                                 <span className={'infoItem'}>1) Street: {this.personInfo.address.street}</span>
                                 <span className={'infoItem'}>2) City: {this.personInfo.address.city}</span>
                                 <span className={'infoItem'}>3) Zip code: {this.personInfo.address.zipCode}</span>
                                 <span className={'infoItem'}>4) Country: {this.personInfo.address.country}</span>
                             </div>
                             <div className={'info_container'}><b>Contacts :</b>
                                <div className={'Info_list list_df'}>
                                    <span className={'infoItem'}>1) Email: {this.personInfo.contact.email}</span>
                                    <span className={'infoItem'}>2) Phone: {this.personInfo.contact.phone}</span>
                                </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </section>
        )
    }
}
export default connect(
    state => ({
        testStore: state[1]
    })
)(ClientsInfo)