import React from 'react';
import {Grid, Typography, InputLabel, MenuItem, FormControl, Select} from '@material-ui/core' 

import PlaceDetails from '../PlaceDetails/PlaceDetails';

import useStyles from './styles'
function List({places,type, setType,rating,setRating}) {
  const classes = useStyles();
 

 
  return (
  <div className={classes.container}>
    <Typography variant='h5'>Restaurants, Hotels & Attraction around you</Typography>
   <FormControl className={classes.formControl}>
      <InputLabel>Type</InputLabel>
      <Select  defaultValue="" id="type" value={type} onChange={(e)=>setType(e.target.value)}>
        <MenuItem value="restaurants"> Restaurants</MenuItem>
        <MenuItem value="hotels">Hotels</MenuItem>
        <MenuItem value="attractions">Attraction</MenuItem> 
      </Select>
    </FormControl>
    <FormControl className={classes.formControl}>
            <InputLabel id="rating">Rating</InputLabel>
            <Select  defaultValue=""  id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
              <MenuItem value="">All</MenuItem>
              <MenuItem value="3">Above 3.0</MenuItem>
              <MenuItem value="4">Above 4.0</MenuItem>
              <MenuItem value="4.5">Above 4.5</MenuItem>
            </Select>
          </FormControl> 
    <Grid container spacing={3} className={classes.list}>
        {places?.map((place,i)=>(
          <Grid item key={i} xs={12}>
             <PlaceDetails place={place}/>
          </Grid>
        ))}

    </Grid>
   </div>
  )
}

export default List;
