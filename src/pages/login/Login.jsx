// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import './login.css';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
// import axios from 'axios';

const Login = (/*{ onLogin }*/) => {
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    // const navigate = useNavigate();

    // const loginUser = async (username, password) => {
    //     try {
    //       const response = await axios.post('http://127.0.0.1:8000/api/auth/login', {
    //         username,
    //         password,
    //       });
    //       return response.data;
    //     } catch (error) {
    //       throw error.response.data;
    //     }
    //   };
      

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     try {
    //         const token = await loginUser(username, password);
    //         localStorage.setItem('token', token);

    //         onLogin();
    //         navigate('/task');
    //     } catch(err) {
    //         console.log(err);
    //     }
    // };

    return (
        <>
        <div className="container-fluid login-container d-flex align-items-center justify-content-center">
            <div className="login-form">
                <h2 className='px-2'>Login</h2>
                <form>
                    <div className="form-group p-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            // value={username}
                            // onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group p-2">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            // value={password}
                            // onChange={(e) => setPassword(e.target.value)}
                            required
                            />
                    </div>
                    <div className="form-group p-2">
                        <button 
                            type="submit"
                            className="btn btn-lg btn-primary"
                            >
                            Log In
                        </button>
                    </div>
                </form>
                <div className="form-text text-center py-2">
                    Forgot <strong>Password</strong>? <a href="/#">Reset here</a>
                </div>
                <div className='back text-center pt-3'>
                    <a href='/'>
                        <KeyboardBackspaceIcon />
                        <span className='px-2'>Go to oftac-ug.org</span>
                    </a>
                </div>
            </div>
        </div>
        </>
    );
};

export default Login;