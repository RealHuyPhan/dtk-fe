import React from 'react';
import { Box, Container, Grid, Typography, Stack, Divider, Button } from '@mui/material';

// Import Icons
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Custom TikTok Icon
const TikTokIcon = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
);

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                bgcolor: '#ffffff',
                color: '#1a1a1a',
                pt: 10,
                pb: 4,
                borderTop: '1px solid #f0f0f0',
                fontFamily: '"Roboto", sans-serif'
            }}
        >
            <Container > {/* Đổi sang xl để rộng hơn, thoáng hơn */}
                <Grid container spacing={{ xs: 6, md: 4 }} justifyContent="space-between">

                    {/* CỘT 1: THƯƠNG HIỆU & SOCIAL (Chiếm 4/12) */}
                    <Grid item xs={12} lg={4}>
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 900,
                                letterSpacing: '-0.5px',
                                mb: 3,
                                color: 'black',
                                display: 'inline-block',
                                position: 'relative',
                            }}
                        >
                            DTK MEDIA
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.8, maxWidth: '380px', fontSize: '0.95rem' }}>
                            Đối tác chiến lược hàng đầu trong lĩnh vực xây dựng thương hiệu cá nhân và vận hành Livestream thương mại điện tử chuyên nghiệp.
                        </Typography>

                        {/* Social Icons */}
                        <Stack direction="row" spacing={1.5}>
                            {[
                                { icon: <FacebookIcon fontSize="small" />, link: '#' },
                                { icon: <InstagramIcon fontSize="small" />, link: '#' },
                                { icon: <TikTokIcon size={18} />, link: '#' },
                                { icon: <YouTubeIcon fontSize="small" />, link: '#' }
                            ].map((social, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        width: 40, height: 40,
                                        borderRadius: '50%',
                                        border: '1px solid #e0e0e0',
                                        color: '#333',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            bgcolor: 'black',
                                            borderColor: 'black',
                                            color: 'white',
                                            transform: 'translateY(-3px)'
                                        }
                                    }}
                                >
                                    {social.icon}
                                </Box>
                            ))}
                        </Stack>
                    </Grid>

                    {/* CỘT 2: VĂN PHÒNG (Chiếm 3/12) */}
                    <Grid item xs={12} sm={6} lg={3}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 800, textTransform: 'uppercase', mb: 3, letterSpacing: '1px' }}>
                            Văn phòng
                        </Typography>

                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <LocationOnIcon sx={{ color: 'black', mt: 0.5 }} fontSize="small" />
                            <Box>
                                <Typography variant="body2" sx={{ fontWeight: 600, color: 'black', mb: 0.5 }}>
                                    TRỤ SỞ CHÍNH
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                                    Số 123, Đường ABC,<br />
                                    Quận XYZ, TP. Hồ Chí Minh<br />
                                    Việt Nam
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    {/* CỘT 3: KẾT NỐI (Chiếm 3/12) */}
                    <Grid item xs={12} sm={6} lg={3}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 800, textTransform: 'uppercase', mb: 3, letterSpacing: '1px' }}>
                            Thông tin
                        </Typography>

                        <Stack spacing={3}>
                            <Box sx={{ display: 'flex', gap: 2 }}>
                                <PhoneIcon sx={{ color: 'black', mt: 0.5 }} fontSize="small" />
                                <Box>
                                    <Typography variant="body2" sx={{ fontWeight: 600, color: 'black', mb: 0.5 }}>
                                        HOTLINE
                                    </Typography>
                                    <Typography variant="body1" sx={{ fontWeight: 500, color: '#333' }}>
                                        0912 345 678
                                    </Typography>
                                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                                        Mon - Fri, 8am - 6pm
                                    </Typography>
                                </Box>
                            </Box>

                            <Box sx={{ display: 'flex', gap: 2 }}>
                                <EmailIcon sx={{ color: 'black', mt: 0.5 }} fontSize="small" />
                                <Box>
                                    <Typography variant="body2" sx={{ fontWeight: 600, color: 'black', mb: 0.5 }}>
                                        EMAIL
                                    </Typography>
                                    <Typography variant="body1" sx={{ fontWeight: 500, color: '#333' }}>
                                        contact@dtkmedia.com
                                    </Typography>
                                </Box>
                            </Box>
                        </Stack>
                    </Grid>

                    {/* CỘT 4: NÚT BẤM (Chiếm 2/12) - Căn phải */}
                    <Grid item xs={12} lg={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'flex-start', lg: 'flex-end' } }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 800, textTransform: 'uppercase', mb: 3, letterSpacing: '1px', display: { xs: 'none', lg: 'block' }, opacity: 0 }}>
                            Action {/* Giữ chỗ để nút bấm thẳng hàng với tiêu đề các cột khác */}
                        </Typography>

                        <Button
                            variant="contained"
                            endIcon={<ArrowForwardIcon />}
                            sx={{
                                bgcolor: 'black',
                                color: 'white',
                                borderRadius: '0', // Vuông vức sang trọng
                                py: 1.5,
                                px: 4,
                                textTransform: 'none',
                                fontSize: '1rem',
                                fontWeight: 500,
                                boxShadow: 'none',
                                whiteSpace: 'nowrap',
                                transition: '0.3s',
                                '&:hover': {
                                    bgcolor: '#333',
                                    transform: 'translateX(5px)', // Hiệu ứng đẩy sang phải khi hover
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                                }
                            }}
                        >
                            Liên hệ tư vấn
                        </Button>
                        <Typography variant="caption" sx={{ mt: 1.5, color: 'text.secondary', display: { xs: 'none', lg: 'block' } }}>
                            Phản hồi trong 24h
                        </Typography>
                    </Grid>

                </Grid>

                {/* COPYRIGHT */}
                <Box sx={{ mt: 10, pt: 3, borderTop: '1px solid #f0f0f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.8rem' }}>
                        © 2025 DTK MEDIA. All rights reserved.
                    </Typography>

                    <Stack direction="row" spacing={4} divider={<Divider orientation="vertical" flexItem sx={{ height: 12, my: 'auto' }} />}>
                        <Typography variant="caption" sx={{ color: 'text.secondary', cursor: 'pointer', transition: '0.2s', '&:hover': { color: 'black' } }}>
                            Privacy Policy
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary', cursor: 'pointer', transition: '0.2s', '&:hover': { color: 'black' } }}>
                            Terms of Service
                        </Typography>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;