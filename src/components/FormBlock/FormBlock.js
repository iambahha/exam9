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
        props.address.history.push('/');

    };
    return (
        <Form onSubmit={formSubmit} autoComplete="off">
            <Input required className="mb-3" name="name" value={input.name} onChange={inputChangeHandler} placeholder="Name" />
            <Input required className="mb-3" type="number" name="telephone" value={input.telephone} onChange={inputChangeHandler}
                       placeholder="Phone"/>
            <Input required className="mb-3" type="url" name="img" value={input.img} onChange={inputChangeHandler} placeholder="Image"/>
            <Input required type="email" name="email" value={input.email} onChange={inputChangeHandler} placeholder="E-mail"/>
            <img src={input.img}  width="150" height="auto" alt="" className="mt-3 mb-3" style={{borderRadius: '50%'}}/>
          <br/>
          <div >
            <Button  type="submit" className="mr-5 mt-0" color="primary">Submit</Button>
            <NavLink to="/" style={{ backgroundColor: 'aquamarine', borderRadius: '5px', padding: '9px 10px 11px'}}>Go Back</NavLink>
          </div>
        </Form>
    );
};

export default FormBlock;
