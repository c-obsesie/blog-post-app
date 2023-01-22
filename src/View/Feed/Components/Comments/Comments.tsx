import React from "react";
import "./Comments.css";

type Props = {
  comment: {
    id: number;
    email: string;
    name: string;
    body: string;
  }
};

export default function Comments({ comment }: Props) {
  return (
    <div className="comment">
      <div key={comment.id}>
        <h5>Email: {comment.email}</h5>
        <h6>Name: {comment.name}</h6>
        <p>{comment.body}</p>
      </div>
    </div>
  );
}
