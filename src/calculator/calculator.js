import React, { Component } from 'react'
class Calculator extends Component {
    constructor(props){
        super(props)
        this.state ={
           a : 0,
           b : 0
        }
         //this.plusHandle = this.plusHandle.bind(this)
    }

        plusHandle = () =>{
            const c = parseInt(this.state.a) + parseInt(this.state.b);   
              console.log(c);
            document.getElementById('emptytext').value = c
        }

        minusHandle = () =>{
          const c = parseInt(this.state.a) - parseInt(this.state.b);   
            console.log(c);
            document.getElementById('emptytext').value = c
      }

          multiplyHandle = () =>{
            const c = parseInt(this.state.a) * parseInt(this.state.b);   
              console.log(c);
              document.getElementById('emptytext').value = c
        }
            
        diviedHandle = () =>{
          const c = parseInt(this.state.a) / parseInt(this.state.b);   
            console.log(c);
            document.getElementById('emptytext').value = c
          }
        resetHandle = () =>{
             this.setState({
               a:"",
               b:""
             })
        }
        
    additionhange = e => {
    if (e.target.name === "firstno") {
      this.setState({a:e.target.value});
    } else  {
      this.setState({b:e.target.value});
    }
  };

    
    
    render() { 
        return (
             <div>
                 <input type = "number" name = "firstno"  value = {this.state.a} onChange ={this.additionhange}/>
                 <input type = "number" name ="secondno" value = {this.state.b} onChange ={this.additionhange}/>
                 <br /><br />
                 <input type = "text" id ="emptytext"/>
                 <br /><br />
                 <button onClick = {this.plusHandle}>Add</button>
                 <button onClick = {this.minusHandle}>Subtract</button>
                 <button onClick = {this.multiplyHandle}>Multiply</button>
                 <button onClick = {this.diviedHandle}>Divied</button>
                 <button onClick = {this.resetHandle}>Reset</button>

                 
            </div> 
            );
    }
}
 
export default Calculator;