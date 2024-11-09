import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './pages/HomePage';
import CharacterDetailPage from './pages/CharacterDetailPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout><HomePage /></Layout>} />
                <Route path="/character/:id" element={<Layout><CharacterDetailPage /></Layout>} />
            </Routes>
        </Router>
    );
};

export default App;
