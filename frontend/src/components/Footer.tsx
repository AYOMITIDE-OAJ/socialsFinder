import React from "react";
import Box from '@mui/material/Box';
import { style } from "@mui/system";




const Footer = () => {
    return (
        <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            sx={{
                position: 'relative',
                marginTop: '1rem',
                width: '100%',
                color: '#d1dce6',
                fontSize: '16px',
                fontFamily: 'Comfortaa',
                img: {
                    transform: 'translateY(5px)',
                },
            }}
        >


            <div
                style={{
                    padding: '10px',
                }}
            >
                Made with {' '}
                <img src={'https://img.icons8.com/material/20/ec5f67/hearts.png'} alt="heart" />
                {' '} by <a style={{ textDecoration: 'none', color: '#6699cc' }} href="https://github.com/ayomitide-oaj">ayomitideoaj</a>
            </div>


        </Box>

    );
}

export default Footer