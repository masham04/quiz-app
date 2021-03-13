import {actualdata,rawdata} from './../Types/Quiztypes';
const shuffle = (array: any[]) => 
[...array].sort(() => Math.random()-0.5)

export const getdata = async(): Promise<actualdata[]> => {
        const res = await fetch('https://opentdb.com/api.php?amount=6&difficulty=easy&type=multiple')
        const {results} = await res.json();
        const quiz: actualdata[] = results.map((obj: rawdata)=>{
               return{
                   question: obj.question,
                   answer: obj.correct_answer,
                   options: shuffle(obj.incorrect_answers.concat(obj.correct_answer))
               }
        })
        return quiz;
}
   
