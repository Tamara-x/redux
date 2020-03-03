export const addPerson = (person) => {
    console.log(person);
    return {
        type: "ADD_PERSON",
        data: person
    }
};
export const openForm = (person) => ({
    type: "OPEN_FORM",
    data: person
});

export const closeEdit = (person) => ({
    type: "CLOSE_EDIT",
    data: person
});

export const editPerson = (person) => {
  return {
      type: "UPDATE_PERSON",
      data: person
  }
};

export const openEdit = (person) => {
    return {
        type: "OPEN_EDIT_PERSON",
        data: person
    }
};

export const deletePerson = (person) => {
    return {
        type: "DELETE_PERSON",
        id: person
    }
};