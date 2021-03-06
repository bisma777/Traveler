import React, {useEffect, useState} from "react";
import {Toolbar} from '@material-ui/core'
import {CssBaseline, Grid} from '@material-ui/core'

import Header from '../src/components/Header/Header'
import List from '../src/components/List/List'
import Map from '../src/components/Map/Map'
import {getPlacesData} from './api'

function App() {
  const [places,setPlaces] =useState([]);
  const[filteredPlaces,setFilteredPlaces]= useState([])
  const [coordinates,setCoordinates] = useState({});
  const [bounds, setBounds] = useState({})
  

  const [type, setType] = useState('restaurants')
  const [rating,setRating] = useState('');

  useEffect(()=>{
      navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
        setCoordinates({lat: latitude,lng:longitude})
       
      })
  },[]);

useEffect(()=>{
    const filteredPlaces = places.filter((place)=>place.rating > rating);
setFilteredPlaces(filteredPlaces)

},[rating])

  useEffect(()=>{
    getPlacesData(type,bounds.sw,bounds.ne)
    .then((data)=>{
      setPlaces(data);
      setFilteredPlaces([])
    })
  },[type,coordinates,bounds])


 

  return (
    <div >
        <CssBaseline/>
          <Header/>
          <Toolbar></Toolbar>
        <Grid container spacing={3} style={{width: '100%'}}>
            <Grid item xs={12} md={4}>
                  <List 
                  type={type}
                  setType={setType}
                  rating={rating}
                  setRating={setRating}
                  places={filteredPlaces.length ? filteredPlaces : places}
                  
                  />
            </Grid>
             <Grid item xs={12} md={8}>
                  <Map
                      setCoordinates={setCoordinates}
                      setBounds={setBounds}
                      coordinates={coordinates}
                      places={filteredPlaces.length ? filteredPlaces : places}
                  />
            </Grid>

        </Grid>
    </div>
  );
}

export default App;
