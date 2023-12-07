"use client";
import React, { useState, useEffect } from 'react';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import Link from 'next/link';
import { Navbar } from 'reactstrap';
import NavBar from '@/components/NavBar';

const VisualizationPage = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Project Progress',
        data: [],
        backgroundColor: [],
        borderColor: [],
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    // Load projects from local storage
    const savedProjects = JSON.parse(localStorage.getItem('projects')) || [];
  
    // Extract labels and data
    const labels = savedProjects.map(p => p.Name);
    const data = savedProjects.map(p => p.Progress);
    const backgroundColors = data.map(() => `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.2)`);
    const borderColors = data.map(() => `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 1)`);
  
    setChartData(prevChartData => ({
      labels: labels,
      datasets: [
        { ...prevChartData.datasets[0], data: data, backgroundColor: backgroundColors, borderColor: borderColors },
      ],
    }));
  }, []);

  return (
    
    <div>
      <NavBar/>
      <div className="content-container">
      <h2>Project Visualization</h2>
      <div className="chart-container">
        <h3>Bar Chart</h3>
        <Bar data={chartData} options={{ responsive: true }} />
      </div>
      <div className="chart-container">
        <h3>Doughnut Chart</h3>
        <Doughnut data={chartData} />
      </div>
      <div className="chart-container">
        <h3>Line Chart</h3>
        <Line data={chartData} options={{ responsive: true }} />
      
      </div>
      <Link href="/" className="text-white mt-4">Home Page</Link>
    </div>
    </div>
  );
};

export default VisualizationPage;
