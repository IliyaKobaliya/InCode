import Clients from '../clients';

const initialState = Clients;
// let Static = Clients[0];    // В поле информации будет первый человек списка(Но я оставил поле пустым)
let Static = {
    "general": {
        "firstName": "",
        "lastName": "",
        "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc41Jg0v9kpaxH_0BoMVnjqgTKU7_PrtQyol0nlznXkflTM6lw",
        "show": true
    },
    "job": {
        "company": "",
        "title": ""
    },
    "contact": {
        "email": "",
        "phone": ""
    },
    "address": {
        "street": "",
        "city": "",
        "zipCode": "",
        "country": ""
    }
};

export default function findStore(state = [initialState, Static], action) {
    if (action.type === 'AddList') {
        // console.log('TtT', action.payload);
        return state = [...action.payload, Static];
    }
    if (action.type === 'AddActive') {
        // console.log('this', [action.payload]);
        return state = [initialState, action.payload];

    }
    return state;
}



