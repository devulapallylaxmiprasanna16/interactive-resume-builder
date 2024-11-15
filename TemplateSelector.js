import React from 'react';

function TemplateSelector({ setTemplate }) {
  const handleTemplateChange = (e) => {
    setTemplate(e.target.value);
  };

  return (
    <div>
      <label>Select Template:</label>
      <select onChange={handleTemplateChange}>
        <option value="template1">Template 1</option>
        <option value="template2">Template 2</option>
      </select>
    </div>
  );
}

export default TemplateSelector;
