import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Information() {
  const [l1, setl1] = useState();
  const [l2, setl2] = useState();
  const [l3, setl3] = useState();

  // user ID here
  const id = 3
  useEffect(() => {
    axios.post('/api/gethighscores', {id})
    .then((response) => {
      // const results = response.data
      // const result = JSON.stringify(results)
      // setl1(result.level1);
      // setl2(result.level2);
      // setl3(result.level3);

      
      AsyncStorage.getItem("lvl1score").then(lvl1score => {
        setl1(lvl1score);
      }); 
      AsyncStorage.getItem("lvl2score").then(lvl2score => {
        setl2(lvl2score);
      }); 
      AsyncStorage.getItem("lvl3score").then(lvl3score => {
        setl3(lvl3score);
      });  
    } )
  });

  //generate user data display
  useEffect(() => {
    AsyncStorage.getItem("fullName").then(fullName => {
      const element = document.getElementById("name");
      element.textContent = "Name: " + fullName;
    });  
    AsyncStorage.getItem("email").then(email => {
      const element = document.getElementById("email");
      element.textContent = "Email: " + email;
    });  
    AsyncStorage.getItem("university").then(university => {
      const element = document.getElementById("uni");
      element.textContent = "University: " + university;
    });  
    AsyncStorage.getItem("studyProgram").then(studyProgram => {
      const element = document.getElementById("study");
      element.textContent = "Study Program: " + studyProgram;
    });  
  }, []);

  function handlePDF() {
    alert("Feature not supported yet.");
  }

    return (
        <>
        <div className={styles.container}>
        <p className={styles.information}>
          Your Scores  
        </p>
        <p className={styles.infotext}> 
        These are your results for level 1: {l1}
        </p>
        <p className={styles.infotext}> 
        These are your results for level 2: {l2}
        </p>
        <p className={styles.infotext}> 
        These are your results for level 3: {l3}
        </p>
        <p id="name"></p>
        <p id="email"></p>
        <p id="uni"></p>
        <p id="study"></p>
        <center><button onClick={handlePDF}>Generate PDF</button></center>
        </div>
        </>
        )
    }