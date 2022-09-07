
const itemUser = JSON.parse(localStorage.getItem('user') || null)
const initState = {
    userId: itemUser,
    userPost: []
}
const UserReducer = (state = initState, action) => {
    switch (action.type) {
        case "POST_USER":
            return { ...state, userPost: action.playload }
        case "SAVE_USER":
            localStorage.setItem('user', JSON.stringify(action.playload))
            return { ...state, userId: action.playload }
        case "REMOVE_USER":
            console.log(action.playload);
            localStorage.setItem('user', JSON.stringify(action.playload))
            return { ...state, userId: action.playload }
        default:
            return state;
    }
}

export default UserReducer;