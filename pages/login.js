// pages/login.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Login.module.css'; // Import your CSS file
import Header from "../components/Header";

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    // Replace with your admin credentials
    const adminUsername = 'admin';
    const adminPassword = 'admin123';

    if (username === adminUsername && password === adminPassword) {
      // Admin logged in successfully
      console.log('Admin logged in');
      router.push('/admin/dashboard');
    } else {
      // Invalid credentials
      console.log('Invalid credentials');
    }
  };

  return (
    <>
    <Header/>
    <div className={styles.container}>
      <h1 className={styles.title}>Admin Dashboard</h1>
      <form className={styles.form}>
        <label className={styles.label}>
         
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className={styles.input}
          />
        </label>
        <br />
        <label className={styles.label}>
       
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className={styles.input}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin} className={styles.button}>
          Sign in
        </button>
      </form>
    </div>
    </>
  );
};

export default LoginPage;
