import axiosContacts from "../../axiosContacts";

export const REQUEST_ERROR = 'REQUEST_ERROR';
export const REQUEST_START = 'REQUEST_START';
export const REQUEST_CONTACTS_SUCCESS = 'REQUEST_CONTACTS_SUCCESS';

export const requestContactsStart = () => ({type : REQUEST_START});
export const requestContactsError = (e) => ({type : REQUEST_ERROR,e});
export const requestContactsSuccess = (contacts) => ({type : REQUEST_CONTACTS_SUCCESS,contacts});


export const addNewContact = (contact) => {
	return async dispatch => {
		try {
			dispatch(requestContactsStart());
			await axiosContacts.post('/contacts.json',contact);
			dispatch(getAllContacts());
		} catch (e) {
			dispatch(requestContactsError(e))
		}
	}
};

export const removeContact = (id) => {
	return async dispatch => {
		try {
			dispatch(requestContactsStart());
			await axiosContacts.delete('/contacts/' + id + '.json');
			dispatch(getAllContacts());
		} catch (e) {
			dispatch(requestContactsError(e));
		}
	}
};

export const editContact = (dish) => {
	return async dispatch => {
		try {
			dispatch(requestContactsStart());
			await axiosContacts.put('/contacts/' + dish.id + '.json',dish);
			dispatch(getAllContacts());
		} catch (e) {
			dispatch(requestContactsError(e));
		}
	}
};


export const getAllContacts = () => {
	return async dispatch => {
		try {
			dispatch(requestContactsStart());
			let response = await axiosContacts.get('/contacts.json');
			dispatch(requestContactsSuccess(response.data));
		} catch (e) {
			dispatch(requestContactsError(e));
		}
	};
};
