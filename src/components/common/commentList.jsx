export default function CommentList({
  comments,
  handleEditComment,
  handleDeleteComment,
}) {
  return (
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
  );
}
