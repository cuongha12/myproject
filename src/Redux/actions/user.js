export const createUser = (user) => {

    return {
        type: "POST_USER",
        playload: user 
    }
}
export const saveUserToLocalStorage = (user) => {

    return {
        type: "SAVE_USER",
        playload: user 
    }
}
export const RemoveUserToLocalStorage = (user) => {
    return {
        type: "REMOVE_USER",
        playload: user 
    }
}
export const EditUser = (user) => {
    return {
        type: "EDIT_USER",
        playload: user 
    }
}
export const EditUsers = (user) => {
    return {
        type: "EDIT_USERS",
        playload: user 
    }
}