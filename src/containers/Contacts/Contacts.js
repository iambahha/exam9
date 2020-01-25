import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {addNewContact, editContact, getAllContacts, removeContact} from "../../store/actions/contactsActions";
import Modal from './../../components/Modal/Modal'
import FormBlock from "../../components/FormBlock/FormBlock";
import Contact from "../../components/Contact/Contact";
import {NavLink} from "react-router-dom";


const Contacts = (props) => {
	const [open, setOpen] = useState(false);
	const [editWindow, setEditWindow] = useState(null);
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	const addContact = (contact) => {
		props.addNewContact(contact);
		handleClose();
	};
	const closeEditWindow = ()  => {
		setEditWindow(null);
	};
	const openEditModal = (d) => setEditWindow(d);
	const editHandler = (contact) => {
		props.editContact(contact);
		closeEditWindow();
	};
	useEffect(() => {
		props.getAllContacts();
	},[props]);

	return (
		<div>
			<div className="mt-3">
				<span className="mr-5">CONTACTS</span>
				<NavLink to="/new-contact" className="btn-success p-2">NEW CONTACT</NavLink>
			</div>
			<hr/>
			<div>
				{props.contacts.map(d => {
					return <Contact edit={() => openEditModal(d)} remove={() => props.removeContact(d.id)} key={d.id} img={d.img} name={d.name} telephone={d.telephone} email={d.email}/>
				})}
				<Modal show={!!editWindow} close={closeEditWindow}>
					<FormBlock contacts={editWindow} onSubmitted={editHandler} props={props}/>
				</Modal>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	contacts : state.contacts
});
const mapDispatchToProps = (dispatch) => ({
	addNewContact : (contact) => dispatch(addNewContact(contact)),
	getAllContacts : (contacts) => dispatch(getAllContacts(contacts)),
	removeContact : (id) => dispatch(removeContact(id)),
	editContact : (editedContact) => dispatch(editContact(editedContact))
});

export default connect(mapStateToProps,mapDispatchToProps)(Contacts);
