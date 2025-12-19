import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion'; // Import animation library
import {
    UsersRound, TrendingUp, CircleStar,
    Building2, Clapperboard, MonitorPlay,
    Brush, Scissors, Lightbulb
} from 'lucide-react';

// Import assets
import sample from '@/assets/background.mp4';
import CardInfo from '@/component/CardInfo';
import Poster3DSwiper from '@/component/Swpier';

import globalBg from '../assets/globalBG.png';

import creator1 from '../assets/creator/creator1.png';
import creator2 from '../assets/creator/creator2.png';
import creator3 from '../assets/creator/creator3.png';
import creator4 from '../assets/creator/creator4.png';
import creator5 from '../assets/creator/creator5.png';

// --- DATA ---
const servicesData = [
    {
        title: "ĐÀO TẠO VÀ QUẢN LÝ CREATORS",
        description: "Tìm kiếm, đào tạo và quản lý các tài năng trẻ thế hệ mới.",
        icon: <UsersRound size={28} />
    },
    {
        title: "PHÁT TRIỂN THƯƠNG HIỆU CÁ NHÂN",
        description: "Xây dựng phong cách độc đáo, khác biệt, phù hợp với hình ảnh cá nhân.",
        icon: <TrendingUp size={28} />
    },
    {
        title: "VẬN HÀNH LIVESTREAM",
        description: "Điều phối và sản xuất hoạt động livestream trên nền tảng TikTok.",
        icon: <CircleStar size={28} />
    },
    {
        title: "DTK MEDIA MCN",
        description: "Cung cấp các giải pháp gia tăng doanh thu cho các Creator trên các nền tảng.",
        icon: <CircleStar size={28} />
    }
];

const ecosystemData = [
    { title: "SÀN 1000M2", sub: "Livestream Studio", icon: <Building2 size={32} /> },
    { title: "THIẾT BỊ PRO", sub: "Camera & Lighting", icon: <Clapperboard size={32} /> },
    { title: "BIÊN ĐẠO", sub: "Dàn dựng & Biểu diễn", icon: <Scissors size={32} /> },
    { title: "MAKEUP", sub: "Tạo hình nhân vật", icon: <Brush size={32} /> },
    { title: "HẬU KỲ", sub: "Edit & VFX", icon: <MonitorPlay size={32} /> },
    { title: "SÁNG TẠO", sub: "Kịch bản & Content", icon: <Lightbulb size={32} /> },
];

const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};


const ServiceSection = () => {
    return (
        <Box
            component={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
        >
            <Box sx={{ mb: 6, textAlign: 'center' }}>
                <Typography
                    component={motion.div} variants={fadeInUp} // Animation
                    align="center" gutterBottom
                    sx={{
                        fontWeight: 600,
                        fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                    }}>
                    Dịch vụ của chúng tôi
                </Typography>

                <Typography
                    component={motion.div} variants={fadeInUp} // Animation
                    align="center"
                    sx={{
                        fontSize: { xs: '1rem', md: '1.4rem' },
                        color: 'text.secondary',
                        maxWidth: '800px',
                        margin: '0 auto'
                    }}>
                    Giải pháp toàn diện cho chiến lược marketing của bạn
                </Typography>
            </Box>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Box sx={{
                    width: '80%',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '1.6rem',
                    justifyContent: 'center',
                    alignItems: 'center',
                    "@media (max-width: 1080px)": {
                        gridTemplateColumns: '1fr',
                        gap: '1rem',
                    },
                }}>
                    {servicesData.map((item, index) => (
                        <Box
                            component={motion.div} variants={fadeInUp} // Animation từng thẻ
                            sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                            key={index}
                        >
                            <CardInfo
                                title={item.title}
                                description={item.description}
                                icon={item.icon}
                            />
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box >
    );
};

const EcosystemSection = () => {
    return (
        <Box
            sx={{
                py: 8,
                background: `url(${globalBg}) center center / cover no-repeat`,
                color: 'white',
                position: 'relative',
            }}
            component={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}>
            <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(0,0,0,0.6)', zIndex: 0 }} />

            <Box sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography
                        component={motion.div} variants={fadeInUp}
                        variant="h3" sx={{ fontWeight: 'bold', textTransform: 'uppercase', mb: 1, fontSize: { xs: '1.8rem', md: '2.5rem' } }}
                    >
                        Hệ sinh thái sản xuất
                    </Typography>
                </Box>

                <Container maxWidth="lg">
                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: 3,
                            '@media (max-width: 1080px)': {
                                gridTemplateColumns: 'repeat(2, 1fr)',
                            },
                            '@media (max-width: 600px)': {
                                gridTemplateColumns: '1fr',
                            }
                        }}
                    >
                        {ecosystemData.map((item, index) => (
                            <Box
                                key={index}
                                component={motion.div}
                                variants={fadeInUp}
                                whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
                                sx={{
                                    p: 3,
                                    height: '100%',
                                    borderRadius: '16px',
                                    border: '1px solid rgba(255,255,255,0.15)',

                                    bgcolor: 'rgba(0, 0, 0, 0.75)',
                                    backdropFilter: 'blur(10px)',
                                    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                                    // ------------------------------

                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 2,
                                    transition: '0.3s',
                                    cursor: 'pointer',
                                }}
                            >
                                <Box sx={{ color: '#fff' }}>{item.icon}</Box>
                                <Box>
                                    <Typography variant="h6" fontWeight="bold" sx={{ fontSize: { xs: '0.9rem', md: '1.1rem' } }}>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#aaa', fontSize: '0.8rem' }}>
                                        {item.sub}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Container>
            </Box>
        </Box >
    );
};

const Home = () => {
    return (
        <Box>
            {/* HERO SECTION */}
            <Box sx={{
                position: 'relative',
                width: '100%',
                height: {
                    xs: '60vh',
                    sm: '70vh',
                    md: 'calc(100vh - 64px)'
                },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                color: 'white',
                bgcolor: 'black'
            }}>
                <video
                    autoPlay loop muted playsInline
                    style={{
                        position: 'absolute', width: '100%', height: '100%',
                        top: 0, left: 0, objectFit: 'cover',
                    }}
                >
                    <source src={sample} type='video/mp4' />
                </video>
            </Box>

            {/* CREATOR SECTION */}
            <Box sx={{
                py: "2.4rem",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                width: '100%',
                overflow: 'hidden' // Tránh lỗi scroll ngang khi animation bay vào
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center' }}>
                        OUR CREATORS
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', maxWidth: '1000px', textTransform: 'uppercase' }}>
                        Meet our “livestream by passion”
                        creator partners
                    </Typography>
                </motion.div>

                <Box sx={{
                    width: '80%',
                    display: 'grid',
                    gridTemplateColumns: '1.4fr 1fr',
                    gap: '8rem',
                    alignItems: 'start',
                    mt: 6,
                    "@media (max-width: 1080px)": {
                        gridTemplateColumns: '1fr',
                        gap: '1rem',
                    },
                }}>
                    <Box width={'100%'}>
                        <Poster3DSwiper
                            autoPlayDelay={5000}
                            height={500}
                            images={[creator1, creator2, creator3, creator4, creator5]}
                        />
                    </Box>

                    {/* Phần text Creator có animation trượt từ phải sang */}
                    <Box
                        component={motion.div}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Typography variant="h5" fontWeight="bold">
                            Diep Bao Ngoc Actress
                        </Typography>
                        <Typography color="text.secondary" sx={{ mb: 2 }}>
                            @diepbaongoc18
                        </Typography>

                        <Grid container spacing={2} sx={{ mb: 2 }}>
                            <Grid >
                                <Typography fontWeight="bold" variant="h6">1.2M</Typography>
                                <Typography variant="caption" color="text.secondary">FOLLOWERS</Typography>
                            </Grid>
                            <Grid >
                                <Typography fontWeight="bold" variant="h6">Actress</Typography>
                                <Typography variant="caption" color="text.secondary">CATEGORIES</Typography>
                            </Grid>
                        </Grid>

                        <Typography sx={{ lineHeight: 1.8, color: '#555' }}>
                            Diep Bao Ngoc is a movie actor who is gaining attention after the success of the movie Flip Face 6. As a model and actress who emerged from the Miss Teen 2010 contest, Diep not only possesses a beautiful face, Bao Ngoc also has an honest and flexible acting style that makes the audience love him.
                        </Typography>
                    </Box>
                </Box>
            </Box>

            {/* SERVICE SECTION */}
            <Box sx={{
                py: "2.4rem",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                backgroundColor: '#f9f9f9'
            }}>
                <ServiceSection />
            </Box>

            {/* ECOSYSTEM SECTION (MỚI THÊM) */}
            <Box sx={{ width: '100%' }}>
                <EcosystemSection />
            </Box>
        </Box>
    );
}

export default Home;