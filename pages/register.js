import React, { useState } from 'react';
import mysql from 'mysql2';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [university, setUniversity] = useState('');
  const [studyProgram, setStudyProgram] = useState('');

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  }
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleUniversityChange = (event) => {
    setUniversity(event.target.value);
  }

  const handleStudyProgramChange = (event) => {
    setStudyProgram(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    AsyncStorage.setItem("fullName", fullName);
    AsyncStorage.setItem("email", email);
    AsyncStorage.setItem("password", password);
    AsyncStorage.setItem("university", university);
    AsyncStorage.setItem("studyProgram", studyProgram);

    window.location.href = "/Level/level1";
  }

  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name:</label>
        <input type="text" id="fullName" name="fullName" value={fullName} onChange={handleFullNameChange} required />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} required />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} required />
        <br />
        <label htmlFor="university">University:</label>
        <input type="text" id="university" name="university" value={university} onChange={handleUniversityChange} required />
        <br />
        <label htmlFor="studyProgram">Study Program:</label>
        <input type="text" id="studyProgram" name="studyProgram" value={studyProgram} onChange={handleStudyProgramChange} required />
        <br />
        <br /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
