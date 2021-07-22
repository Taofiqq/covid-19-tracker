import React from 'react'
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './Cards.module.css'
import CountUp from 'react-countup'
import cx from 'classnames'


const Cards = ( {data: {confirmed, recovered, deaths, lastUpdate}}) => {
    // console.log(props);
    if(!confirmed) {
        return 'Fetching Data..'
    }
    return (
        <div className={styles.container}>
         <Grid container spacing={3} justifyContent="center">
             {/* first card */}
            <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                <CardContent >
                    <Typography color="textSecondary" className={cx(styles.cardContent)} gutterBottom>Infected Cases</Typography>    
                        <Typography variant="h5" className={cx(styles.cardContent)}>
                            <CountUp 
                            start={0}
                            end={confirmed.value}
                            duration={2.5}
                            separator=","
                            />      
                        </Typography> 
                    <Typography color="textSecondary" className={cx(styles.cardContent)}> {new Date(lastUpdate).toDateString()}</Typography>    
                    <Typography variant="body2" className={cx(styles.cardContent)}>Total Number of COVID-19 Active Cases</Typography>    
                </CardContent>      
            </Grid>
            {/* end of first card */}


            {/* second card */}
            <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                <CardContent>
                    <Typography color="textSecondary" className={cx(styles.cardContent)} gutterBottom>Recovered</Typography>    
                    <Typography variant="h5" className={cx(styles.cardContent)}>
                            <CountUp 
                            start={0}
                            end={recovered.value}
                            duration={2.5}
                            separator=","
                            />      
                        </Typography>     
                        <Typography color="textSecondary" className={cx(styles.cardContent)}> {new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2" className={cx(styles.cardContent)}>Total Number of recoveries from COVID-19</Typography>    
                </CardContent>      
            </Grid>
            {/* end of second card */}


            {/* third card */}
            <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                <CardContent>
                    <Typography color="textSecondary" className={cx(styles.cardContent)} gutterBottom>Deaths</Typography>    
                    <Typography variant="h5" className={cx(styles.cardContent)}>
                            <CountUp 
                            start={0}
                            end={deaths.value}
                            duration={2.5}
                            separator=","
                            />      
                        </Typography>   
                        <Typography color="textSecondary" className={cx(styles.cardContent)}> {new Date(lastUpdate).toDateString()}</Typography>   
                    <Typography variant="body2" className={cx(styles.cardContent)}>Total Number of recoveries from COVID-19</Typography>    
                </CardContent>      
            </Grid>
            {/* end of third card */}
         </Grid>
        </div>
    )
}

export default Cards;
