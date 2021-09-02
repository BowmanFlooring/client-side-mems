// making API calls
import axios from 'axios';

// URL pointing to our backend route
//* NOTE: this URL simply returns ALL POSTS that we currently
//*        have stored within our database!
const url = 'http://localhost:5000/posts';

// Arrow function that makes a 'get' call to our URL
export const fetchPosts = () => axios.get(url);