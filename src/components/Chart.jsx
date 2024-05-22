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
import data_json from "../assets/data.json"

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
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

function Numbers() {
    return Math.trunc(Math.random() * 1000)
}

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 2',
            data: labels.map(() => Numbers()),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};



export function Chart() {

    function timeConverter(UNIX_timestamp){
        var a = new Date(UNIX_timestamp);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
        return time;
      }

    const [dataChart, setDataChart] = useState([]);
    useEffect(() => {
        let labels = [];
        let values = [];

        data_json.rates.forEach((el,index) => {
            labels.push(timeConverter(data_json.startTime + index + data_json.interval));
            values.push(el);
        })

        setDataChart({
            labels,
            datasets:[
                {
                    label: 'Dataset 1',
                    data: values,
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(53, 162, 235, 0.5)',
                }
            ]
        })
    
    }, [])

    return (
        <>
        <div className="header">
            <h4>12H</h4>
            <h4>1D</h4>
            <h4>1W</h4>
            <h4>1M</h4>
            <h4>1Y</h4>
            <h4>2Y</h4>
            <h4>5Y</h4>
            <h4>10Y</h4>
        </div>
        {
            dataChart?.labels?.length && <Line options={options} data={dataChart} />
        }
        </>
    )



}

export default Chart