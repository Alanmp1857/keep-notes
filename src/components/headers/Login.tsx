import React, { useState } from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { getAllUsers } from '../../services/registerService';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await getAllUsers();
            const users = response.data;

            // Find the user with the provided username
            const user = users.find((u: { username: string; password: string }) => u.username === username && u.password === password);

            if (user) {
                // Login successful
                setLoginError('');
                alert('Login success');
                // Redirect or perform further actions as needed
                navigate("/dashboard")
            } else {
                // User not found or password incorrect
                setLoginError('User not found or password incorrect');
            }
        } catch (error) {
            console.error('Error fetching users', error);
            setLoginError('Error during login');
        }
    };

    return (
        <div>
            <Box
                component="form"
                sx={{
                    border: '1px grey',
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#ffdf00',
                    borderRadius: "10px",
                    padding: "30px",
                    margin: "100px 100px 20px 100px"
                }}
                autoComplete="off"
            >
                <h1 style={{ textAlign: "center" }}>Login Page</h1>
                {/* username */}
                <TextField
                    id="outlined-basic"
                    name='username'
                    label="Username"
                    variant="outlined"
                    sx={{ margin: "10px" }}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                {/* password */}
                <TextField
                    id="outlined-basic"
                    name='password'
                    label="Password"
                    type="password"
                    variant="outlined"
                    sx={{ margin: "10px" }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {/* Login button */}
                <Button
                    sx={{ margin: 1, backgroundColor: "orange", color: "white" }}
                    type='button' // Change to 'button' to prevent form submission
                    onClick={handleLogin}
                >
                    Login
                </Button>

                {/* Display login error */}
                <div style={{ color: 'red', margin: '10px' }}>
                    {loginError}
                </div>
            </Box>
        </div>
    )
}

export default Login;
