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


  
 
    
export const Profilepage = () => {
    const { user, signOut } = useAuthenticator();
    
    const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);
    const [profiles, setProfiles] = useState<Array<Schema["Profile"]["type"]>>([]);

  function listTodos() {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }

  function listProfile() {
    client.models.Profile.observeQuery().subscribe({
      next: (data) => setProfiles([...data.items]),
    });
  }

  useEffect(() => {
    listTodos();

    listProfile();
//if(profiles.length=0) initProfile();
//console.log("PLength",profiles.length);  
//console.log("TodosLength",todos.length);  
}, []);

  function createTodo() {
    client.models.Todo.create({
      content: window.prompt("Id content"),
    });
  }
  function createProfile() {
    client.models.Profile.create({
      name: window.prompt("Name content"),
    });
  }
  function initProfile() {
    console.log("creating profile");  

    client.models.Profile.create({
      name: "NA",
      tel: "NA",
      address1: "NA",
      address2: "NA",
      city: "NA",
      country:"NA",
    });
  }
  function deleteTodo(id: string) {
    client.models.Todo.delete({ id })
  }
  return (
   
    <main>
     {/* <h1>{user?.username}</h1>
              <h1>{user?.signInDetails?.loginId}</h1>*/}
      <h1>My account</h1>
           
      <button onClick={createTodo}>j2523345myacc</button>
      <button onClick={createProfile}>j2523345myacb</button>
      <ul>
      
      {
      todos.map((todo) => (
        <li 
        onClick={() => deleteTodo(todo.id)}
        key={todo.id}>{todo.content}</li>
      ))}
    </ul>
    <p>Client</p>
     
      <div>
      
      <ul>
      
      {
      profiles.map((profile) => (
        <li 
       
        key={profile.id}>{profile.name}</li>
      ))}
    </ul>
    <p>Client</p>
    <p>Secured hand shake</p>
    <p>{profiles.length}</p>
      <ul></ul> 
       
       
      </div>
    </main>
   
  );
}
