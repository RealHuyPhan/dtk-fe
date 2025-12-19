import React from "react";
import { Card, CardActionArea, CardContent, Typography, Box } from "@mui/material";

export default function CardInfo({
    title,
    description,
    icon
}) {
    return (
        <Box sx={{
            height: '15rem',
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

            <Typography color="text.secondary">
                {description}
            </Typography>
        </Box>
    );
}