const initState = {
    itemSearch: [],
    item: '',
}
const SearchReducer = (state = initState, action) => {
    switch (action.type) {
        case "SEARCH_ITEM":
            const filterSearch = action.playload.array.filter(e => {
                return e.title.toLowerCase().includes(action.playload.value.toLowerCase())
            })
            return {
                ...state,
                itemSearch: filterSearch,
                item: action.playload.value
            }
        default:
            return state;
    }
}

export default SearchReducer;