import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import UserDashboard from './components/UserDashboard';
import ResumeUploadForm from './components/ResumeUploadForm';
// import ScoreDisplay from './components/ScoreDisplay';
import ResumeEnhancementForm from './components/ResumeEnhancementForm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/" element={<LoginForm />} />
        <Route path="/home" element={<UserDashboard />} />
        <Route path="/submit-resume" element={<ResumeUploadForm />} />
        {/* <Route path="/score" element={<ScoreDisplay />} /> */}
        <Route path="/enhance-resume" element={<ResumeEnhancementForm />} />
      </Routes>
    </div>
  );
}

export default App;
