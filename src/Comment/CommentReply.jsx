import React, { useEffect, useState, Fragment } from 'react';
import {connect } from 'react-redux';

function CommentReply({parentId, dispatch}) {
    const [isBoxShowing, toggleBox] = useState(false);


    function handleReply(event, dispatch, parentId) {
        event.preventDefault();
        let comment = {
        id: Date.now(),
        postid: "1",
        parentId: parentId,
        userid: "user1",
        content: event.target.content.value,
        createdAt: new Date(), 
        updatedAt: new Date(),
        }

        dispatch({type: 'SUBMIT_COMMENT', item: comment})
        console.log("Posting a reply, ", "comment id", comment.id, "parent id", comment.parentId);

        event.target.reset()
    }

    return <div>
        {
            isBoxShowing ?
            null :
            <a onClick={() => toggleBox(true)}>Reply</a>
        }
        {
            isBoxShowing ?
            <Fragment>
            <form onSubmit={(event) => handleReply(event, dispatch, parentId)}>
                <textarea name="content" id="" cols="30" rows="10"></textarea>
                <br/>
                <button>Reply</button>
            </form>
            <a onClick={() => toggleBox(false)}>Cancel</a>
            </Fragment>
            : null
        }
    </div>
}

export default connect()(CommentReply);