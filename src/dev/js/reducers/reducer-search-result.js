
import { data } from './DummyData';
const initialState = {
    filteredResults: [], searchResults: []
}
export default function (state = initialState, action) {
    switch (action.type) {
        case "SEARCH_TWITTER":
            let tweets = data.filter(item => item.text.match(action.payload));
            let tweetObj = Object.assign({}, state);
            tweetObj.searchResults = tweets;
            tweetObj.filteredResults = tweets.slice(0, 10);
            tweetObj.currentPageIndex = 10;
            return tweetObj;
        case "LOAD_MORE_TWEETS":
            let newObj = Object.assign({}, state);
            newObj.filteredResults = state.searchResults.concat(state.searchResults.slice(state.currentPageIndex, state.currentPageIndex + 10));
            newObj.currentPageIndex = state.currentPageIndex + 10;
            return newObj;
        default:
            
    }
    return state;
}