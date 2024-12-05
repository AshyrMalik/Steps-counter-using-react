import { useState } from 'react';
import  './index.css';
const message=[
  "Learn react",
  "Apply for job",
  "Invest income",  

]

function App() {
  return <div>
            <Steps />    
        </div>
}


function Steps(){
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

            <StepMessage step={step}>{message[step-1]}</StepMessage>
            <div className='buttons'>
                <Button bgColor={'#7950f2'} color={"#ffff"}  onClick={handlePrev} ><span>👈</span>Previous</Button>
                <Button bgColor={'#7950f2'} color={"#ffff"} emoji=""onClick={handleNext} > Next <span>👉</span></Button>
            </div>
        </div>
  
      )}

    </>
  );
}
function StepMessage({step,children}){
  return( <div className='message'>
              <h3>Step {step}</h3>: {children} 
          </div>)
}

function Button({bgColor,color,onClick,children}){
  return (<button  style={{backgroundColor:bgColor, color:color}} onClick={onClick}>
             {children}
          </button>
  )
}

export default App;
