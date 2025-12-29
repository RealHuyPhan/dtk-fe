import React from "react";
import { Typography, Box } from "@mui/material";

export default function CardInfoSquare({
    title,
    description,
    icon,
    isMiddle
}) {
    return (
        <Box sx={{
            width: '19rem',
            height: '17rem',
            boxShadow: 1,
            borderRadius: '0.8rem',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            background: '#ffffff',
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
                <Typography sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
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