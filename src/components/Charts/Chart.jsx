import React , {useState, useEffect} from 'react'
import {fetchDailyData} from '../../api';
import {Line, Bar} from 'react-chartjs-2';

import cx from 'classnames'
import styles from './Chart.module.css'

const Chart = ({data: {confirmed, recovered, deaths}, country}) => {
    const [dailyData, setDailyData] = useState([]);
    
    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        fetchAPI();
    }, [])
    
    
    const lineChart = (
       dailyData.length
       ? (
        <Line className={styles.chartFont} data={{
            labels:dailyData.map(({date}) => date),
            datasets: [{
                data:dailyData.map(({confirmed}) => confirmed),
                label: 'Infected Cases',
                borderColor: '#54E346', 
                className: styles.chartFont,
                fill: true
            }, {
                data:dailyData.map(({deaths})=> deaths),
                label: 'Deaths Cases',
                borderColor: '#AF2D2D', 
                fill: true
            }]
        }}
        />) :null
    )
    
    const barChart = (
        confirmed
        ? (
            <Bar 
            data={{
                labels:['Infected', 'Recovered', 'Deaths'],
                datasets: [{
                    label: 'Cases', 
                    backgroundColor: [
                       'rgba(0,0, 255, 0.5)', 
                       'rgba(0, 255, 0, 0.5)', 
                       'rgba( 255,0, 0, 0.5)', 
                    ], 
                    data: [confirmed.value, recovered.value, deaths.value]
                }]
            }}
            options={{
                legend: {display: false},
                title: {display:true, text:`Current state in ${country}`}
            }}
            />
        ):null
    )
    return (
        <div className={cx(styles.container, styles.chartFont)}>
           {country ? barChart : lineChart}
        </div>
    )
}

export default Chart
