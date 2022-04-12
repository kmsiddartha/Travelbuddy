import React from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardActions,
  Chip,
  CardContent,
} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';
import useStyles from './styles';
import DirectionsIcon from '@material-ui/icons/Directions';

//selected, refProp

const PlaceDetails = ({ place, selected, refProp }) => {
  const classes = useStyles();
  if (selected)
    refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <Card elevation={8}>
      <CardMedia
        style={{ height: 300 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        }
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant='h5'>
          {place.name ? place.name : 'Bawarchi'}
        </Typography>
        <Box display='flex' justifyContent='space-between'>
          <Rating size='small' value={Number(place.rating)} readOnly />
          <Typography gutterBottom variant='subtitle1'>
            Out of {place.num_reviews} Reviews
          </Typography>
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle1'>Price</Typography>
          <Typography gutterBottom variant='subtitle1'>
            {place.price_level}
          </Typography>
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle1'>Ranking</Typography>
          <Typography gutterBottom variant='subtitle1'>
            {place.ranking}
          </Typography>
        </Box>
        {/* {place?.awards?.map((award) => (
          <Box
            my={1}
            display='flex'
            justifyContent='space-between'
            alignItems='center'
          >
            <img src={award.images.small} alt={award.display_name}></img>
            <Typography variant='subtitle2' color='textSecondary'>
              {award.display_name}
            </Typography>
          </Box>
        ))} */}
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size='small' label={name} className={classes.name} />
        ))}
        {place?.address && (
          <Typography
            gutterBottom
            variant='body2'
            color='textSecondary'
            className={classes.subtitle}
          >
            <LocationOnIcon />
            {place.address}
          </Typography>
        )}
        {place?.phone && (
          <Typography
            gutterBottom
            variant='body2'
            color='textSecondary'
            className={classes.spacing}
          >
            <PhoneIcon />
            {place.phone}
          </Typography>
        )}
        {place?.distance_string && (
          <Typography
            gutterBottom
            variant='body2'
            color='textSecondary'
            className={classes.spacing}
          >
            <DirectionsIcon />
            {place.distance_string}
          </Typography>
        )}
        <CardActions>
          <Button
            size='small'
            color='primary'
            onClick={() => window.open(place.web_url, '_blank')}
          >
            Trip Advisor
          </Button>
          <Button
            size='small'
            color='primary'
            onClick={() => window.open(place.website, '_blank')}
          >
            Website
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;
