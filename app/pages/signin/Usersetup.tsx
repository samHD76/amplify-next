"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../../app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import { Authenticator } from '@aws-amplify/ui-react';
import React from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import {useSideContext} from "../../components/context/side-context";

Amplify.configure(outputs);

const client = generateClient<Schema>();


  
 
    
export const Usersetup = () => {
    const {userName,setUserName}=useSideContext();
    const {userId,setUserId}=useSideContext();

    const { user, signOut } = useAuthenticator();
    
    const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  function listTodos() {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }

  useEffect(() => {
    listTodos();
    setUserId(user?.signInDetails?.loginId);
    setUserName(user?.username);
  }, []);

  function createTodo() {
    client.models.Todo.create({
      content: window.prompt("Todo content"),
    });
  }
  
  function deleteTodo(id: string) {
    client.models.Todo.delete({ id })
  }
  return (
   
    <main>
      <h1>{user?.username}</h1>
              <h1>{user?.signInDetails?.loginId}'s todos</h1>
      <h1>My todos</h1>
            <button onClick={signOut}>Sign out</button>
      <button onClick={createTodo}>+ new</button>
      <ul>
      
        {
        todos.map((todo) => (
          <li 
          onClick={() => deleteTodo(todo.id)}
          key={todo.id}>{todo.content}</li>
        ))}
      </ul>
      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/">
          Review next steps of this tutorial.
        </a>
      </div>
    </main>
   
  );
}