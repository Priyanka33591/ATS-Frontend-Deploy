import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ResumeEnhancementForm.css'; // Assuming you will create a CSS file for styles
import Header from "./Header/Header";
import Body from "./Body/Body";

function ResumeEnhancementForm({ history }) {
  const [resume, setResume] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleEnhance = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('resume', resume);
    formData.append('jobDescription', jobDescription);

    try {
      const res = await axios.post('http://localhost:5000/api/resume/enhance', formData);
      console.log(res.data);
      history.push('/download-enhanced-resume');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {/* <div className="container">
              <div className="image-container">
                <img
                  src="https://static.jobscan.co/blog/uploads/skills_big.jpg"
                  alt="Resume Optimization"
                  className="background-image"
                />
              </div>
      
              <div className="content-1">
                <h3>RESUME OPTIMIZATION</h3>
                <h2>See your missing skills</h2>
                <p>ResumeRankerX matches hard skills, soft skills, and keywords from the job listing to your resume. AI-powered system will show you how to tailor your resume so that you highlight the skills and experience recruiters are searching for.</p>
              </div>
            </div>
      
            <div id="submit">
              <form onSubmit={handleEnhance}>
                <input
                  type="file"
                  onChange={(e) => setResume(e.target.files[0])}
                  required
                  className="file-input"
                />
      
                <textarea
                  placeholder="Add Job Description..."
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  className="textarea-input"
                  required
                />
                <br />
                <button type="submit" className="enhance-button" onClick={() => navigate('/download-enhanced-resume')}>Enhance Resume</button>
              </form>
            </div> */}
      <Header />
      <Body/>
    </div>
  );
}

export default ResumeEnhancementForm;
