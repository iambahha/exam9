import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {addNewContact, editContact, getAllContacts, removeContact} from "../../store/actions/contactsActions";
import {Button} from "reactstrap";
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
	const addContact = (dish) => {
		props.addNewContact(dish);
		handleClose();
	};
	const closeEditWindow = ()  => {
		setEditWindow(null);
	};
	const openEditModal = (d) => setEditWindow(d);
	const editHandler = (dish) => {
		props.editContact(dish);
		closeEditWindow();
	};
	useEffect(() => {
		props.getAllContacts();
	},[props]);

	return (
		<div>
			<div >
				<span>CONTACTS</span>
				<NavLink to="/new-contact">Add Contacts</NavLink>
			</div>
			<Modal show={open} close={handleClose}>
				<FormBlock onSubmitted={addContact}/>
			</Modal>
			<hr/>
			<div>
				{props.contacts.map(d => {
					return <Contact edit={() => openEditModal(d)} remove={() => props.removeContact(id)} key={id} img={img} name={title} price={price}/>
				})}
				<Modal show={!!editWindow} close={closeEditWindow}>
					<FormBlock dishes={editWindow} onSubmitted={editHandler}/>
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
