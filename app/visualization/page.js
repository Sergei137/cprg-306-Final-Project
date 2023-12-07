"use client";
import React, { useState, useEffect } from 'react';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import NavBar from '@/components/NavBar';

const VisualizationPage = () => {
  const initialData = {
    labels: ['Project 1', 'Project 2', 'Project 3'],
    datasets: [
      {
        label: 'Data Set',
        data: [12, 19, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };



  const [chartData, setChartData] = useState(initialData);

  const handleDataChange = (value, index) => {
    const updatedData = [...chartData.datasets[0].data];
    updatedData[index] = Number(value);
    setChartData({
      ...chartData,
      datasets: [{ ...chartData.datasets[0], data: updatedData }],
    });
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const addItem = () => {
    const newItemLabel = `Project ${chartData.labels.length + 1}`;
    const newData = [...chartData.datasets[0].data, 0]; // Adding 0 as initial value for new item
    const backgroudColors = [...chartData.datasets[0].backgroundColor, getRandomColor(),
  ];
    // Update the total project count
    setChartData({
      ...chartData,
      labels: [...chartData.labels, newItemLabel],
      datasets: [{ ...chartData.datasets[0], data: newData,
      backgroundColor: backgroudColors,
     }],
    });

    // Update the total project count
    setNumProjects(chartData.labels.length + 1);
  };

  const deleteItem = (index) => {
    if (chartData.labels.length <= 1) {
      alert("Cannot delete the last Project.");
      return;
    }
    const newLabels = chartData.labels.filter((_, i) => i !== index);
    const newData = chartData.datasets[0].data.filter((_, i) => i !== index);
    const backgroundColors = chartData.datasets[0].backgroundColor.filter(
      (_, i) => i !== index
    );
    // Update the total project count
    setChartData({
      ...chartData,
      labels: newLabels,
      datasets: [{ ...chartData.datasets[0], data: newData,
      backgroundColor: backgroundColors,
     }],
    });

    // Update the total project count
    setNumProjects(chartData.labels.length - 1);
  };

  const [numProjects, setNumProjects] = useState(initialData.labels.length);


  return (
    <main className="main-container">
      <NavBar />
      
      <div className="content-container">
        <h2 className='page-title'>Project Visualization</h2>
        <p>Total Projects: {numProjects}</p>

        <div className="edit-section">
          <h3>Edit Data Points</h3>
          {chartData.labels.map((label, index) => (
            <div key={label} className="edit-item">
              <label>{label}: </label>
              <input
                type="number"
                value={chartData.datasets[0].data[index]}
                onChange={(e) => handleDataChange(e.target.value, index)}
              />
              <button onClick={() => deleteItem(index)} className='edit-button'>Delete</button>
            </div>
          ))}
          <button onClick={addItem} className='edit-button'>Add New Item</button>
        </div>

        <div className="charts-section">
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
            <Line data={chartData} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default VisualizationPage;