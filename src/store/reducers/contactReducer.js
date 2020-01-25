import {REQUEST_CONTACTS_SUCCESS, REQUEST_ERROR, REQUEST_START} from "../actions/contactsActions";


const initialState = {
	contacts: [],
	loading: false,
};

const contactsReducer = (state = initialState, action) => {
	switch (action.type) {
		case REQUEST_START :
			return {...state, loading: true};
		case REQUEST_CONTACTS_SUCCESS :
			if (action.contacts){
				const contacts = Object.keys(action.contacts).map(d => ({...action.contacts[d], id : d}));
				return {...state, loading: false, contacts};
			}
			return {...state, contacts: initialState.contacts};
		case REQUEST_ERROR :
			return {...state, loading: false};
		default :
			return state;
	}
};
export default contactsReducer;
