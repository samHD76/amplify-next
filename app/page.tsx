"use client";
import React from "react";
import { Home } from "./components/Home";
import { Profilepage } from "./components/Profilepage";
import {useSideContext} from "./components/context/side-context";
import { signOut } from "aws-amplify/auth";
import { useRouter } from 'next/navigation';


 const page = ({searchParams}:{
  
  searchParams:{
    cN: string
  }
 }) => {
  const {userName,setUserName}=useSideContext();
  const {userId,setUserId}=useSideContext();
  const {setSigned}=useSideContext();
  const {setProfMenue}=useSideContext();
  //console.log(searchParams.cN);
  //const {componentName,setComponentName}=useSideContext();
  //let  {navDir1}=useSideContext().navDir;
  //navDir1="Profile";
  if(searchParams.cN=="logout") {
 
    setSigned(false);
    setProfMenue((prev)=> !prev);
    setUserId("");
    setUserName("");
    signOut();
   //  console.log("side",side);
   const { push } = useRouter();
   push("/");

   };
  return (

   <>
  
   {searchParams.cN=="Profile"?
    <Profilepage/>
   :
    <Home/>
  }
  
   
   </>

  );
};
export default page
