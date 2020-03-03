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
    ],
    uiState: {
        openEditDialog: false,
        personToEdit: {}
    }
};

const PersonsFilter = (state= personsData, action) => {

    switch(action.type) {
        case 'ADD_PERSON':
            return {
                ...state, persons: [...state.persons, action.dataPerson ]
            };
        case 'DELETE_PERSON':
            let person = state.persons.filter(person=> {
                return person.id !== action.id});
            return {...state, persons: person};
        case 'OPEN_EDIT_PERSON':
            console.log(action.data.id + " Edit person");
            return {
                ...state,
                uiState: {
                    ...state.uiState,
                    openEditDialog: true,
                    personToEdit: action.data
                }
            };
        case 'CLOSE_EDIT':
            console.log("edit");
            return {
                ...state,
                uiState: {
                    ...state.uiState,
                    openEditDialog: false,
                    personToEdit: action.data
                }
            };
        case 'UPDATE_PERSON':
            return{
                ...state, persons: state.persons.map(person => {
                    console.log(action.data.id);
                    if(person.id !== action.data.id) {
                        return person;
                    } else {
                        return { ...person, name: action.data.name, age: action.data.age}
                    }
                })
            };
            // return state.persons.map((person) => {
            //     if(person.id === action.dataPerson.id){
            //         return {
            //             ...person,
            //             name: action.dataPerson.name,
            //             age: action.dataPerson.age
            //         }
            //     } else return person;
            // });
        default:
            return state;
    }
};

export default PersonsFilter;