import axios from 'axios';

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async () => {
    
    try {
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(url);

        return {confirmed , recovered, deaths, lastUpdate};
        // console.log(response);
    }catch (error){

    }
}
 
// API for the chart

export const fetchDailyDate = async () => {
    try{
        const {data} = await axios.get(`${url}/daily`);
        console.log(data)
    }catch(error) {

    }
}