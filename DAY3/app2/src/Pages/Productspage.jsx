import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Productspage = () => {

    var [product, setProduct] = useState([])
    axios.get('https://fakestoreapi.com/products')
        .then((response) => {
            setProduct(response.data)
        })

    return (
       
        <div style={{padding:"20px"}}>
            <p style={{padding:"10px", fontSize:"20px", fontFamily:"sans-serif"}}>Productspage</p>
            
            <br />
             <Grid container spacing={2}>
            {product.map((pro=>(
                
                <Card sx={{ maxWidth: 345 }}>
                
                <CardActionArea>
                    <CardMedia
                    
                        component="img"
                        height="140"
                        image={pro.image}
                        alt={pro.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {pro.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Order now
                    </Button>
                </CardActions>
            </Card>

            )))}
            

             </Grid>
        </div>
       
    )
}

export default Productspage