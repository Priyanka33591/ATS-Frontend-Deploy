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
          <h2>ResumeRankerX</h2>
        </div>
        <div className="navbar-right">
          <span>{username}</span>
        </div>
      </header>
      <div className="main-content-dashboard">
        <aside className="sidebar">
          <nav>
            <ul>
              <li><Link to="/submit-resume">Know Your ATS Score</Link></li>
              {/* <li><Link to="/score">View Score</Link></li> */}
              <li><Link to="/enhance-resume">Make Resume</Link></li>
            </ul>
          </nav>
        </aside>
        <section className="content-dashboard">
          <h1 id="h1">Welcome to ResumeRankerX</h1>
          <p id="p">Use the navigation menu to access different features.</p>
          <h2>Website Features</h2>

          <div className="feature-item div1">
            <img src="https://media.istockphoto.com/id/1468757785/photo/human-resources-and-management-concept-employee-must-complete-the-online-survey-form-marked.webp?b=1&s=170667a&w=0&k=20&c=b9QV98XaaziiO9Poaxhp5v13CQvdoEF15kTL8ylC6Wo=" alt="Submit Resume" className='submit-resume-image' />
            <div>
              <h3>Submit Resume:</h3>
              <p id="hello">Easily upload your resume to our platform for analysis and enhancement. Our user-friendly interface ensures a smooth and quick submission process.</p>
            </div>
          </div>

          <div className="feature-item div2">
            <div>
              <h3>View Score:</h3>
              <p id="hello">Get an instant evaluation of your resume with a comprehensive score that highlights its strengths and areas for improvement. This feature helps you understand how your resume stands out in the competitive job market.</p>
            </div>
            <img src="https://static.jobscan.co/blog/uploads/score_big.jpg" alt="View Score" />


          </div>

          <div className="feature-item div4">
            <img id="div4-img" src="https://static.jobscan.co/blog/uploads/533x340_01_new.png" alt="Enhance Resume" />
            <div>
              <h3>Enhance Resume:</h3>
              <p id="hello">Take advantage of our advanced tools to improve your resume. From optimizing keywords to formatting tips, this feature ensures your resume is polished and professional.</p>
            </div>
          </div>

          <div className="feature-item div5">
            <div>
              <h3>Download Enhanced Resume:</h3>
              <p id="hello">Once your resume is enhanced, easily download the updated version. This ensures you always have the most effective and updated resume ready for your job applications.</p>
            </div>
            <img src="https://t4.ftcdn.net/jpg/01/21/55/05/360_F_121550595_cgoGNOs5lObzYqErxBIs4IEMGNyIgMH9.jpg" alt="Download Enhanced Resume" />

          </div>

          <footer ref={footerRef} className="footer">
            <div className="footer-content">
              <p id="footer-p">Contact Us: support@resumerankerx.com</p>
              <p id="footer-p">Phone: +123-456-7890</p>
              {/* <div className="social-media">
            <a href="https://static-00.iconduck.com/assets.00/instagram-icon-512x512-ggh8x3cn.png"><img src="https://p7.hiclipart.com/preview/727/121/157/logo-computer-icons-brand-instagram-logo.jpg" alt="Instagram" /></a>
            <a href="www.instagram.com"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://www.twitter.com" ><img src="" alt="Twitter" /></a>
            <a href="https://www.facebook.com"><img src="/path/to/facebook-icon.png" alt="Facebook" /></a>
          </div> */}
            </div>
          </footer>

        </section>
      </div>

    </div>
  );
};

export default UserDashboard;
