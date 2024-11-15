import React, { useState } from 'react';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import TemplateSelector from './components/TemplateSelector';
import './styles/main.css';

function App() {
  const [resumeData, setResumeData] = useState({});
  const [template, setTemplate] = useState('template1');

  return (
    <div className="container">
      <h1>Interactive Resume Builder</h1>
      <TemplateSelector setTemplate={setTemplate} />
      <ResumeForm setResumeData={setResumeData} />
      <ResumePreview data={resumeData} template={template} />
    </div>
  );
}

export default App;
