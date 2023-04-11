import { useState } from "react";

export default function Home() {

  return (
    <div>
      <h1>Level 1</h1>
      <form>
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

        <h2>Question 4</h2>
        <p>What is the median of the numbers 3, 5, 5 and 6?</p>
        <label>
          <input type="radio" name="q2" value="a" />
          a. 2
        </label>
        <br />
        <label>
          <input type="radio" name="q2" value="b" />
          b. 3
        </label>
        <br />
        <label>
          <input type="radio" name="q2" value="c" />
          c. 4
        </label>
        <br />
        <label>
          <input type="radio" name="q2" value="d" />
          d. 5
        </label>
        <br />

        <h2>Question 5</h2>
        <p>The actual weight of an object is 10 kg. If a scale measures its weight as 11 kg, what is the absolute error in the measurement?</p>
        <label>
          <input type="radio" name="q2" value="a" />
          a. 1 kg
        </label>
        <br />
        <label>
          <input type="radio" name="q2" value="b" />
          b. 10 kg 
        </label>
        <br />
        <label>
          <input type="radio" name="q2" value="c" />
          c. 11 kg
        </label>
        <br />
        <label>
          <input type="radio" name="q2" value="d" />
          d. 100 kg
        </label>
        <br />
        <h2>Question 6</h2>
        <p>The actual temperature outside is 25°C. If a thermometer measures the temperature as 27°C, what is the absolute error in the measurement?</p>
        <label>
          <input type="radio" name="q2" value="a" />
          a. 1°C
        </label>
        <br />
        <label>
          <input type="radio" name="q2" value="b" />
          b. 2°C
        </label>
        <br />
        <label>
          <input type="radio" name="q2" value="c" />
          c. 25°C
        </label>
        <br />
        <label>
          <input type="radio" name="q2" value="d" />
          d. 27°C
        </label>
        <br />
        <br></br>
        <input type="submit" value="Submit" />
      </form>
      

    </div>
  )
}