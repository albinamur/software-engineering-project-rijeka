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

    return (
        <>
        <container className={styles.container}>
        <p className={styles.information}>
          Your High Scores  
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
        </container>
        </>
        )
    }