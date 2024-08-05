"use client";

import { useState, useRef, useEffect } from "react";
import CommentList from "../common/commentList";

export default function CommentBox() {
  const inputRef = useRef(null);
  const [comments, setComments] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedComments = localStorage.getItem("commentsData");
      if (storedComments) {
        setComments(JSON.parse(storedComments));
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("commentsData", JSON.stringify(comments));
  }, [comments]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAddComment = () => {
    const text = inputText.trim();
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
      setInputText("");
      inputRef.current.value = "";
    }
  };

  const handleEditComment = (id) => {
    const commentToEdit = comments.find((comment) => comment.id === id);
    if (commentToEdit) {
      setInputText(commentToEdit.comment);
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
          className="focus:outline-none focus:ring-2 focus:ring-blue-600"
          name="comment"
          id="comment"
          cols="30"
          rows="1"
          placeholder="Enter your comment here..."
          ref={inputRef}
          value={inputText}
          onChange={handleInputChange}></textarea>
        <button
          className={`text-white px-4 py-2 ${
            inputText.trim()
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          onClick={handleAddComment}
          disabled={!inputText.trim()}>
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
