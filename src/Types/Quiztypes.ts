import { FormEvent } from "react"

export type rawdata = {
    category: string
    type: string
difficulty: string
question: String
correct_answer: string
incorrect_answers: string[]
}
export type actualdata = {
    question: string
    answer: string
    options: string[]
    
}
export type proptype = {
    question: string
    options: string[]
    callback: (el: React.FormEvent<EventTarget>, userAns: string) => void
}