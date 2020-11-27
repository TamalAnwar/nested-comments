import { createStore } from 'redux';

const defaultState = {

    comments : [
        {
          id: 1,
          content: "Hello 1",
          parentId: null
        },
        {
          id: 2,
          content: "Hello 2",
          parentId: 1
        },
        {
          id: 3,
          content: "Hello 3",
          parentId: 1
        },
        {
          id: 4,
          content: "Hello 4",
          parentId: 3
        },
        {
          id: 5,
          content: "Hello 5",
          parentId: 4
        }]
}

function reducer(state, action) {
    let { type, item } = action;
    let comments = [...state.comments]
    if(type === "SUBMIT_COMMENT") {
        comments.push(item);
        console.log(comments);
        return {
            comments
        }
    }
    return state;
}

const store = createStore(reducer, defaultState)

export default store