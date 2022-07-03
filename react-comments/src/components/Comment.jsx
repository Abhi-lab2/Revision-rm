import React from "react";
// import { updateComment } from '../api';
import TextForm from "./Form";

export const Comment = ({
  handleSubmit,
  handleCancel,
  comment,
  updateComment,
  replies,
  activeComment,
  activeReply,
  currentUserId,
}) => {
  // Static
  const isEdit =
    activeComment &&
    activeComment.id === id &&
    activeComment.type === "editing";
  const isReply =
    activeReply && activeReply.id === id && activeReply.type === "replying";
  const canDelete = currentUserId === comment.userId && replies.length === 0;

  // dynamic
  const canEdit = currentUserId === comment.userId;
  const replyId = parentId ? parentId : comment.id;
  const timestamp = new Date(comment.timestamp).toDateString();
  return (
    <div className="containerDiv">
      <div className="icon-div">
        <img src="/user-icon.png" alt="user-icon" />
      </div>
      <div className="text-section">
        <div className="right">
          <div className="author">{comment.author} </div>
          <div> {timestamp} </div>
        </div>
        {!isEdit && <div className="comment-texts">{comment.body} </div>}
        {isEdit && (
          <TextForm
            submitLabel={"update"}
            handleSubmit={(text) => updateComment(text, comment.id)}
            handleCancel={() => {
              setActive(null);
            }}
          />
        )}
        <div className="actions">
          {canReply && (
            <div
              className="comment-action"
              onClick={() =>
                setActiveComment({ id: comment.id, type: "replying" })
              }
            >
              Reply
            </div>
          )}
          {canEdit && (
            <div
              className="comment-action"
              onClick={() =>
                setActiveComment({ id: comment.id, type: "editing" })
              }
            >
              Edit
            </div>
          )}
          {canDelete && (
            <div
              className="comment-action"
              onClick={() => deleteComment(comment.id)}
            >
              Delete
            </div>
          )}
        </div>
        {replies.length > 0 && (
          <div className="replies">
            {replies.map((e) => (
              <Comment
                comment={e}
                key={e.id}
                setActiveComment={setActiveComment}
                activeComment={activeComment}
                updateComment={updateComment}
                deleteComment={deleteComment}
                addComment={addComment}
                parentId={comment.id}
                replies={[]}
                currentUserId={currentUserId}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
