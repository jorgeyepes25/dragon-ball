import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import axios from 'axios';

const CharacterDetailPage = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        axios.get(`https://dragonball-api.com/api/characters/${id}`)
            .then(response => {
                setCharacter(response.data);
            })
            .catch(error => {
                console.error("Error al cargar el personaje:", error);
            });
    }, [id]);

    if (!character) return <Typography>Cargando...</Typography>;

    return (
        <Box 
            display="flex" 
            justifyContent="center" 
            alignItems="center" 
            width="92vw"
            marginRight={0}
            marginLeft={3}
            minHeight="100vh" 
            bgcolor="#1c1c1c" 
            padding="20px"
        >
            <Card 
                sx={{
                    display: 'flex', 
                    flexDirection: 'row', 
                    width: '100vw', 
                    maxWidth: '1200px',
                    bgcolor: '#3c3f41', 
                    color: 'white', 
                    padding: 2
                }}
            >
                <CardMedia
                    component="img"
                    image={character.image}
                    alt={character.name}
                    sx={{ width: 300, height: 'auto', objectFit: 'contain' }}
                />
                <CardContent sx={{ flex: '1', padding: 3 }}>
                    <Typography component="div" variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                        {character.name}
                    </Typography>
                    <Typography variant="body1" color="white" sx={{ mb: 2 }}>
                        {character.description}
                    </Typography>
                    <Typography variant="body2" color="white">
                        <strong>Race:</strong> {character.race} | <strong>Ki:</strong> {character.ki}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default CharacterDetailPage;
