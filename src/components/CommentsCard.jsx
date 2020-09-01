import React from "react";
import Voter from "./Voter";

const CommentsCard = ({ comments }) => {
  // console.log(comments);

  return (
    <section>
      <ul key="commentsList" className="commentsList">
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id} className="indvComment">
              <h5>Comment:</h5>
              <p>{comment.body}</p>
              <p>
                Author: {comment.author} Published: {comment.created_at}
                Votes: {comment.votes}
              </p>
              <Voter
                id={comment.comment_id}
                votes={comment.votes}
                type={"comments"}
              />
              {/* <button> Delete </button>; */}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default CommentsCard;
