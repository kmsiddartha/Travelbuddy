import axios from 'axios';
import React from 'react';

export const getPlacesData = async (type, sw, ne) => {
  try {
    var {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: '17.3380',
          tr_latitude: '17.4503',
          bl_longitude: '78.3826',
          tr_longitude: '78.5322',
        },
        headers: {
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
          'x-rapidapi-key':
            '3499f37da1mshe92b7523616fc55p12b260jsn098890d4f18c',
        },
      },
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getweatherdata = async () => {
  try {
    const { data } = await axios.get(
      'https://community-open-weather-map.p.rapidapi.com/find',
      {
        params: {
          lon: '78.4071',
          type: 'link, accurate',
          lat: '17.4326',
          units: 'imperial, metric',
        },
        headers: {
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
          'x-rapidapi-key':
            '3499f37da1mshe92b7523616fc55p12b260jsn098890d4f18c',
        },
      },
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
