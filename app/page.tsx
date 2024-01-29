"use client";
import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const createTodo = useMutation(api.todos.createTodo);
  const todos = useQuery(api.todos.getTodos);

  return (
    <main className="flex min-h-screen flex-col items-center pt-4">
      <input
        type="text"
        value={text}
        className="text-black indent-1 h-[40px]"
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          createTodo({
            text,
          });
          setText("");
        }}
      >
        Create
      </button>
      {todos?.map((todo) => {
        return (
          <ul className="text-white " key={todo._id}>
            <div className="flex gap-4">
              <li>{todo.text}</li>
            </div>
          </ul>
        );
      })}
    </main>
  );
}
