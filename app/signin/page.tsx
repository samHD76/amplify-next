"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "../../app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import { Authenticator } from '@aws-amplify/ui-react';
import React from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import {Usersetup} from "./Usersetup";
import { footer } from "framer-motion/client";
import MainHeader from "@/app/components/MainHeader";
import MainFooter from "@/app/components/MainFooter";
Amplify.configure(outputs);

const client = generateClient<Schema>();


  
 
    
  
export default function signin() {
 
 

  return (
   <div className="flex-1  mt-32 mb-32">
   <React.StrictMode>
    <Authenticator  >

      <div>
  <Usersetup/>
  </div>
    </Authenticator>
    </React.StrictMode>
</div>
  );
}
