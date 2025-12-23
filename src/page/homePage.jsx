import React, { useState } from 'react';
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
import creator5 from '../assets/creator/creator5.jpg';
import creator6 from '../assets/creator/creator6.jpg';

const creatorsData = {
    creator1: {
        name: "Lê Minh Travel",
        ig: "@leminh_wonders",
        FOLLOWERS: 1200000,
        CATEGORIES: ["Travel", "Photography", "Adventure"],
        description: "Khám phá vẻ đẹp Việt Nam và thế giới qua lăng kính cinematic.",
        image: creator1
    },
    creator2: {
        name: "Sarah Cooking",
        ig: "@sarah.bakes",
        FOLLOWERS: 850000,
        CATEGORIES: ["Food", "Lifestyle", "Baking"],
        description: "Chia sẻ công thức làm bánh healthy và lối sống tối giản.",
        image: creator2
    },
    creator3: {
        name: "Tech Với Huy",
        ig: "@huy.techreview",
        FOLLOWERS: 45000,
        CATEGORIES: ["Technology", "Review", "Gadgets"],
        description: "Review chân thực các sản phẩm công nghệ mới nhất.",
        image: creator3
    },
    creator4: {
        name: "Fit & Strong",
        ig: "@fit.tuannguyen",
        FOLLOWERS: 320000,
        CATEGORIES: ["Fitness", "Health", "Motivation"],
        description: "Huấn luyện viên cá nhân online. Thay đổi vóc dáng và tư duy.",
        image: creator4
    },
    creator5: {
        name: "Mộc Art",
        ig: "@moc.art.studio",
        FOLLOWERS: 150000,
        CATEGORIES: ["Art", "Design", "DIY"],
        description: "Nơi chia sẻ các tác phẩm hội họa và hướng dẫn làm đồ thủ công.",
        image: creator5
    },
    creator6: {
        name: "Mộc Art",
        ig: "@moc.art.studio",
        FOLLOWERS: 150000,
        CATEGORIES: ["Art", "Design", "DIY"],
        description: "Nơi chia sẻ các tác phẩm hội họa và hướng dẫn làm đồ thủ công.",
        image: creator6
    }
};

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
            sx={{ py: '6rem' }}
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
                py: '6rem',
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
    const creatorsArray = Object.values(creatorsData);
    const [currentIndex, setCurrentIndex] = useState(0);

    const activeCreator = creatorsArray[currentIndex];
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
                py: "8rem",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                width: '100%',
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
                    mx: 'auto', // Canh giữa màn hình
                    "@media (max-width: 1080px)": {
                        gridTemplateColumns: '1fr',
                        gap: '1rem',
                    },
                }}>
                    {/* PHẦN 1: SWIPER 3D */}
                    <Box width={'100%'}>
                        <Poster3DSwiper
                            autoPlayDelay={5000}
                            height={500}
                            // Truyền mảng các đường dẫn ảnh vào đây
                            images={creatorsArray.map(c => c.image)}
                            // Nhận lại index đang active để update Text
                            onActiveChange={(index) => setCurrentIndex(index)}
                        />
                    </Box>

                    {/* PHẦN 2: TEXT INFO (Render data động) */}
                    <Box
                        // Dùng AnimatePresence và key để tạo hiệu ứng fade khi đổi text
                        component={motion.div}
                        key={currentIndex} // Quan trọng: key thay đổi thì animation sẽ chạy lại
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Typography variant="h5" fontWeight="bold">
                            {activeCreator.name}
                        </Typography>

                        <Typography color="text.secondary" sx={{ mb: 2 }}>
                            {activeCreator.ig}
                        </Typography>

                        <Grid container spacing={2} sx={{ mb: 2 }}>
                            <Grid item>
                                <Typography fontWeight="bold" variant="h6">
                                    {/* Format số followers cho đẹp (VD: 1.200.000) */}
                                    {new Intl.NumberFormat('en-US', { notation: "compact", compactDisplay: "short" }).format(activeCreator.FOLLOWERS)}
                                </Typography>
                                <Typography variant="caption" color="text.secondary">FOLLOWERS</Typography>
                            </Grid>
                            <Grid item>
                                <Typography fontWeight="bold" variant="h6">
                                    {/* Lấy category đầu tiên hoặc join tất cả */}
                                    {activeCreator.CATEGORIES[0]}
                                </Typography>
                                <Typography variant="caption" color="text.secondary">CATEGORY</Typography>
                            </Grid>
                        </Grid>

                        <Typography sx={{ lineHeight: 1.8, color: '#555' }}>
                            {activeCreator.description}
                        </Typography>

                        <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                            {activeCreator.CATEGORIES.map((cat, idx) => (
                                <Box key={idx} sx={{
                                    bgcolor: '#f0f0f0',
                                    px: 1, py: 0.5,
                                    borderRadius: 1,
                                    fontSize: '0.75rem',
                                    color: '#666'
                                }}>
                                    {cat}
                                </Box>
                            ))}
                        </Box>
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