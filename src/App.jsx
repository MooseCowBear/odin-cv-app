import { useState } from 'react'
import { Header } from './components/Header.jsx'
import { Form } from './components/Form.jsx';
import { Cv } from './components/Cv.jsx'

import './App.css'

function App() {
  const [showForm, setShowForm] = useState(true);
  const [generalInfo, setGeneralInfo] = useState({name: '', email: '', phone: ''});
  const [educationInfo, setEducationInfo] = useState([]);
  const [experienceInfo, setExperienceInfo] = useState([]);

  const updateEducation = (newValue) => {
    setEducationInfo(newValue);
  }

  const updateGeneral = (newValue) => {
    setGeneralInfo(newValue);
  }

  const updateExperience = (newValue) => {
    setExperienceInfo(newValue);
  }

  if (showForm) {
    return (
      <>
        <Header />
        <Form 
          general={generalInfo}
          updateGeneral={updateGeneral}
          education={educationInfo}
          updateEducation={updateEducation}
          experience={experienceInfo}
          updateExperience={updateExperience}
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
      general={generalInfo}
      education={educationInfo}
      experience={experienceInfo}
     />
     <button onClick={() => {setShowForm(!showForm)}}>Edit</button>
    </>
  )
}

export default App
