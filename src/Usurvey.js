import React, { Component } from 'react'
var firebase = require('firebase');
var uuid = require('uuid');

var config = {
  apiKey: "AIzaSyBoxJbIpB9h9emvpDR95RTpIKISqmfjPBQ",
  authDomain: "uservey-75e47.firebaseapp.com",
  databaseURL: "https://uservey-75e47.firebaseio.com",
  projectId: "uservey-75e47",
  storageBucket: "uservey-75e47.appspot.com",
  messagingSenderId: "896643048986"
};
firebase.initializeApp(config);

 class Usurvey extends Component {

  nameSubmit(event){
    var studentName = this.refs.name.value;
    this.setState({studentName: studentName}, function(){
      console.log(this.state);
    });
  }

  answerSelected(){
    // todo: work on this
  }

  questionSubmit(){
    //  todo: work on this too
  }

   constructor(prop) {
     super(prop);
     
     this.state= {
       uid: uuid.v1(),
       studentName: 'killerMan',
       answers: {
         answer1: '',
         answer2: '',
         answer3: ''
       },
       isSubmitted: false
     };
     this.nameSubmit = this.nameSubmit.bind(this);
     this.answerSelected = this.answerSelected.bind(this);
     this.questionSubmit = this.questionSubmit.bind(this);
   }
   
  render() {
    var studentName;
    var questions;

    if(this.state.studentName === '' && this.state.isSubmitted === false){
      studentName = <div>
        <h1>Hey Student, please let us know your name:</h1>
        <form onSubmit={this.nameSubmit}>
          <input className='namy' type='text' placeholder='Enter your name' ref='name'></input>
        </form>
      </div>;
      questions = ''
    } else if(this.state.studentName !==  '' && this.state.isSubmitted === false){
      studentName = <h1>Welcome to U-survey, {this.state.studentName}</h1>;
      questions = <div>

        <h2>Here are some questions: </h2>
        <form onSubmit={this.questionSubmit}>
          <div className='card'>
            <label>What kind of courses you like the most: </label><br />
            <input type='radio' name='answer1' value='Technology' onChange={this.answerSelected}/> Technology
            <input type='radio' name='answer1' value='Design' onChange={this.answerSelected}/> Design
            <input type='radio' name='answer1' value='Marketing' onChange={this.answerSelected}/> Marketing
          </div>
          <div className='card'>
            <label>You are a: </label><br />
            <input type='radio' name='answer2' value='Student' onChange={this.answerSelected} /> Student
            <input type='radio' name='answer2' value='in-job' onChange={this.answerSelected} /> in-job
            <input type='radio' name='answer2' value='looking-job' onChange={this.answerSelected} /> looking-job
          </div>
          <div className='card'>
            <label>Is online learning helpul: </label><br />
            <input type='radio' name='answer3' value='Yes' onChange={this.answerSelected} /> Yes
            <input type='radio' name='answer3' value='No' onChange={this.answerSelected} /> No
            <input type='radio' name='answer3' value='Maybe' onChange={this.answerSelected} /> Maybe
          </div>
          <input className='feedback-button' type='submit' value='submit'/>
        </form>
      </div>;
    }
    return (
      <div>
        {studentName}
        -----------------------------------
        {questions}
      </div>
    )
  }
}

export default Usurvey