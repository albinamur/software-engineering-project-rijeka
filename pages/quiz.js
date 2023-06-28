import styles from '../styles/Home.module.css'
import axios from 'axios';
import { useRouter } from "next/router";
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';




function handleStart() {
  window.location.href = "/register";
  AsyncStorage.clear()
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
        <div className={styles.container}></div>
        <container className={styles.container}>
            <div>
                <div>
                <h1 className={styles.title}>
                        Quiz!
                    </h1>
                    {/* <h3><a href="/register">Register here</a></h3> */}
                    {/* <h3><a href="/login">Login</a></h3>
                    <h3><a href="Level/level1"> <button id='Playbutton'>Play!</button></a></h3> */}
                    <br></br>
                    <button className={styles.button} onClick={handleStart}>Start</button>
                    <h3><a href="/highscores">Your scores</a></h3>
                </div>
            </div>
        </container>
        <div></div>

        </>
    )
}