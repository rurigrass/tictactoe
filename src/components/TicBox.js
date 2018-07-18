import React from 'react'
import TicContainer from '../containers/TicContainer.js'

const TicBox = (props) => {

  function handleClick(event) {
    props.setLetter(event.target)
    // props.checkWinner()
  }

  function handleRestart() {
    props.setRestart()
  }

  return(
    <div className="box">
      <table  onClick={handleClick} className="styled">
        <tbody>
        <tr>
          <td id="1"></td>
          <td id="2"></td>
          <td id="3"></td>
        </tr>
        <tr>
          <td id="4"></td>
          <td id="5"></td>
          <td id="6"></td>
        </tr>
        <tr>
          <td id="7"></td>
          <td id="8"></td>
          <td id="9"></td>
        </tr>
        </tbody>
      </table>
      <button onClick={handleRestart} > Restart</button>
    </div>
  )
}

export default TicBox;
