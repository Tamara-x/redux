const personsData = {
    persons: [
        {
            id: 1,
            name: "Tamara",
            age: "23"
        },
        {
            id: 2,
            name: "Danique",
            age: "18"
        }
    ]
};


const PersonsFilter = (state= personsData, action) => {
    switch(action.type) {
        case 'ADD_PERSON':
            return state.concat([action.data]);
        case 'DELETE_PERSON':
            let person = state.persons.filter(person=> {
                return person.id !== action.id});
            return {...state, persons: person};

        case 'SELECT_PERSON':
            return console.log("hee");
        default:
            return state;
    }
};

export default PersonsFilter;