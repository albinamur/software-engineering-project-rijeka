import { useState } from "react";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../../styles/Home.module.css'


const NUMBER_OF_QUESTIONS = 6;

export default function Home() {
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
    if (answers.q2 === "b") {
      newScore += 1;
    }
    if (answers.q3 === "d") {
      newScore += 1;
    }
    if (answers.q4 === "d") {
      newScore += 1;
    }
    if (answers.q5 === "b") {
      newScore += 1;
    }
    if (answers.q6 === "d") {
      newScore += 1;
    }

    //write score into global variable
    console.log("score "+newScore);
    AsyncStorage.setItem("lvl3score", newScore);  

    //get userid here, how to set?
    let userid = 3;
    let data = {newScore : newScore, userid : userid, level: 2};
    // store the score in the database
    axios.post("/api/levels/score", data).then(() => {
      setScore(newScore);
    });

    window.location.href = "../exam_permission";
  };


  return (
    <div className={styles.container}>
      <h1>Level 3</h1>
      <form onSubmit={handleFormSubmit}>
        <h2>Question 1</h2>
        <p>The arithmetic average of three numbers is 12. If one of the numbers is 18, what is the average of the other two numbers?</p>
        <label>
          <input type="radio" name="q1" value="a" />
          a. 9
        </label>
        <br />
        <label>
          <input type="radio" name="q1" value="b" />
          b. 10
        </label>
        <br />
        <label>
          <input type="radio" name="q1" value="c" />
          c. 11
        </label>
        <br />
        <label>
          <input type="radio" name="q1" value="d" />
          d. 12
        </label>
        <br />

        <h2>Question 2</h2>
        <p>What is the arithmetic average of the numbers 10, 20, 30, 40, 50, 60, 70, 80, 90?</p>
        <label>
          <input type="radio" name="q2" value="a" />
          a. 40
        </label>
        <br />
        <label>
          <input type="radio" name="q2" value="b" />
          b. 50
        </label>
        <br />
        <label>
          <input type="radio" name="q2" value="c" />
          c. 55
        </label>
        <br />
        <label>
          <input type="radio" name="q2" value="d" />
          d. 60
        </label>
        <br />

        <h2>Question 3</h2>
        <p>If the median of a set of numbers is 10, which of the following must be true?</p>        
        <label>
          <input type="radio" name="q3" value="a" />
          a. The largest number is greater than 10.
        </label>
        <br />
        <label>
          <input type="radio" name="q3" value="b" />
          b. The smallest number is less than 10.
        </label>
        <br />
        <label>
          <input type="radio" name="q3" value="c" />
          c. The average of the numbers is 10.
        </label>
        <br />
        <label>
          <input type="radio" name="q3" value="d" />
          d. None of the above.
        </label>
        <br />

        <h2>Question 4</h2>
        <p>.  If the median of 2 numbers is 14 and one of the numbers is 10 what is the second number?</p>
        <label>
          <input type="radio" name="q4" value="a" />
          a. 14
        </label>
        <br />
        <label>
          <input type="radio" name="q4" value="b" />
          b. 15
        </label>
        <br />
        <label>
          <input type="radio" name="q4" value="c" />
          c. 16
        </label>
        <br />
        <label>
          <input type="radio" name="q4" value="d" />
          d. 18
        </label>
        <br />

        <h2>Question 5</h2>
        <p>If sum of a set of number is smaller than the median, which of the following statements must be true?</p>
        <label>
          <input type="radio" name="q5" value="a" />
          a. All numbers are single digits
        </label>
        <br />
        <label>
          <input type="radio" name="q5" value="b" />
          b. Not all numbers are positive
        </label>
        <br />
        <label>
          <input type="radio" name="q5" value="c" />
          c. There are at least 3 numbers in this set
        </label>
        <br />
        <label>
          <input type="radio" name="q5" value="d" />
          d. None of the above
        </label>
        <br />
        <h2>Question 6</h2>
        <p>A student measures the length of a table as 1.3 meters, but the actual length is 1.25 meters. What is the relative error in the measurement?</p>
        <label>
          <input type="radio" name="q6" value="a" />
          a. 1%
        </label>
        <br />
        <label>
          <input type="radio" name="q6" value="b" />
          b. 2%
        </label>
        <br />
        <label>
          <input type="radio" name="q6" value="c" />
          c. 3%
        </label>
        <br />
        <label>
          <input type="radio" name="q6" value="d" />
          d. 4%
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