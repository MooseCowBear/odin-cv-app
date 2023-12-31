import { useState } from 'react'
import { Header } from './components/Header.jsx'
import { Form } from './components/Form.jsx';
import { Cv } from './components/CV.jsx'

import './App.css'

function App() {
  const [showForm, setShowForm] = useState(true);
  const [generalInfo, setGeneralInfo] = useState({name: '', email: '', phone: ''});
  const [educationInfo, setEducationInfo] = useState([]);
  const [experienceInfo, setExperienceInfo] = useState([]);
  const [skillsInfo, setSkillsInfo] = useState("");

  const updateEducation = (newValue) => {
    setEducationInfo(newValue);
  }

  const updateGeneral = (newValue) => {
    setGeneralInfo(newValue);
  }

  const updateExperience = (newValue) => {
    setExperienceInfo(newValue);
  }

  const updateSkills = (newValue) => {
    setSkillsInfo(newValue);
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
          skills={skillsInfo}
          updateSkillsInfo={updateSkills}
        />
      </>
    );
  }

  return (
    <>
     <Header /> 
      <main>
        <Cv 
          general={generalInfo}
          education={educationInfo}
          experience={experienceInfo}
          skills={skillsInfo}
        />
        <button className="right" onClick={() => {setShowForm(!showForm)}}>Edit</button>
      </main>
    </>
  )
}

export default App
