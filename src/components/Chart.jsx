import React, { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import data_json from "../assets/data.json";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
        },
    },
    scales: {
        y: {
            position: 'left',
        }
    }
};

function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
    return time;
}

export function Chart() {
    const [dataChart, setDataChart] = useState({ labels: [], datasets: [] });

    const updateChart = (timeframe) => {
        let labels = [];
        let values = [];

        let interval = data_json.interval;
        let startTime = data_json.startTime;
        let rates = data_json.rates;
        let endTime;

        switch (timeframe) {
            case '12H':
                endTime = startTime + 12 * 60 * 60 * 1000; 
                break;
            case '1D':
                endTime = startTime + 24 * 60 * 60 * 1000;
                break;
            case '1W':
                endTime = startTime + 7 * 24 * 60 * 60 * 1000; 
                break;
            case '1M':
                endTime = startTime + 30 * 24 * 60 * 60 * 1000; 
                break;
            case '1Y':
                endTime = startTime + 365 * 24 * 60 * 60 * 1000;
                break;
            case '2Y':
                endTime = startTime + 2 * 365 * 24 * 60 * 60 * 1000;
                break;
            case '5Y':
                endTime = startTime + 5 * 365 * 24 * 60 * 60 * 1000; 
                break;
            case '10Y':
                endTime = startTime + 10 * 365 * 24 * 60 * 60 * 1000; 
                break;
            default:
                endTime = startTime + 24 * 60 * 60 * 1000;
        }

        rates.forEach((el, index) => {
            let currentTime = startTime + index * interval;
            if (currentTime <= endTime) {
                labels.push(timeConverter(currentTime));
                values.push(el);
            }
        });

        setDataChart({
            labels,
            datasets: [
                {
                    label: 'Dataset 1',
                    data: values,
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(53, 162, 235, 0.5)',
                }
            ]
        });
    };

    useEffect(() => {
        updateChart('1D'); 
    }, []);

    return (
        <>
            <div className="header">
                {['12H', '1D', '1W', '1M', '1Y', '2Y', '5Y', '10Y'].map((timeframe) => (
                    <h4 key={timeframe} onClick={() => updateChart(timeframe)}>{timeframe}</h4>
                ))}
            </div>
            {dataChart?.labels?.length && <Line options={options} data={dataChart} />}
        </>
    );
}

export default Chart;
