// import React from 'react';
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend,
// } from 'chart.js';
// import { Bar } from 'react-chartjs-2';

// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend
// );

// export const options = {
//     responsive: true,
//     plugins: {
//         legend: {
//             position: 'top',
//         },
//         title: {
//             display: true,
//             text: 'Chart.js Bar Chart',
//         },
//     },
// };

// function Numbers() {
//     return Math.trunc(Math.random() * 1000)
// }

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// const dataApi = [
//     { id: 1, name: "Yanvar", value: 100 },
//     { id: 2, name: "Fevral", value: 170 },
//     { id: 3, name: "Mart", value: 120 },
//     { id: 4, name: "Aprel", value: 1200 },
//     { id: 5, name: "May", value: 185 },
//     { id: 6, name: "Iyun", value: 101 },
//     { id: 7, name: "Iyul", value: 150 },
//     { id: 8, name: "Avgust", value: 210 },
//     { id: 9, name: "Sentabr", value: 340 },
//     { id: 10, name: "Oktabr", value: 420 },
//     { id: 11, name: "Noyabr", value: 70 },
//     { id: 12, name: "Dekabr", value: 107 },
// ]


// export const data = {
//     labels,
//     datasets: [
//         {
//             label: 'Dataset 1',
//             data: labels.map(() => Numbers()),
//             backgroundColor: 'rgba(255, 99, 132, 0.5)',
//         },
//     ],
// };

// function Home() {
//     return <Bar options={options} data={data} />;
// }

// export default Home;
