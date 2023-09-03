import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import About from './pages/about/About';
import Blog from './pages/blog/Blog';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';
import Login from './pages/login/Login';
import Admin from './pages/admin/Admin';

function App() {
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
          path='/projects'
          element={<Projects />}
        />
        <Route 
          exact 
          path='/contact' 
          element={<Contact />} 
        />
        <Route
          exact
          path='/login'
          element={<Login />}
        />
        <Route 
          exact
          path='/admin'
          element={<Admin />}
        />
      </Routes>
    </Router>
  );
}

export default App;
