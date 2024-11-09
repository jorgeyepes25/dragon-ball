import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import Navbar from './components/Navbar';

const Layout = ({ children }) => {
    return (
        <Box 
            display="flex" 
            flexDirection="column" 
            alignItems="center" 
            minHeight="100vh" 
            bgcolor="#1c1c1c" 
            padding="20px"
            sx={{ paddingTop: '64px' }} 
        >
            <Navbar />
            {children}
        </Box>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
