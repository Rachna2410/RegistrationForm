const ls = require('local-storage');
const initialState = {user:[]};

function RegistrationReducer(state = initialState,action){
	switch(action.type){
		case 'reg/add':
		return {user:state.user.concat(action.newUser)}
		default:
		return initialState;
	}
}
export default RegistrationReducer;