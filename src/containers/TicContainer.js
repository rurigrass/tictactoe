import React from 'react'
import TicBox from '../components/TicBox.js'

class TicContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      noughts: true,
      x: [],
      o: [],
      winner: ""
    };
    this.setLetter = this.setLetter.bind(this);
    this.restarter = this.restarter.bind(this);
    this.checkWinner = this.checkWinner.bind(this);
  }

  setLetter(target) {
    if(!target.className){
      if (this.state.noughts === true) {
        this.setState({noughts: false})
        this.setState({x: this.state.x.concat(target.id)}, console.log("this is setLetter x", this.state.x))
        target.textContent = "X"
        target.className = "played"
      } else {
        this.setState({noughts: true})
        this.setState({o: this.state.o.concat(target.id)}, console.log("this is setLetter o", this.state.o))
        target.textContent = "O"
        target.className = "played"
      }
    }
  }

  checkWinner() {
    console.log("this is from check o", this.state.o);
    console.log("this is from check x", this.state.x);
    if (this.state.winner === "") {
      if(
        (this.state.x.includes("1") &&  this.state.x.includes("2") &&  this.state.x.includes("3")) ||
        (this.state.x.includes("4") &&  this.state.x.includes("5") &&  this.state.x.includes("6")) ||
        (this.state.x.includes("7") &&  this.state.x.includes("8") &&  this.state.x.includes("9")) ||
        (this.state.x.includes("1") &&  this.state.x.includes("4") &&  this.state.x.includes("7")) ||
        (this.state.x.includes("2") &&  this.state.x.includes("5") &&  this.state.x.includes("8")) ||
        (this.state.x.includes("3") &&  this.state.x.includes("6") &&  this.state.x.includes("9")) ||
        (this.state.x.includes("1") &&  this.state.x.includes("5") &&  this.state.x.includes("9")) ||
        (this.state.x.includes("3") &&  this.state.x.includes("5") &&  this.state.x.includes("7"))
      ) {
        this.setState({winner: "X WINS!"})
      } else if (
        (this.state.o.includes("1") &&  this.state.o.includes("2") &&  this.state.o.includes("3")) ||
        (this.state.o.includes("4") &&  this.state.o.includes("5") &&  this.state.o.includes("6")) ||
        (this.state.o.includes("7") &&  this.state.o.includes("8") &&  this.state.o.includes("9")) ||
        (this.state.o.includes("1") &&  this.state.o.includes("4") &&  this.state.o.includes("7")) ||
        (this.state.o.includes("2") &&  this.state.o.includes("5") &&  this.state.o.includes("8")) ||
        (this.state.o.includes("3") &&  this.state.o.includes("6") &&  this.state.o.includes("9")) ||
        (this.state.o.includes("1") &&  this.state.o.includes("5") &&  this.state.o.includes("9")) ||
        (this.state.o.includes("3") &&  this.state.o.includes("5") &&  this.state.o.includes("7"))
      ) {
        this.setState({winner: "O WINS!"})
      }
    }
  }

  restarter(){
    window.location.reload()
  }

  render() {
    this.checkWinner();

    return(
      <div>
        <h1>{this.state.winner}</h1>
        <TicBox checkWinner= {this.checkWinner} setPlayed={this.state.letter} setRestart={this.restarter} setLetter={this.setLetter} />
      </div>
    )
  }
}

export default TicContainer;
