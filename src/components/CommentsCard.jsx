import React from "react";
import Voter from "./Voter";
import * as api from "../utils/api";
import DeleteWrapper from "./DeleteWrapper";

const CommentsCard = ({ comments, user, removeComment }) => {
  // console.log(comments);

  const handleClickDelete = (comment_id, comment, user) => {
    if (comment.author === user) api.deleteComment(comment_id);
    removeComment(comment);
  };

  return (
    <section>
      <ul key="commentsList" className="commentsList">
        {comments.map((comment) => {
          const { comment_id, votes } = comment;
          console.log(user);
          return (
            <li key={comment.comment_id} className="indvComment">
              <h5>Comment:</h5>
              <p>{comment.body}</p>
              <p>
                Author: {comment.author} Published: {comment.created_at} Votes:{" "}
                {comment.votes}
              </p>
              <>
                {user ? (
                  <Voter id={comment_id} votes={votes} type={"comments"} />
                ) : (
                  <h5>Login to vote!</h5>
                )}
              </>
              <br />
              <DeleteWrapper user={user} commentUser={comment.author}>
                <button
                  onClick={() => handleClickDelete(comment_id, comment, user)}
                >
                  {" "}
                  Delete Comment
                </button>
              </DeleteWrapper>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default CommentsCard;
