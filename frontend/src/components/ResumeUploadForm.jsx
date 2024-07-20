import React, { useState } from 'react';
import axios from 'axios';
import './ResumeUploadForm.css';

const ResumeUploadForm = () => {
  const [resume, setResume] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const  [ answer ,setAnswer] =useState("");

  const handleUpload = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('resume', resume);
    formData.append('jd', jobDescription);

    try {
      const response = await axios.post('https://ats-backend-deploy-1.onrender.com/upload', formData);
      console.log(response.data.response);
      setAnswer(response.data.response);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="upload-form-container">
      <form onSubmit={handleUpload} className="upload-form">
        <h2>Upload Your Resume</h2>
        <input
          type="file"
          onChange={(e) => setResume(e.target.files[0])}
          required
          id='file'
        />
        <textarea
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          placeholder="Job Description"
        />
        <button type="submit" className="upload-button">Upload</button>
        
      </form>

      <div id ="answer">
        <div><h2>ATS Score and Suggestions</h2></div>
        <div>{answer && <p>{answer}</p>}
        </div>
      </div>
    </div>
  );
};

export default ResumeUploadForm;
