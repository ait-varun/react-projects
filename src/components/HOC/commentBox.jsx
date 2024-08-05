"use client";

import { useState, useRef, useEffect } from "react";
import CommentList from "../common/commentList";

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

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const comments = localStorage.getItem("comments");
      if (comments) {
        setComments(JSON.parse(comments));
      }
    }
  }, []);

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
        <CommentList
          comments={comments}
          handleEditComment={handleEditComment}
          handleDeleteComment={handleDeleteComment}
        />
      </div>
    </>
  );
}