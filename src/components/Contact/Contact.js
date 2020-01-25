import React from 'react';
import {Button, Card, CardBody, CardFooter, CardGroup, CardImg, CardText, CardTitle} from "reactstrap";

const Contact = ({edit, remove, img, name, telephone, email}) => {
	return (
		<CardGroup>
			<Card className="d-flex flex-row" >
				<CardImg
					alt="contact"
					src={img}
					className="col-sm-2"
				/>
				<CardBody>
					<CardTitle className="text-capitalize">
						Name: <b>{name}</b>
					</CardTitle>
					<CardText>
						Phone number: {telephone}
					</CardText>
					<CardFooter>
						Email address: <b>{email}</b>
					</CardFooter>
					<Button onClick={edit} color="primary">
						Edit
					</Button>
					<Button onClick={remove} color="danger">
						Delete
					</Button>
				</CardBody>
			</Card>
		</CardGroup>
	);
};

export default Contact;


// import React from 'react';
// import {Button, Card, CardBody, CardGroup, CardImg, CardTitle} from "reactstrap";
//
// const Contact = ({name,img,remove,edit,telephone}) => {
// 	return (
// 		<CardGroup>
// 			<Card>
// 				<CardImg
// 					alt="contact"
// 					src={img}
// 				/>
// 				<CardBody>
// 					<CardTitle >
// 						{name}
// 					</CardTitle>
// 					<CardTitle >
// 						{telephone}
// 					</CardTitle>
// 					<Button onClick={remove} color="primary">
// 						Delete
// 					</Button>
// 					<Button onClick={edit} color="primary">
// 						Edit
// 					</Button>
// 				</CardBody>
// 			</Card>
// 		</CardGroup>
// 	);
// };
//
// export default Contact;