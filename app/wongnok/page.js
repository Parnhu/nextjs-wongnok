import React from 'react'
import { 
  Box, CardActions, CardContent, CardMedia, Button, Typography, Grid , Rating
} from '@mui/material'

export async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/wongnok`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function page() {
  if (!process.env.NEXT_PUBLIC_API_URL) {
    return null
  }
  const data = await getData()
  return (
    <div>
      <Typography variant='h5'>Wongnok</Typography>
      <Grid container spacing={1}>
        {data.map(wongnok => (
          <Grid item key={wongnok.id} xs={12} md={4}>
            <Box sx={{ bgcolor: 'background.paper', p: 2, borderRadius: 8, boxShadow: 3 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={wongnok.coverimage}
                title={wongnok.name}               
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {wongnok.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" noWrap>
                  {wongnok.detail}
                </Typography>
                <Rating name="read-only" value={wongnok.rating} readOnly />
              </CardContent>
              <CardActions>
                <a href={`/wongnok/${wongnok.id}`}>
                  <Button size="small">Learn More</Button>
                </a>                                
              </CardActions>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
