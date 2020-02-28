const initPersons = {
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

// export default function() {
//     return [
//         {
//             id: 1,
//             name: "Tamara",
//             age: "23"
//         },
//         {
//             id: 2,
//             name: "Danique",
//             age: "18"
//         }
//     ]
// }

const personReducer = (state = initPersons, action) => {
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
