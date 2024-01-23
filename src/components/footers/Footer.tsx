import { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    const [value, setValue] = useState('facebook');

    const handleChange = (event: any, newValue: string) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation
            sx={{ width: 500 }}
            value={value}
            onChange={handleChange}
            style={{
                bottom: 0,
                position: "fixed",
                backgroundColor: "lightgoldenrodyellow",
                width: "100%",
            }}
        >
            <BottomNavigationAction
                label="Facebook"
                value="facebook"
                icon={<FacebookIcon />}
            />
            <BottomNavigationAction
                label="Instagram"
                value="instagram"
                icon={<InstagramIcon />}
            />
            <BottomNavigationAction
                label="Twitter"
                value="twitter"
                icon={<TwitterIcon />}
            />
            <BottomNavigationAction
                label="LinkedIn"
                value="linkedin"
                icon={<LinkedInIcon />}
            />
        </BottomNavigation>
    );
};

export default Footer;
