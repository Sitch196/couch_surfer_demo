import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  articles: defineTable({
    daysOfStaying: v.float64(),
    description: v.string(),
    fullname: v.string(),
    numOfPeople: v.float64(),
    title: v.string(),
    userId: v.optional(v.string()),
  }),
  users: defineTable({
    name: v.string(),
    tokenIdentifier: v.string(),
  }),
  comments: defineTable({
    comment: v.string(),
    postID: v.string(),
    author: v.string(),
  }),
  feedBacks: defineTable({
    feedback: v.string(),
  }),
});
