import React from 'react';
import GoogleMapReact from 'google-map-react';
import {Paper,Typography,useMediaQuery} from '@material-ui/core';

import Rating from '@material-ui/lab/Rating';

import useStyles from './styles';


function Map({setCoordinates,setBounds,coordinates,places}) {
    const classes = useStyles();
   
  return (
      <div className={classes.mapContainer}>
      <GoogleMapReact 
      bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
      defaultCenter={coordinates}
      defaultZoom={14}
      margin={[50,50,50,50]}
      onChange={(e)=>{
        setCoordinates({lat: e.center.lat, lng: e.center.lng});
        setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
      }}
      >
          {places?.map((place,i)=>(
            <div
                className={classes.marketContainer}
                lat={Number(place.latitude)}
                lng={Number(place.longitude)}
                key={i}

            >
                  <Paper elevation={3} className={classes.paper}>
              <Typography className={classes.typography} variant='subtitle2' gutterBottom>{place.name}</Typography>
                <img 
                  className={classes.pointer}
                  src={place.photo? place.photo.images.large.url:'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                  alt={place.name}
                />
                  <Rating size="small" value={Number(place.rating)} readOnly />
              </Paper>
            
          
        </div>
      ))}
      </GoogleMapReact>

      </div>
  )
}

export default Map;
