export const searchTwitter = (value) => {
  return {
    type: 'SEARCH_TWITTER',
    payload: value
  }
}

export const loadMoreTweets = () => {
  return {
    type: 'LOAD_MORE_TWEETS'
  }
}
