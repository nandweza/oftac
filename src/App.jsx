import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import About from './pages/about/About';
import Blog from './pages/blog/Blog';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';
import Login from './pages/login/Login';
import Admin from './pages/admin/Admin';
import ListProjects from './pages/listProjects/ListProjects';
import ListPosts from './pages/listPosts/ListPosts';
import ProjectDetail from './pages/projectDetail/ProjectDetail';
import PrivateRoute from './components/PrivateRoute';
import { useState, useEffect } from 'react';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    }

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
    }

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <Router>
            <Routes>
                <Route 
                    exact 
                    path='/' 
                    element={<Home />} 
                />
                <Route 
                    exact 
                    path='/about' 
                    element={<About />} 
                />
                <Route 
                    exact 
                    path='/blog' 
                    element={<Blog />} 
                />
                <Route 
                    exact
                    path='/project'
                    element={<Projects />}
                />
                <Route 
                    exact 
                    path='/contact' 
                    element={<Contact />} 
                />
                <Route 
                    path="/project/:projectId" 
                    element={<ProjectDetail />} 
                />
                <Route
                    exact
                    path='/login'
                    element={<Login onLogin={handleLogin} />}
                />
                <Route
                    path='/admin'
                    element={
                        <PrivateRoute 
                            element={<Admin onLogout={handleLogout} />}
                            isLoggedIn={isLoggedIn}
                        />
                    }
                />
                <Route
                    path='/projects'
                    element={
                        <PrivateRoute 
                            element={<ListProjects onLogout={handleLogout}/>}
                            isLoggedIn={isLoggedIn}
                        />
                    }
                />
                <Route
                    path='/posts'
                    element={
                        <PrivateRoute 
                            element={<ListPosts onLogout={handleLogout}/>}
                            isLoggedIn={isLoggedIn}
                        />
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
