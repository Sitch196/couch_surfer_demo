import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createArticle = mutation({
  args: {
    title: v.string(),
    fullname: v.string(),
    description: v.string(),
    numOfPeople: v.number(),
    daysOfStaying: v.number(),
  },
  handler: async (ctx, args) => {
    const newArticleId = await ctx.db.insert("articles", {
      title: args.title,
      fullname: args.fullname,
      description: args.description,
      numOfPeople: args.numOfPeople,
      daysOfStaying: args.daysOfStaying,
    });
    return newArticleId;
  },
});

export const getArticles = query({
  handler: async (ctx) => {
    const allArticles = await ctx.db.query("articles").collect();
    return allArticles;
  },
});
