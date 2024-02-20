"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import logo from "../assets/justlogo.png";
import { useUser } from "@clerk/clerk-react";
import Image from "next/image";

interface CommentSectionProps {
  postId: string;
}

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
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
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
                <Image
                  src={user.user?.imageUrl ?? "../assets/justlogo.png"}
                  width={40}
                  height={40}
                  className=" rounded-full object-cover"
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
