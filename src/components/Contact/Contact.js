import React from 'react';
import {Button, Card, CardBody, CardGroup, CardImg, CardTitle} from "reactstrap";

const Contact = ({name,img,remove,edit,telephone}) => {
	return (
		<CardGroup>
			<Card>
				<CardImg
					alt="contact"
					src={img}
				/>
				<CardBody>
					<CardTitle gutterBottom variant="h6" component="h2">
						{name}
					</CardTitle>
					<CardTitle gutterBottom variant="h6" component="p">
						{telephone}
					</CardTitle>
					<Button onClick={remove} size="small" color="primary">
						Delete
					</Button>
					<Button onClick={edit} size="small" color="primary">
						Edit
					</Button>
				</CardBody>
			</Card>
		</CardGroup>
	);
};

export default Contact;