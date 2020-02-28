
const personReducer = (state = persons, action) => {
    switch(action.type) {
        case 'ADD_PERSON':
            return state.concat([action.data]);
        case 'DELETE_PERSON':
            return console.log(state);
        case 'SELECT_PERSON':
            return action.payload;
        default:
            return state;
    }
};

export default personReducer;


// state.filter((person)=>person.id !== person.id)