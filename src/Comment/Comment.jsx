import React from 'react';
import CommentReply from './CommentReply';

function Comment({comment}) {

    const nestedComments = (comment.children || []).map(comment => {
      return <Comment comment={comment} type="child" />;
    });
  
    return (
      <div style={{ "marginLeft": "45px", marginBottom: '10px' }} key={comment.id}>
        {console.log("Rendering a comment", comment.content)}
        <span>{comment.content}</span>
        <CommentReply parentId={comment.id} />
        {/* <a href={comment.author.url}>{comment.author.name}</a> */}
        {nestedComments}
      </div>
    );
    
}

export default Comment;