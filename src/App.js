import React from 'react';
import './App.css';
import Comment from './Comment/Comment';
import {connect} from 'react-redux';

function App({comments}) {
  const rawComments = [
    {
      id: 1,
      content: "Hello 1",
      parentId: null
    },
    {
      id: 2,
      content: "Hello 1",
      parentId: 1
    },
    {
      id: 3,
      content: "Hello 1",
      parentId: 1
    },
    {
      id: 4,
      content: "Hello 1",
      parentId: 3
    },
    {
      id: 5,
      content: "Hello 1",
      parentId: 4
    }]

// This function takes the raw comments and outputs them
function nestComments(commentList) {
    const commentMap = {};
    
    // move all the comments into a map of id => comment
    commentList.forEach(comment => commentMap[comment.id] = comment);
    
    // iterate over the comments again and correctly nest the children
    commentList.forEach(comment => {
        if(comment.parentId !== null) {
        const parent = commentMap[comment.parentId];
        (parent.children = parent.children || []).push(comment);
        }
    });
    
    // filter the list to return a list of correctly nested comments
    return commentList.filter(comment => {
        return comment.parentId === null;
    });
    }

let nestedComments = nestComments(comments);
console.log("Nested comments are counting", comments.length);
// const nestedComments = nestComments(comments);

  return (<div>
            {nestedComments.map(comment => <Comment comment={comment} />)}
         </div>)
         
}

function mapStateToProps(state) {
  return {comments: state.comments};
}

export default connect(mapStateToProps)(App);
