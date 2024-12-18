"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import { Authenticator } from '@aws-amplify/ui-react';
import React from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';
Amplify.configure(outputs);

const client = generateClient<Schema>();


  
 
    
export const Profile = () => {
    const { user, signOut } = useAuthenticator();
    
    const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);
    const [Profile, setProfile] = useState<Array<Schema["Profile"]["type"]>>([]);

  function listTodos() {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }

  function listProfile() {
    client.models.Profile.observeQuery().subscribe({
      next: (data) => setProfile([...data.items]),
    });
  }

  useEffect(() => {
    listTodos();
    listProfile();
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
              <h1>{user?.signInDetails?.loginId}</h1>
      <h1>My account</h1>
           
      <button onClick={createTodo}>j2523345myacc</button>
      <ul>
      
        {
        todos.map((todo) => (
          <li 
          onClick={() => deleteTodo(todo.id)}
          key={todo.id}>{todo.content}</li>
        ))}
      </ul>
      <div>
        
       
       
      </div>
    </main>
   
  );
}
