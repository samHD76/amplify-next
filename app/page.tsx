"use client";
import React from "react";
import { Home } from "./components/Home";
import { Profile } from "./components/Profile";
import {useSideContext} from "./components/context/side-context";


 const page = ({searchParams}:{
  searchParams:{
    cN: string
  }
 }) => {
  console.log(searchParams.cN);
  //const {componentName,setComponentName}=useSideContext();
  //let  {navDir1}=useSideContext().navDir;
  //navDir1="Profile";
  return (

   <>
   
   {searchParams.cN=="Profile"?
    <Profile/>
   :
    <Home/>
  }
  
   
   </>

  );
};
export default page
