import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function ResumePreview({ data, template }) {
  const previewRef = useRef();

  const downloadPDF = async () => {
    const canvas = await html2canvas(previewRef.current);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    pdf.addImage(imgData, 'PNG', 0, 0);
    pdf.save('resume.pdf');
  };

  return (
    <div>
      <div ref={previewRef} className={`resume-preview ${template}`}>
        <h2>{data.name}</h2>
        <p>{data.email}</p>
        <h4>Education</h4>
        <p>{data.education}</p>
        <h4>Skills</h4>
        <p>{data.skills}</p>
        <h4>Experience</h4>
        <p>{data.experience}</p>
      </div>
      <button onClick={downloadPDF}>Download as PDF</button>
    </div>
  );
}

export default ResumePreview;
