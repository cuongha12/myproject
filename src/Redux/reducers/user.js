
const itemUser = JSON.parse(localStorage.getItem('user') || null)
const initState = {
    userId: itemUser,
    userPost: [],
    edit: [],
    userPosts: [],
}
const UserReducer = (state = initState, action) => {
    switch (action.type) {
        case "POST_USER":
            return { ...state, userPost: action.playload }
        case "SAVE_USER":
            localStorage.setItem('user', JSON.stringify(action.playload))
            return { ...state, userId: action.playload }
        case "REMOVE_USER":
            localStorage.setItem('user', JSON.stringify(action.playload))
            return { ...state, userId: action.playload }
        case "EDIT_USER":
            return { ...state, edit: action.playload }
        case "EDIT_USERS":

            return { ...state, userPosts: action.playload }
        default:
            return state;
    }
}

export default UserReducer;