"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { useUser } from "@clerk/clerk-react";

interface CommentSectionProps {
  postId: string;
}

// ... (previous imports)

const CommentSection: React.FC<CommentSectionProps> = ({ postId }) => {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState("");
  const user = useUser();

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments((prevComments) => [...prevComments, newComment]);
      setNewComment("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Check if the pressed key is Enter and not Shift
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Prevents adding a new line
      handleAddComment();
    }
  };

  return (
    <div className="mt-4">
      <div className="max-h-48 overflow-y-auto">
        <h3 className="text-xl font-bold mb-2">Comments</h3>
        <div>
          {comments.map((comment, index) => (
            <div key={index} className="mb-2">
              <div className="flex items-center gap-4">
                <img
                  src={user.user?.imageUrl}
                  className="w-12 h-12 rounded-full object-cover"
                  alt="user_image"
                />
                <div className="flex flex-col">
                  <p className="font-bold">{user.user?.fullName}</p>
                  <p className="text-sm">{comment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <textarea
          id="comment-textarea"
          className="w-full p-2 border outline-none resize-none rounded"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button
          className="text-white mt-2"
          variant="outline"
          onClick={handleAddComment}
        >
          Add Comment
        </Button>
      </div>
    </div>
  );
};

export default CommentSection;
