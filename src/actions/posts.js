// This is where we make use of the 'index.js' file in the 'api' directory.

// The '*' means that we import everything from the 'api' dir. as the variable 'api'.
import * as api from '../api'

// Now, we specify and create what are called 'action creators'.
// Action Creators are functions that return actions.
// That action is just a type that has a 'type' and a 'payload'.

// The Action Creators:
export const getPosts = () => async(dispatch) => {
    try {
        const { data } = await api.fetchPosts();

        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}