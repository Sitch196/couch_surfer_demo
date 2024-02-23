import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createComments = mutation({
  args: {
    comment: v.string(),
    postID: v.string(),
    author: v.string(),
  },
  handler: async (ctx, args) => {
    const newComment = await ctx.db.insert("comments", {
      comment: args.comment,
      postID: args.postID,
      author: args.author,
    });
    return newComment;
  },
});
export const getComments = query({
  handler: async (ctx) => {
    const relatedComments = await ctx.db.query("comments").collect();
    return relatedComments;
  },
});
