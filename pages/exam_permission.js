import styles from '../styles/Home.module.css'
import { useState } from "react";
import axios from 'axios';
import { useEffect } from 'react';

export default function Information() {
  
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


    } )
  });

    return (
        <>
        <container className={styles.container}>
        <p className={styles.information}>
          Your Result  
        </p>
        <p className={styles.infotext}> 
         Thank you for taking part in the statistic quiz.
        </p>
        <p className={styles.infotext}> {displaytext}</p>
        </container>
        </>
        )
    }