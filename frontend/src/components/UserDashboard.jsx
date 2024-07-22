import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './UserDashboard.css';

const UserDashboard = () => {
  const username = "user";
  const footerRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        footer.classList.add('show-footer');
      } else {
        footer.classList.remove('show-footer');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (

    <div className="dashboard-container">
      <header className="navbar">
        <div className="navbar-left">
          <h2 >ResumeRankerX</h2>
          {/* <img className="logo" src="https://i.pinimg.com/736x/d3/6d/fa/d36dfa33818b8cf16e9d601afe174755.jpg"/>  */}
        </div>
        {/* <div id="navbar-left">
        <h2 >ResumeRankerX</h2>
        </div> */}
        <div className="navbar-right">
          <span>{username}</span>
        </div>
      </header>
      <div className="main-content-dashboard">
        <aside className="sidebar">
          <nav>
            <ul>
              <li><Link to="/submit-resume">Know Your ATS Score</Link></li>
              <li><Link to="/enhance-resume">Make Resume</Link></li>
            </ul>
          </nav>
        </aside>
        <section className="content-dashboard">

          <h1 id="h1">Welcome to ResumeRankerX</h1>
          <div className='main-div'>



            <p id="p">Many job seekers don’t get enough interviews even after applying for dozens of jobs. Why?
              Companies use <span id="span">Applicant Tracking Systems (ATS)</span> to search and filter resumes by keywords.
              Our ATS with AI Integration and Resume Builder is a cutting-edge tool designed to enhance your job application process.
              The project leverages the power of Google Gemini AI to provide detailed insights and recommendations for improving your resume.
              </p>
            <img className="first-img" src="https://static.jobscan.co/blog/uploads/ats_big.jpg" alt="" />
          </div>
  
          <p id="p"><span id="span">Use the navigation menu to access different features.</span></p>
          <br /><br /><br />
          <h2 className='features'>Here’s a closer look at its key features:</h2>
          <br />
          <div id="inline"><h3 id="div-heading">Resume Upload and Analysis:</h3></div>
          <div id="inline"><p>Our user-friendly interface ensures a smooth and quick submission process.</p></div>

          <div className="feature-item div1">
            <img src="https://media.istockphoto.com/id/1468757785/photo/human-resources-and-management-concept-employee-must-complete-the-online-survey-form-marked.webp?b=1&s=170667a&w=0&k=20&c=b9QV98XaaziiO9Poaxhp5v13CQvdoEF15kTL8ylC6Wo=" alt="Submit Resume" className='submit-resume-image' />
            <div>

              <p id="hello">
                <ul>
                  <li><span id="span">Upload Your Resume:</span> Simply upload your existing resume to our platform for analysis.</li>
                  <li><span id="span">AI Analysis:</span> Google Gemini AI reads and analyzes your resume.</li>

                </ul>
              </p>
            </div>
          </div>

          <div className="feature-item div2">
            <div>
              <p id="hello">
                <ul>
                  <li><span id="span">ATS Score:</span> Receive an ATS (Applicant Tracking System) score that reflects how well your resume matches job descriptions.</li>
                  <li><span id="span">Keyword Insights:</span> Identify missing keywords that are crucial for passing through automated resume screening systems.</li>
                  <li><span id="span">Resume Summary:</span> Get a short, AI-generated summary of your resume, highlighting key projects and achievements.</li>
                </ul>
              </p>
            </div>
            <img src="https://static.jobscan.co/blog/uploads/score_big.jpg" alt="View Score" />


          </div>
          <br />

          <div><h3 id="div-heading">Resume Builder:</h3></div>
          <div id="inline"><p>The resume builder is designed to be intuitive and straightforward, allowing users to input their information seamlessly.</p></div>

          <div className="feature-item div4">
            <img id="div4-img" src="https://static.jobscan.co/blog/uploads/533x340_01_new.png" alt="Enhance Resume" />
            <div>
              <p id="hello">
                <ul>
                  <li><span id="span">Create Your Resume:</span> Easily build a professional resume from scratch by filling in your details.</li>
                  <li><span id="span">Section Management:</span> Easily add, remove, or rearrange sections like Work Experience, Education, Skills, and Certifications to tailor your resume to specific job applications.</li>
                </ul>

              </p>
            </div>
          </div>

          <div className="feature-item div5">
            <div>
              <p id="hello"><li><span id="span">Download Your Resume:</span> Once your resume is enhanced, easily download the updated version.
                This ensures you always have the most effective and updated resume ready for your job applications.</li></p>
            </div>
            <img src="https://t4.ftcdn.net/jpg/01/21/55/05/360_F_121550595_cgoGNOs5lObzYqErxBIs4IEMGNyIgMH9.jpg" alt="Download Enhanced Resume" />

          </div>

          <footer ref={footerRef} className="footer">
            <div className="footer-content">


              <p id="footer-p">Contact Us: support@resumerankerx.com</p>
              <p id="footer-p">Phone: +91-99847070130</p>


              <svg id="svg" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title>
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
              </svg>

              <svg id="svg" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z">
              </path></svg>


              <svg id="svg" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path></svg>


            </div>
          </footer>

        </section>
      </div>

    </div>
  );
};

export default UserDashboard;
