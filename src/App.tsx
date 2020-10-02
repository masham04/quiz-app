import React, { useEffect, useState } from "react";
import {getdata} from './Services/Quizservice';
import "./App.css";
import {Header} from './components/Header';
import { Quizcard } from "./components/Quizcard";
import { actualdata } from "./Types/Quiztypes";

function App() {
let [quiz, setquiz] = useState <actualdata[]>([]);
let [current,setcurrent] = useState(0);
let [score, setscore] = useState(0);
let [result, setresult] = useState(false);

  useEffect(() => {
    async function fetchdata(){
      const question: actualdata[] = await getdata();
      setquiz(question);
    }
    fetchdata();
  },[])
 

 const handler = (el: React.FormEvent<EventTarget>, userAns: string) => {
   el.preventDefault();
   console.log(userAns);

   const currentquestion = quiz[current];

   if(userAns === currentquestion.answer ){
    console.log('Success')
    setscore(score++);
   }
   else{
     console.log('Fail')
   }
   if(current !== quiz.length-1)
  setcurrent(++current);
  else{
      alert('Quiz Completed');
      setresult(true);
  }
 }
 if(result){
  if(score === quiz.length){
    return(
      <div className='container'>
          <div className='content'>
          <h1 className='result'>Result</h1>
          <h2 className='result'>Congratulation! You Score 5 out of 5.</h2>
          </div>
      </div>
    )
  }
  else{
    return(
      <div className='container'>
          <div className='content'>
          <h1 className='result'>Result</h1>
          <h3 className='result'>Your result is {score} out of {quiz.length}.</h3>
          </div>
      </div>
    )
  }
  
}
 if(!quiz.length) return <h2 className='load'>Loading...</h2>



 return (
    <div className="App">
        <Header />
        <Quizcard question={quiz[current].question} options={quiz[current].options}
         callback={handler} />
    </div>
  );
}

export default App;
