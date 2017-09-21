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

  nameSubmit(){
    var studentName = this.refs.name.value;
    this.setState({studentName: studentName}, function(){
      console.log(this.state);
    });
  }

   constructor(prop) {
     super(prop);
     
     this.state= {
       uid: uuid.v1(),
       studentName: '',
       answers: {
         answer1: '',
         answer2: '',
         answer3: ''
       },
       isSubmitted: false
     };
     this.nameSubmit = this.nameSubmit.bind(this)
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
      </div>
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