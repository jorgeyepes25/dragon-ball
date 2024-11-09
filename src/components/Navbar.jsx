import { AppBar, Toolbar, IconButton, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const handleIconClick = () => {
        navigate('/');
    };

    return (
        <AppBar position="fixed" style={{ backgroundColor: '#282c34', padding: '0 20px' }}>
            <Toolbar>
                <IconButton edge="start" color="inherit" onClick={handleIconClick}>
                    <img
                        src="https://cdn2.iconfinder.com/data/icons/dragonball-z-colored/48/Cartoons__Anime_Dragonball_Artboard_2-256.png"
                        alt="App Icon"
                        style={{ width: 40, height: 40 }}
                    />
                    <span style={{ marginLeft: '10px' }}>Dragon Ball</span>
                </IconButton>
                <div style={{ flexGrow: 1 }} />
                <Button color="inherit" onClick={() => navigate('/docs')}>Docs</Button>
                <Button color="inherit" onClick={() => navigate('/about')}>About</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
