import React, {useEffect, useState} from 'react';
import {Button, Form, Input} from "reactstrap";
import {NavLink} from "react-router-dom";

const FormBlock = (props) => {
  const [input, setInput] = useState({name: '', img: '', telephone: '', email: ''});
  const inputChangeHandler = event => setInput({...input, [event.target.name]: event.target.value});
    useEffect(() => {
        if (props.contacts){
            setInput(props.contacts);
        }
    },[props.contacts]);
    const formSubmit = event => {
        event.preventDefault();
        props.onSubmitted(input);
        setInput({name: '', img: '', telephone: '', email: ''});
        props.props.history.push('/');

    };
    return (
        <Form onSubmit={formSubmit} autoComplete="off">
            <Input required className="mb-3" name="name" value={input.name} onChange={inputChangeHandler} placeholder="name" />
            <Input required className="mb-3" type="number" name="telephone" value={input.telephone} onChange={inputChangeHandler}
                       placeholder="phone"/>
            <Input required className="mb-3" type="url" name="img" value={input.img} onChange={inputChangeHandler} placeholder="image"/>
            <Input required type="email" name="email" value={input.email} onChange={inputChangeHandler} placeholder="email"/>
            <Button type="submit" className="mr-5 mt-3" color="primary">Submit</Button>
            <NavLink to="/">Go Back</NavLink>
        </Form>
    );
};

export default FormBlock;
