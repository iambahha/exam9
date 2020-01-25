import axios from 'axios';

const axiosContacts = axios.create({
	baseURL: 'https://my-react-apps-6805c.firebaseio.com/'
});


export default axiosContacts;
