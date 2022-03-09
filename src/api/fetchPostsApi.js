import axios from 'axios';

export default axios.create({
	baseURL: 'https://alluring-rose-flag.glitch.me/',
	responseType: 'json'
});
