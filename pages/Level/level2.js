import { useState } from "react";

export default function Home() {

  return (
    <div>
      <h1>Level 2</h1>
      <form>
        <h2>Question 1</h2>
        <p>What is the arithmetic average of the numbers 17, 19 and 24??</p>
        <label>
          <input type="radio" name="q1" value="a" />
          a. 17
        </label>
        <br />
        <label>
          <input type="radio" name="q1" value="b" />
          b. 19
        </label>
        <br />
        <label>
          <input type="radio" name="q1" value="c" />
          c. 20
        </label>
        <br />
        <label>
          <input type="radio" name="q1" value="d" />
          d. 22
        </label>
        <br />

        <h2>Question 2</h2>
        <p>What is the arithmetic average of the numbers 2, 4, 6, 8, and 10?</p>
        <label>
          <input type="radio" name="q2" value="a" />
          a. 2
        </label>
        <br />
        <label>
          <input type="radio" name="q2" value="b" />
          b. 4
        </label>
        <br />
        <label>
          <input type="radio" name="q2" value="c" />
          c. 5
        </label>
        <br />
        <label>
          <input type="radio" name="q2" value="d" />
          d. 6
        </label>
        <br />

        <h2>Question 3</h2>
        <p>What is the median of the numbers 6, 8 and 20?</p>        
        <label>
          <input type="radio" name="q2" value="a" />
          a. 8
        </label>
        <br />
        <label>
          <input type="radio" name="q2" value="b" />
          b. 9
        </label>
        <br />
        <label>
          <input type="radio" name="q2" value="c" />
          c. 10
        </label>
        <br />
        <label>
          <input type="radio" name="q2" value="d" />
          d. 17
        </label>
        <br />

        <h2>Question 4</h2>
        <p>What is the median of the numbers 10, 11, 13 and 14?</p>
        <label>
          <input type="radio" name="q2" value="a" />
          a. 10
        </label>
        <br />
        <label>
          <input type="radio" name="q2" value="b" />
          b. 11
        </label>
        <br />
        <label>
          <input type="radio" name="q2" value="c" />
          c. 12
        </label>
        <br />
        <label>
          <input type="radio" name="q2" value="d" />
          d. 13
        </label>
        <br />

        <h2>Question 5</h2>
        <p>The actual length of a rope is 10 meters. If a measuring tape measures its length as 9 meters, what is the relative error in the measurement?</p>
        <label>
          <input type="radio" name="q2" value="a" />
          a. 1%
        </label>
        <br />
        <label>
          <input type="radio" name="q2" value="b" />
          b. 9%
        </label>
        <br />
        <label>
          <input type="radio" name="q2" value="c" />
          c. 10%
        </label>
        <br />
        <label>
          <input type="radio" name="q2" value="d" />
          d. 15%
        </label>
        <br />
        <h2>Question 6</h2>
        <p>A bakery sells cupcakes in boxes of 12 and 24. The price for a box of 12 cupcakes is $10, and the price for a box of 24 cupcakes is $19. If a customer buys 1 box of 12 cupcakes and 2 boxes of 24 cupcakes, what is the weighted average price per cupcake?</p>
        <label>
          <input type="radio" name="q2" value="a" />
          a. $0.8
        </label>
        <br />
        <label>
          <input type="radio" name="q2" value="b" />
          b. $0.9
        </label>
        <br />
        <label>
          <input type="radio" name="q2" value="c" />
          c. $1
        </label>
        <br />
        <label>
          <input type="radio" name="q2" value="d" />
          d. $1.2
        </label>
        <br />
        <br></br>
        <input type="submit" value="Submit" />
      </form>
      

    </div>
  )
}