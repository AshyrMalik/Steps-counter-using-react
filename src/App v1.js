import { useState } from 'react';
import  './index.css';
const message=[
  "Learn react",
  "Apply for job",
  "Invest income",  

]

function App() {
  
  const [step,setStep] = useState(1)
  const [isOpen,setisOpen]=useState(true)

  function handlePrev(){
    if (step===1) return
    setStep((s)=>s-1)
  }
  function handleNext(){
    if (step===3) return
    setStep(s=> s+1)
  }
  
  return (
    <>
      { <button className='close' onClick={() => setisOpen(is=>!is)}>&times;</button> }
      {isOpen && (
        <div className="steps">
            <div className='numbers'>
                <div className={step  >=1 ? "active":" "}>1</div>
                <div className={step >=2 ? "active":" "}>2</div>
                <div className={step >=3? "active": " "}>3</div>
            </div>
            <p className='message'>Step {step}: {message[step-1]} </p>
            <div className='buttons'>
                <button style={{backgroundColor:'#7950f2',color:"#ffff"}} onClick={handlePrev}>Previous</button>
                <button style={{backgroundColor:'#7950f2',color:"#ffff"}} onClick={handleNext}>Next</button>
            </div>
        </div>
  
      )}

    </>
  );
}

export default App;
