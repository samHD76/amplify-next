"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import { Authenticator } from '@aws-amplify/ui-react';
import React from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import {Startpage} from "./Startpage";
Amplify.configure(outputs);

const client = generateClient<Schema>();


  
 
    
  
export default function App() {
 
 

  return (
    <React.StrictMode>
    <Authenticator>
      <div>
  <Startpage/>
  </div>
    </Authenticator>
    </React.StrictMode>
  );
}
