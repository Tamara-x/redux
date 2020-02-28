export const createPost = (person) => {
    console.log("you clicked");
    return {
        type: "ADD_PERSON",
        payload: person
    }
};

