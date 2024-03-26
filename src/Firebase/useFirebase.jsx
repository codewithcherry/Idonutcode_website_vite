// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// import firebase config from firebase_configfile to  access keys and other details
import {firebaseConfig} from './firebase_config';

//import createuserusingemailandpassword function from firebase/auth 

import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'
import Alert from "../Components/Alert";
import { useState } from "react";
import {sendEmailVerification} from 'firebase/auth'

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth=getAuth(app)


const useFirebase = () => {

    const [alertInfo,setAlertInfo]=useState({type:null,message:null})

    const signupUser =async (email,password)=>{

        await  createUserWithEmailAndPassword(Auth, email , password)
        .then(
            (userCredentials)=>{
                console.log("sign up Successfull")
                console.log(userCredentials.user.emailVerified)
                if (userCredentials.user.emailVerified){
                    setAlertInfo({
                        type:"success",
                        message: "Account created successfully"
                    })
                }
                else{
                    sendEmailVerification(Auth.currentUser)
                    .then(()=>{
                        setAlertInfo({
                            type:"warning",
                            message:"your account is not verified,verification email is sent your email id."
                        })
                    })
                }
                
                console.log(userCredentials.user)
            }
            )
        .catch((err)=>{
            return setAlertInfo({
                type:"error",
                message: err.message
            })
        }  )
    }

    const  loginUser=async(email,password)=>{
        await  signInWithEmailAndPassword(Auth,email,password)
        .then(
            (userCredentials)=>{
                console.log("Login Successfull")
                console.log(userCredentials.user.emailVerified)
                if (userCredentials.user.emailVerified){
                    setAlertInfo({
                        type:"success",
                        message: "Account created successfully"
                    })
                }
                else{
                    setAlertInfo({
                        type:"warning",
                        message:"your account is not verified"
                    })
                }
                console.log(userCredentials.user)
            })
        .catch(error=>{
            return setAlertInfo({
                type:"error",
                message:error.message
            })
        })
    }


  return  {alertInfo,signupUser,loginUser}
}

export default useFirebase
