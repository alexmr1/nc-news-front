import React from "react";

const CommentsCard = ({ comments }) => {
  console.log(comments);
  return (
    <section>
      <ul key="commentsList" className="commentsList">
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id} className="indvComment">
              <h5>Comment:</h5>
              <p>{comment.body}</p>
              <p>
                Author: {comment.author} Published: {comment.created_at} Votes:{" "}
                {comment.votes}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default CommentsCard;
