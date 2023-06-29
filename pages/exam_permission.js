import styles from '../styles/Home.module.css'
import { useState } from "react";
import axios from 'axios';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Information() {
  const [resultText, setResultText] = useState();
  const [scoresText, setScoresText] = useState();
  const [displaytext, setDisplaytext] = useState(""); 
  // user ID here
  const id = 3
  useEffect(() => {
    axios.post('/api/getpermission', {id})
    .then((response) => {
      const perm = response.data
      const permission = JSON.stringify(perm)
      console.log(permission)
      if (permission == 1) {
        setDisplaytext("Congratulations! You have achieved the permission for the exam!")
      }
      else if (permission == 0){
        setDisplaytext("Unfortunatly you did not achieve the permission for the exam. If you still have attempts, we advice you to study and try later again.")
      }
      printResult()


    } )
  });

  function printResult(){
    AsyncStorage.getItem("lvl1score").then(lvl1score => {
      AsyncStorage.getItem("lvl2score").then(lvl2score => {
        AsyncStorage.getItem("lvl3score").then(lvl3score => {
          let scores = parseInt(lvl1score)+parseInt(lvl2score)+parseInt(lvl3score)
          console.log(scores)
          if (scores>8){
            setResultText("Congratulations! You have achieved the permission for the exam!")
          } else {
            setResultText("Unfortunatly you did not achieve the permission for the exam. If you still have attempts, we advice you to study and try later again.")
          }
          setScoresText("You got "+scores+" points.")
        });  
      }); 
    }); 
  }
  

    return (
        <>
        <container className={styles.container}>
        <p className={styles.information}>
          Your Result  
        </p>
        <p className={styles.infotext}> 
         Thank you for taking part in the statistic quiz. <br /><br />{scoresText} {resultText}
        </p>
        <p className={styles.infotext}> {displaytext}</p>
        <h3><a href="./quiz">Go back to quiz menu</a></h3>
        </container>
        </>
        )
    }