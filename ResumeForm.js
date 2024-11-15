import React from 'react';

function ResumeForm({ setResumeData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData(prevData => ({ ...prevData, [name]: value }));
  };

  return (
    <form>
      <h3>Personal Information</h3>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} />
      <input type="text" name="email" placeholder="Email" onChange={handleChange} />
      
      <h3>Education</h3>
      <input type="text" name="education" placeholder="Education" onChange={handleChange} />

      <h3>Skills</h3>
      <textarea name="skills" placeholder="Skills" onChange={handleChange}></textarea>

      <h3>Experience</h3>
      <textarea name="experience" placeholder="Experience" onChange={handleChange}></textarea>
    </form>
  );
}

export default ResumeForm;
