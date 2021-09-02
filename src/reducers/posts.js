// What are reducers?!

// First and Foremost - Reducers are functions!
/* More specifically, a reducer is a function that accepts the STATE and ACTION. 
Based on the action type (in the form of either an 'if-else' or 'switch-case' 
statement), we perform some logic. Pretty simple!

In most cases, a 'switch-case' statement appears less 'modern' - it is no longer
desirable as far as 'pretty' or 'neat' code is concerned. However, for the
current app, I'm going to use it. That doesn't mean that an 'if-else' statement
can't be used! If you download/fork this project, please feel free to change the
implementation! I'll leave a templated code block of each at the bottom :)    */

//import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

// eslint-disable-next-line import/no-anonymous-default-export
export default (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return posts;
        case 'CREATE':
            return posts;
            /* case LIKE:
            return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        case CREATE:
            return [...posts, action.payload];
        case UPDATE:
            return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        case DELETE:
            return posts.filter((post) => post._id !== action.payload); */
        default:
            return posts;
    }
};