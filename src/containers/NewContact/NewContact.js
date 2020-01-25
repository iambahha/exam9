import React from 'react';
import FormBlock from "../../components/FormBlock/FormBlock";
import {addNewContact} from "../../store/actions/contactsActions";
import {connect} from "react-redux";

const NewContact = (props) => {
	return (
		<div className="mt-3">
			<div className="pb-3">Enter data: </div>
			<FormBlock onSubmitted={props.addNewContact} address={props}/>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addNewContact : (contact) => dispatch(addNewContact(contact)),
});

export default connect(null, mapDispatchToProps)(NewContact);