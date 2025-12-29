import React from "react";
import { Typography, Box } from "@mui/material";

export default function CardInfoRectangle({
    title,
    description,
    icon,
    isMiddle
}) {
    return (
        <Box sx={{
            minHeight: '15rem',
            height: '14rem',
            "@media (max-width: 1080px)": {
                height: '16rem'
            },
            width: '100%',
            boxShadow: 1,
            borderRadius: '0.8rem',
            border: 'none',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            background: '#ffffff'

        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: isMiddle ? 'center' : 'none',
                gap: '1.2rem'
            }}>
                <Box
                    sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 'fit-content',
                        padding: '0.8rem',
                        borderRadius: 2,
                        color: '#9333ea',
                        background: 'linear-gradient(to right, #f3e8ff, #fce7f3)',
                    }}
                >
                    {icon}
                </Box>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                    {title}
                </Typography>
            </Box>
            <Box sx={{ width: '100%' }}>
                <Typography
                    color="text.secondary"
                    sx={{
                        textAlign: isMiddle ? 'center' : 'left'
                    }}
                >
                    {description}
                </Typography>
            </Box>
        </Box>
    );
}