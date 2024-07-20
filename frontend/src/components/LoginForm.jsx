import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();

    try {

      await axios.post("http://localhost:3001/", {
        email, password
      })
        .then(res => {
          if (res.data === "exist") {
            navigate("/home", { state: { id: email } })
          }
          else if (res.data === "notexist") {
            alert("User have not sign up")
          }
        })
        .catch(e => {
          alert("wrong details")
          console.log(e);
        })

    }
    catch (e) {
      console.log(e);

    }

  }


  return (
    <div className="form-container">
      <form onSubmit={submit} className="form">
        <h2>Login to ResumeRankerX</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
          required
        />
        <button type="submit" onClick={submit}>Login</button>

        <div className="forgot-password">Forgot password?</div>
        <div className="signup">
          <p>New user?</p>
          <button type="button" onClick={() => navigate('/signup')}>Signup Now</button>

        </div>
        <div className="social-signup">
          <p>May also signup with</p>
          <img src="https://static-00.iconduck.com/assets.00/google-icon-512x512-tqc9el3r.png" alt="Google" />
          <img src="https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-github-1.png" alt="GitHub" />
          <img src="https://static-00.iconduck.com/assets.00/linkedin-icon-256x256-k7c74t1i.png" alt="LinkedIn" />
        </div>
        <div className="signup">
          <button type="button" onClick={() => navigate('/home')}>Guest User</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
