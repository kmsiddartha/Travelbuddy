import React, { useEffect, useState } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import { getPlacesData, getweatherdata } from './api';

import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

const App = () => {
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFileteredPlaces] = useState([]);
  const [weatherdata, setWeatherdata] = useState([]);

  const [childClicked, setChildClicked] = useState('');

  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});

  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');

  const [isloading, setIsloading] = useState(false);

  const latitude = 17.4326;
  const longitude = 78.4071;

  useEffect(() => {
    // navigator.geolocation.getCurrentPosition(
    //   ({ coords: { latitude, longitude } }) => {
    //     setCoordinates({ lat: latitude, lng: longitude });
    //   },
    // );
    // setIsloading(true);
    setCoordinates({ lat: latitude, lng: longitude });
    // setIsloading(false);
  }, []);

  useEffect(() => {
    const filtered = places.filter((place) => place.rating > rating);
    setFileteredPlaces(filtered);
  }, [rating]);

  useEffect(() => {
    setIsloading(true);

    getweatherdata().then((data) => {
      setWeatherdata(data);
    });

    getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
      setPlaces(data);
      setFileteredPlaces([]);
      setIsloading(false);
    });
  }, [type, coordinates, bounds]);
  return (
    <>
      <CssBaseline />
      <Header setCoordinates={setCoordinates} />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List
            places={filteredPlaces.length ? filteredPlaces : places}
            childClicked={childClicked}
            isloading={isloading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={filteredPlaces.length ? filteredPlaces : places}
            setChildClicked={setChildClicked}
            weatherdata={weatherdata}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
