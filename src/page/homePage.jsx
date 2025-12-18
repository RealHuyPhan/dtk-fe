import { Box, Typography } from '@mui/material';
import React from 'react';
import sample from '@/assets/background.mp4';

const Home = () => {
    return (
        <Box>
            <Box sx={{
                position: 'relative',
                width: '100%',
                // Mobile: 60vh, iPad: 70vh, Desktop: 100vh trừ Navbar
                height: {
                    xs: '60vh',    // Mobile
                    sm: '70vh',    // iPad/Tablet
                    md: 'calc(100vh - 64px)' // Desktop
                },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                color: 'white',
                bgcolor: 'black' // Tránh bị trắng màn hình khi video chưa load kịp
            }}>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        top: 0,
                        left: 0,
                        objectFit: 'cover',
                    }}
                >
                    {/* <source src={sample} type='video/mp4' /> */}
                </video>

                <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 1
                }} />
            </Box>

            <Box sx={{ py: { xs: 5, md: 10 }, px: 2, bgcolor: '#f5f5f5' }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Các đối tác của chúng tôi
                </Typography>
            </Box>

            <Box sx={{ height: '500px', p: 5 }} />
        </Box>
    );
}

export default Home;