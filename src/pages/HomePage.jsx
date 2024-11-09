import { useEffect, useState } from 'react';
import { Box, Typography, Pagination } from '@mui/material';
import axios from 'axios';
import CharacterCard from '../components/CharacterCard';
import Filters from '../components/Filters';
import Layout from '../Layout';

const HomePage = () => {
    const [characters, setCharacters] = useState([]);
    const [filteredCharacters, setFilteredCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState('all');
    const itemsPerPage = 10;

    useEffect(() => {
        axios.get(`https://dragonball-api.com/api/characters?limit=100`)
            .then(response => {
                if (response.data.items) {
                    setCharacters(response.data.items);
                    applyFilter(response.data.items, filter);
                    setError(null);
                } else {
                    setError("La respuesta de la API no es válida.");
                }
            })
            .catch(error => {
                console.error(error);
                setError("Hubo un error al cargar los personajes.");
            });
    }, [filter]);

    const applyFilter = (characters, filterType) => {
        let filtered = characters;
        
        if (filterType === 'human') {
            filtered = characters.filter(character => character.race === 'Human');
        } else if (filterType === 'non-human') {
            filtered = characters.filter(character => character.race !== 'Human');
        }

        setFilteredCharacters(filtered);
        setTotalPages(Math.ceil(filtered.length / itemsPerPage));
        setCurrentPage(1);
    };

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
        applyFilter(characters, newFilter);
    };

    const handlePageChange = (event, page) => {
        setCurrentPage(page);
    };

    const displayedCharacters = filteredCharacters.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <Layout>
            <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', margin: '20px 0' }}>
                The Dragon Ball API
            </Typography>

            {error && <Typography color="error">{error}</Typography>}

            <Filters filter={filter} onFilterChange={handleFilterChange} />

            <Box 
                display="flex" 
                flexWrap="wrap" 
                justifyContent="center" 
                alignItems="center"
                gap={3} 
                bgcolor="#282c34" 
                padding="20px"
                width="100%" 
                minHeight="60vh"
            >
                {displayedCharacters.map(character => (
                    <CharacterCard key={character.id} character={character} />
                ))}
            </Box>

            <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                color="primary"
                sx={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
            />

            <Typography variant="body1" sx={{ marginTop: '10px', color: 'white' }}>
                Página {currentPage} de {totalPages}
            </Typography>
        </Layout>
    );
};

export default HomePage;
