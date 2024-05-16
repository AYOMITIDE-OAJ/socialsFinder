import React from "react";
import Box from '@mui/material/Box';




const Header = () => {
    return (
        <Box
            display={'flex'}
            flexDirection={'column'}
            padding={6}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <img src="https://user-images.githubusercontent.com/27065646/53551960-ae4dff80-3b3a-11e9-9075-cef786c69364.png" alt="logo"
                style={{ width: '150px', height: 'auto' }}
            />
            <br />
            <h2> SocialsFinder </h2>
        </Box >
    );
}

export default Header