// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
 const [data, setData] = useState([]);

 useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('src/assets/data.csv');
      const text = await response.text();
      const rows = text.split('\n');
      const data = rows.map(row => row.split(','));
      setData(data);
    };
    fetchData();
 }, []);



 return (
  <>
  <div class="hero-section">
 <h1 class="hero-title">Code Circuit</h1>
 <p class="hero-subtitle">150 Leetcode Brain Busters: Grabbed from All Over the Web!</p>
</div>
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Type</th>
            <th>Level</th>
            <th>Answer</th>
            <th>Question</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row[0]}</td>
              <td>{row[1]}</td>
              <td>{row[2]}</td>
              <td>
              <span className={`badge ${row[3]}`}>{row[3]}</span>
              </td>
              <td> <button className='button' onClick={() => window.open(row[4], '_blank')}>View</button> </td> 
              <td> <button className='button' onClick={() => window.open(row[5], '_blank')}>View</button> </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <footer>
 <div class="footer-content">
    <a href="https://github.com/yourusername" target="_blank">
      <p>Contribute</p>
    </a>
 </div>
</footer>

    </>
 );
};

export default App;
