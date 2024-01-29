import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createTodo=mutation({
    args:{
        text:v.string()
    }
,
    handler:async (ctx,args)=>{
        await ctx.db.insert("todos",{
            text:args.text
        })

        return 'entry created succesfully'
    }

    
})

export const getTodos =query({
    handler:async(ctx)=>{
       return ctx.db.query("todos").collect()
    }
}) 



export const getTodo = query({
  args: { todoId: v.id("todos") },
  handler: async (ctx, args) => {
    const task = await ctx.db.get(args.todoId);
    return task
  },
});