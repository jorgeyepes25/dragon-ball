import { Box, Button } from '@mui/material';
import PropTypes from 'prop-types';

const Filters = ({ filter, onFilterChange }) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginBottom: 2 }}>
            <Button variant={filter === 'all' ? 'contained' : 'outlined'} onClick={() => onFilterChange('all')}>
                Todos
            </Button>
            <Button variant={filter === 'human' ? 'contained' : 'outlined'} onClick={() => onFilterChange('human')}>
                Humanos
            </Button>
            <Button variant={filter === 'non-human' ? 'contained' : 'outlined'} onClick={() => onFilterChange('non-human')}>
                No Humanos
            </Button>
        </Box>
    );
};

Filters.propTypes = {
    filter: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired,
};

export default Filters;
