

export const selectPerson = (person) => {
    console.log("you clicked select person:", person.id);
    return {
        type: "SELECT_PERSON",
        payload: person
    }
};

export const editedPerson = (person) => {
    console.log("you clicked edit person:", person.id);
    return {
        type: "EDIT_PERSON",
        payload: person
    }
};

export const addPerson = (person) => {
    console.log("you clicked add person");
    return {
        type: "ADD_PERSON",
        payload: person
    }
};

export const deletePerson = (person) => {
    console.log("you clicked delete:", person.id);
    return {
        type: "DELETE_PERSON",
        id: person
    }
};