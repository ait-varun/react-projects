"use client";

import { useState, useRef } from "react";

export default function CommentBox() {
  const inputRef = useRef(null);
  const [comments, setComments] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const handleAddComment = () => {
    const text = inputRef.current.value.trim();
    if (text) {
      if (editingId !== null) {
        setComments(
          comments.map((comment) =>
            comment.id === editingId ? { ...comment, comment: text } : comment
          )
        );
        setEditingId(null);
      } else {
        setComments([
          ...comments,
          {
            id: self.crypto.randomUUID(),
            comment: text,
          },
        ]);
      }
      inputRef.current.value = "";
    }
  };

  const handleEditComment = (id) => {
    const commentToEdit = comments.find((comment) => comment.id === id);
    if (commentToEdit) {
      inputRef.current.value = commentToEdit.comment;
      inputRef.current.focus();
      setEditingId(id);
    }
  };

  const handleDeleteComment = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
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
          onClick={handleAddComment}>
          {editingId !== null ? "Update Comment" : "Add Comment"}
        </button>
      </div>
      <div>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div
              className="flex flex-row justify-between gap-2 my-4"
              key={comment.id}>
              <div className="border-2 border-blue-600 p-2 my-2">
                <p className="text-sm max-w-40 min-w-40 overflow-clip">
                  {comment.comment}
                </p>
              </div>
              <div className="flex flex-row gap-2">
                <button
                  className="bg-blue-600 text-white px-4 py-2"
                  onClick={() => handleEditComment(comment.id)}>
                  Edit
                </button>
                <button
                  className="bg-red-600 text-white px-4 py-2"
                  onClick={() => handleDeleteComment(comment.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-sm">No comments yet</p>
        )}
      </div>
    </>
  );
}
