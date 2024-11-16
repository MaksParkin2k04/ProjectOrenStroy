import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import '../Containers/App.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';


const headerCard = ['ЖК "Вишенки"']
const discription = ['ул.Ткачева, Советский район' ]
const price = ['От 5 000 000  ₽']
export default function RowAndColumnSpacing() {
    return (
        <Box className="Grid" sx={{ width: '100%' }}>
            <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid size={6}>

                     
                        <ActionAreaCard />

                </Grid>
                <Grid size={6}>

                       
                       <ActionAreaCard2 />

                </Grid>
                <Grid size={6}>

                     
                        <ActionAreaCard3 />

                </Grid>
                <Grid size={6}>
        
 
                        < ActionAreaCard4 />
                   
                </Grid>
            </Grid>
        </Box>

    );
}

function ActionAreaCard() {
    return (
        <Card sx={{ maxWidth: 1540, display: 'flex', justifyContent: 'space-between', flexDirection: 'column'  }}>
            <CardActionArea>
                <CardContent >
                    <Typography gutterBottom variant="h5" component="div"

                    >
                        {headerCard.map((pages) => (
                            <Typography key={pages}>
                                <Typography sx={{ textAlign: 'left' }}>{pages}</Typography>
                            </Typography>
                        ))}
                       
                    </Typography>
 
                </CardContent>

                <CardMedia
                    component="img"
                    maxHeight = '500'
                    image="../src/assets/1-522155.jpg"
                    alt="green iguana"
                    sx={{ objectFit: "contain" }}
                />
                <CardContent>
                    {price.map((price) => (
                        <Typography key={price}>
                            <Typography sx={{ textAlign: 'left' }}>{price}</Typography>
                        </Typography>
                    ))}
                    {discription.map((price) => (
                        <Typography key={price}>
                            <Typography sx={{ textAlign: 'left' }}>{price}</Typography>
                        </Typography>
                    ))}
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

function ActionAreaCard2() {
    return (
        <Card sx={{ maxWidth: 1540, display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        ЖК "Квартет"
                    </Typography>

                </CardContent>

                <CardMedia
                    component="img"
                   
                    image="../src/assets/0101055.jpg"
                    alt="green iguana"
                    sx={{ objectFit: "contain" }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        От 4500000
                    </Typography>
                    
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

function ActionAreaCard3() {
    return (
        <Card sx={{ maxWidth: 1540 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    width="1540"
                    image="../src/assets/1-522155.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

function ActionAreaCard4() {
    return (
        <Card sx={{ maxWidth: 1540 }}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>

                <CardMedia
                    component="img"
                    width="1540"
                    image="../src/assets/1-522155.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

