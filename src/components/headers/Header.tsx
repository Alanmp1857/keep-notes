import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" style={{ backgroundColor: "lightgoldenrodyellow" }}>
                <Toolbar>
                    <Link to="/"><img src="https://zeevector.com/wp-content/uploads/ITC-Logo-Vector.png" style={{ height: "50px", width: "50px" }} alt="logo" /></Link>
                    <Typography variant="h6" noWrap component="div" sx={{
                        mr: 2, ml: 2,
                        display: { md: 'flex' },
                        fontWeight: 700,
                        color: 'black',
                        textDecoration: 'none', flexGrow: 1
                    }}>
                        <Link to="/" style={{ textDecoration: "none", color: "black" }}>ITC Keep</Link>
                    </Typography>
                    <Link to="/register"><Button style={{ backgroundColor: "orange" }} variant="contained">Login</Button></Link>
                </Toolbar>
            </AppBar>
            {/* <div style={{ marginTop: "80px" }}>
                <Link to="/dashboard"><Button>Dashboard</Button></Link>
            </div> */}
        </Box>
    )
}

export default Header;