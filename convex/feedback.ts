import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createFeedback = mutation({
  args: {
    feedback: v.string(),
  },
  handler: async (ctx, args) => {
    const newFeedback = await ctx.db.insert("feedBacks", {
      feedback: args.feedback,
    });
    return newFeedback;
  },
});
