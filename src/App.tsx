import React, { ChangeEvent, Component } from 'react';
import './App.css';

interface BMI{
  suly: number;
  magassag: number;
  bmi: number;
}

class App extends Component<{},BMI>{

  constructor(props: {}){
    super(props);
    this.state={
      suly: 0,
      magassag: 0,
      bmi: 0,
    }
  }

  magassagvaltozas=(e: ChangeEvent /* InputEvent */ )=>{
    let ujMeret=parseInt((e.currentTarget as HTMLInputElement).value);
    this.setState({
      magassag: ujMeret,
    })
  }

  sulyvaltozas=(e: ChangeEvent /* InputEvent */ )=>{
    let ujMeret=parseInt((e.currentTarget as HTMLInputElement).value);
    this.setState({
      suly: ujMeret,
    })
  }

  bmiszamitas=()=>{
    const bmivalue=this.state.suly / (this.state.magassag / 100) ** 2
    this.setState({
      bmi: bmivalue,
    })
  }
  /*bmiif=()=>{
    if(this.state.bmi>1 && this.state.bmi<25){
      return alert("Sovány")
    }else if(this.state.bmi>=25 && this.state.bmi <= 30){
      return alert("Normál")
    }else if(this.state.bmi>30){
      return alert("Túlsúly")
    }else{
      return alert("Csicska geci")
    }
  }*/


  render() {
    return <div>
        <div>
      <p>
        Magasságod cm-ben:
      </p>
      <input type="number" onChange={this.magassagvaltozas}></input>
    </div>
    <div>
        <p>
          Súlyod kg-ban:
        </p>
        <input type="number" onChange={this.sulyvaltozas}></input>
      </div>
      <div>
      <button onClick={this.bmiszamitas}>Számítás</button>
      <p>A BMI értéked: {this.state.bmi.toFixed(2)}</p>
      </div>

    </div>; 
  }
}

export default App;