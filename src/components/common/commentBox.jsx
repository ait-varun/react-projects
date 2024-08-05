"use client";

import { useState, useRef } from "react";

export default function CommentBox() {
  const inputRef = useRef(null);
  const [comments, setComments] = useState([]);

  const handleAddComment = (text) => {
    setComments([
      ...comments,
      {
        id: self.crypto.randomUUID(),
        comment: text,
      },
    ]);
    inputRef.current.value = "";
  };
  return (
    <>
      <div className="flex flex-row gap-2">
        <textarea
          name="comment"
          id="comment"
          cols="30"
          rows="1"
          placeholder="Enter your comment here..."
          ref={inputRef}></textarea>
        <button
          className="bg-blue-600 text-white px-4 py-2"
          onClick={() => handleAddComment(inputRef.current.value)}>
          Add Comment
        </button>
      </div>
      <div>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id} className="border-2 border-blue-600 p-2 my-2">
              <p className="text-sm">{comment.comment}</p>
              <p>{comment.id}</p>
            </div>
          ))
        ) : (
          <p className="text-sm">No comments yet</p>
        )}
      </div>
    </>
  );
}
