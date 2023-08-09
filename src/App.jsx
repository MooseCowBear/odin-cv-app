import { useState } from 'react'
import { Header } from './components/Header.jsx'
import { Form } from './components/Form.jsx';
import { Cv } from './components/Cv.jsx'

import './App.css'

function App() {
  const [showForm, setShowForm] = useState(true);
  const [generalInfo, setGeneralInfo] = useState({});
  const [educationInfo, setEducationInfo] = useState([]);
  const [experienceInfo, setExperienceInfo] = useState([]);

  const updateEducation = (newValue) => {
    setEducationInfo(newValue);
  }

  if (showForm) {
    return (
      <>
        <Header />
        <Form 
          general={generalInfo}
          education={educationInfo}
          updateEducation={updateEducation}
          updateStatus={()=> {setShowForm(!showForm)}}
        />
      </>
    );
  }

  return (
    <>
     <Header /> 
     <p>i should be the cv</p>
     <Cv 
      education={educationInfo}
     />
    </>
  )
}

export default App
