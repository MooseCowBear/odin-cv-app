import { useState } from 'react'
import { Header } from './components/Header.jsx'
import { Form } from './components/Form.jsx';

import './App.css'

function App() {
  const [showForm, setShowForm] = useState(true);
  const [generalInfo, setGeneralInfo] = useState({});
  const [educationInfo, setEducationInfo] = useState([]);
  const [experienceInfo, setExperienceInfo] = useState([]);

  if (showForm) {
    return (
      <>
        <Header />
        <Form 
          general={generalInfo}
        />
      </>
    );
  }

  return (
    <>
     <Header /> 
     <p>i should be the cv</p>
    </>
  )
}

export default App
