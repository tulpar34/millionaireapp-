import { useEffect, useState } from "react"


export default function Timer(setStop, questionNumber) {
    const[timer,setTimer] = useState(10)

    useEffect(()=> {
        if(timer === 0) return setStop(true)
     const interval = setInterval(()=>{
       setTimer((prev) => prev-1)
     }, 1000)
     return () => clearInterval(interval)
    },[setStop, timer])
   
    useEffect(() => {
     setTimer(10)
    },[questionNumber])
  return timer
   
}
