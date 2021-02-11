import {getCitation} from "../api/citationAPI";

const GET_RANDOM_QUOTE = 'GET_RANDOM_QUOTE';
const SET_RANDOM_QUOTE = 'SET_RANDOM_QUOTE';

let initialQuote = {
  citation: "The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.",
  author: 'Ada Lovelace'
}

const quoteReducer = (store = initialQuote, action) => {
  switch(action.type) {
    case SET_RANDOM_QUOTE: {
      return {
        ...store,
        citation: action.payload.citation,
        author: action.payload.author
      }
    }
    case GET_RANDOM_QUOTE: {
      return store
    }
    default: {
      return store
    }
  }

}


export const setRandomQuoteAction = (citation, author) => {
  return {
    type: 'SET_RANDOM_QUOTE',
    payload: {citation, author}
  }
}

export const getRandomQuoteThunk = () => {
  return async (dispatch) => {
    let quote = await getCitation()
    dispatch(setRandomQuoteAction(quote.content, quote.author))
  }
}

export default quoteReducer;