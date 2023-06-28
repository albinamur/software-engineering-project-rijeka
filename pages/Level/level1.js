import { useEffect, useState } from "react";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../../styles/Home.module.css'

const NUMBER_OF_QUESTIONS = 6;

export default function Quiz() {
  const [score, setScore] = useState(0);
  const [result, setResult] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // get the user's answers
    const formData = new FormData(event.target);
    const answers = {};
    for (let [name, value] of formData.entries()) {
      answers[name] = value;
    }

    //check whetther all questions are answered
    if (Array.from(formData.entries()).length != NUMBER_OF_QUESTIONS) {
      alert("Please answer all questions before submitting.");
      return;
    }

    // calculate the score
    let newScore = 0;
    if (answers.q1 === "a") {
      newScore += 1;
    }
    if (answers.q2 === "c") {
      newScore += 1;
    }
    if (answers.q3 === "b") {
      newScore += 1;
    }
    if (answers.q4 === "d") {
      newScore += 1;
    }
    if (answers.q5 === "a") {
      newScore += 1;
    }
    if (answers.q6 === "b") {
      newScore += 1;
    }


    setResult["You reached " + score + " points."]
    
    //write score into global variable
    console.log("score "+newScore);
    AsyncStorage.setItem("lvl1score", newScore);  
    
    //get userid here, how to set?
    let userid = 3;
    let data = {newScore : newScore, userid : userid, level: 1};
    // store the score in the database
    axios.post("/api/levels/score", data).then(() => {
      setScore(newScore);
    });

    window.location.href = "/Level/level2";
  };

    // generate title with user name
    useEffect(() => {
      AsyncStorage.getItem("fullName").then(fullName => {
        const element = document.getElementById("title");
        if (element) {
          element.textContent = "Level 1 "+fullName;
        }
      });  
    }, []);
  
  return (
    <div className={styles.container}>
      <h1 id="title">Level 1</h1>
      <form onSubmit={handleFormSubmit}>
        <h2>Question 1</h2>
        <p>What is the arithmetic average of the numbers 2 and 8?</p>
        <label>
          <input type="radio" name="q1" value="a" />
          a. 5
        </label>
        <br />
        <label>
          <input type="radio" name="q1" value="b" />
          b. 6
        </label>
        <br />
        <label>
          <input type="radio" name="q1" value="c" />
          c. 7
        </label>
        <br />
        <label>
          <input type="radio" name="q1" value="d" />
          d. 8
        </label>
        <br />

        <h2>Question 2</h2>
        <p>The arithmetic average of two numbers is 2. If one of the numbers is 1, what is the second number?</p>
        <label>
          <input type="radio" name="q2" value="a" />
          a. 1
        </label>
        <br />
        <label>
          <input type="radio" name="q2" value="b" />
          b. 2
        </label>
        <br />
        <label>
          <input type="radio" name="q2" value="c" />
          c. 3
        </label>
        <br />
        <label>
          <input type="radio" name="q2" value="d" />
          d. 4
        </label>
        <br />

        <h2>Question 3</h2>
        <p>What is the median of the numbers 1, 2 and 6?</p>        
        <label>
          <input type="radio" name="q3" value="a" />
          a. 1
        </label>
        <br />
        <label>
          <input type="radio" name="q3" value="b" />
          b. 2
        </label>
        <br />
        <label>
          <input type="radio" name="q3" value="c" />
          c. 3
        </label>
        <br />
        <label>
          <input type="radio" name="q3" value="d" />
          d. 4
        </label>
        <br />

        <h2>Question 4</h2>
        <p>What is the median of the numbers 3, 5, 5 and 6?</p>
        <label>
          <input type="radio" name="q4" value="a" />
          a. 2
        </label>
        <br />
        <label>
          <input type="radio" name="q4" value="b" />
          b. 3
        </label>
        <br />
        <label>
          <input type="radio" name="q4" value="c" />
          c. 4
        </label>
        <br />
        <label>
          <input type="radio" name="q4" value="d" />
          d. 5
        </label>
        <br />

        <h2>Question 5</h2>
        <p>The actual weight of an object is 10 kg. If a scale measures its weight as 11 kg, what is the absolute error in the measurement?</p>
        <label>
          <input type="radio" name="q5" value="a" />
          a. 1 kg
        </label>
        <br />
        <label>
          <input type="radio" name="q5" value="b" />
          b. 10 kg 
        </label>
        <br />
        <label>
          <input type="radio" name="q5" value="c" />
          c. 11 kg
        </label>
        <br />
        <label>
          <input type="radio" name="q5" value="d" />
          d. 100 kg
        </label>
        <br />
        <h2>Question 6</h2>
        <p>The actual temperature outside is 25°C. If a thermometer measures the temperature as 27°C, what is the absolute error in the measurement?</p>
        <label>
          <input type="radio" name="q6" value="a" />
          a. 1°C
        </label>
        <br />
        <label>
          <input type="radio" name="q6" value="b" />
          b. 2°C
        </label>
        <br />
        <label>
          <input type="radio" name="q6" value="c" />
          c. 25°C
        </label>
        <br />
        <label>
          <input type="radio" name="q6" value="d" />
          d. 27°C
        </label>
        <br />
        <br></br>

       

        <input className={styles.button} type="submit" value="Submit" />
        <p> {result} </p>
        <br></br>

      </form>
      

    </div>
  )
}