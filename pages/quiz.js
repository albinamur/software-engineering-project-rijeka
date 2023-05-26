import styles from '../styles/Home.module.css'
import axios from 'axios';
import { useRouter } from "next/router";
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


function handleClick() {
//   AsyncStorage.getItem("email").then(email => {
//     window.location.href = "/register";
// });
//   console.log('Button clicked! Email: ',email);
  window.location.href = "/register";
}


export async function getServerSideProps(context) {
  
    try {
        const res = await fetch("http://localhost:3000/api/attempts");
        const data = await res.json();
        return { props: { data } };
      } catch (err) {
        console.error(err);
        return { props: { error: "Failed to fetch data from API" } };
      }
    
      
    return {
      props: {
        numAttempts: data.num_attempts,
      },
    };
}

export default function Quiz() {

    return (
        <>
        <container className={styles.container}>
            <div>
                <div>
                    <h1>
                        Quiz!
                    </h1>
                    {/* <h3><a href="/register">Register here</a></h3> */}
                    {/* <h3><a href="/login">Login</a></h3>
                    <h3><a href="Level/level1"> <button id='Playbutton'>Play!</button></a></h3> */}
                    <button onClick={handleClick}>Start</button>
                    <h3><a href="/highscores">Your High Scores</a></h3>
                </div>
            </div>
        </container>

        </>
    )
}