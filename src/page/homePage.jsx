import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Container, Grid, CircularProgress } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import {
    UsersRound, TrendingUp, CircleStar,
    Building2, Clapperboard, MonitorPlay,
    Brush, Scissors, Lightbulb
} from 'lucide-react';
import sample from '@/assets/background.mp4';
import CardInfo from '@/component/CardInfoRectangle';
import Poster3DSwiper from '@/component/Swpier';
import globalBg from '../assets/globalBG.png';

import { useGetCreatorQuery } from '@/store/helper/helperAction';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilterCreator, resetCreatorList, setListCreator } from '@/store/helper/helperSlice';

const servicesData = [
    { title: "ĐÀO TẠO VÀ QUẢN LÝ CREATORS", description: "Tìm kiếm, đào tạo và quản lý các tài năng trẻ thế hệ mới.", icon: <UsersRound size={28} /> },
    { title: "THƯƠNG HIỆU CÁ NHÂN", description: "Xây dựng phong cách độc đáo, khác biệt, phù hợp với hình ảnh cá nhân.", icon: <TrendingUp size={28} /> },
    { title: "VẬN HÀNH LIVESTREAM", description: "Điều phối và sản xuất hoạt động livestream trên nền tảng TikTok.", icon: <CircleStar size={28} /> },
    { title: "DTK MEDIA MCN", description: "Cung cấp các giải pháp gia tăng doanh thu cho các Creator trên các nền tảng.", icon: <CircleStar size={28} /> }
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
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};
const ServiceSection = () => {
    return (
        // 1. LỚP NGOÀI: Chịu trách nhiệm Full màn hình + Màu nền
        <Box
            component={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            sx={{ py: '4rem', bgcolor: '#f9f9f9', width: '100%' }}>
            {/* 2. LỚP TRONG: Container chuẩn (giống Footer) */}
            <Container maxWidth="lg">
                <Box sx={{ mb: 6, textAlign: 'center' }}>
                    <Typography component={motion.div} variants={fadeInUp} align="center" gutterBottom sx={{ fontWeight: 600, fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' } }}>
                        Dịch vụ của chúng tôi
                    </Typography>
                    <Typography component={motion.div} variants={fadeInUp} align="center" sx={{ fontSize: { xs: '1rem', md: '1.4rem' }, color: 'text.secondary', maxWidth: '800px', margin: '0 auto' }}>
                        Giải pháp toàn diện cho chiến lược marketing của bạn
                    </Typography>
                </Box>

                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: { xs: 2, md: 4 },
                    "@media (max-width: 900px)": { gridTemplateColumns: '1fr' }
                }}>
                    {servicesData.map((item, index) => (
                        <Box component={motion.div} variants={fadeInUp} sx={{ width: '100%' }} key={index}>
                            <CardInfo title={item.title} description={item.description} icon={item.icon} />
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box >
    );
};

const EcosystemSection = () => {
    return (
        // 1. LỚP NGOÀI: Full màn hình + Ảnh nền
        <Box
            component={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            sx={{
                py: '8rem',
                width: '100%',
                background: `url(${globalBg}) center center / cover no-repeat`,
                color: 'white',
                position: 'relative'
            }}
        >
            <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(0,0,0,0.6)', zIndex: 0 }} />

            {/* 2. LỚP TRONG: Container chuẩn (giống Footer và ServiceSection ở trên) */}
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography component={motion.div} variants={fadeInUp} variant="h3" sx={{ fontWeight: 'bold', textTransform: 'uppercase', mb: 1, fontSize: { xs: '1.8rem', md: '2.5rem' } }}>
                        Hệ sinh thái sản xuất
                    </Typography>
                </Box>

                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: { xs: 2, md: 4 },
                    '@media (max-width: 1080px)': { gridTemplateColumns: 'repeat(2, 1fr)' },
                    '@media (max-width: 600px)': { gridTemplateColumns: '1fr' }
                }}>
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
                                cursor: 'pointer'
                            }}
                        >
                            <Box sx={{ color: '#fff', minWidth: '40px' }}>{item.icon}</Box>
                            <Box>
                                <Typography variant="h6" fontWeight="bold" sx={{ fontSize: { xs: '0.9rem', md: '1.1rem' } }}>{item.title}</Typography>
                                <Typography variant="body2" sx={{ color: '#aaa', fontSize: '0.8rem' }}>{item.sub}</Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box >
    );
};


const Home = () => {
    const dispatch = useDispatch();
    const { filterCreator, listCreator } = useSelector((state) => state.helper);

    const [activeIndex, setActiveIndex] = useState(0);

    const activeCreator = listCreator?.[activeIndex];

    useEffect(() => {
        dispatch(resetCreatorList());
    }, [dispatch]);

    const [isReady, setIsReady] = useState(false);
    useEffect(() => {
        setIsReady(true);
    }, []);

    const shouldSkipInitialFetch = !isReady || (filterCreator.page > 1 && listCreator.length === 0);

    const { data: dataResponse, isFetching } = useGetCreatorQuery(filterCreator, {
        refetchOnMountOrArgChange: true,
        skip: shouldSkipInitialFetch,
    });

    useEffect(() => {
        if (dataResponse && !shouldSkipInitialFetch) {
            dispatch(setListCreator(dataResponse));
        }
    }, [dataResponse, dispatch, shouldSkipInitialFetch]);

    const handleActiveChange = (index) => {
        setActiveIndex(index);

        if (shouldSkipInitialFetch || isFetching) return;

        const meta = dataResponse?.meta?.pagination;
        if (!meta) return;

        const totalOnServer = meta.total;
        const currentLoadedCount = listCreator.length;

        if (currentLoadedCount === 0 || currentLoadedCount >= totalOnServer) return;

        const LOAD_MORE_OFFSET = 2;
        const isNearEnd = index >= currentLoadedCount - LOAD_MORE_OFFSET;

        if (isNearEnd && filterCreator.page < meta.pageCount) {
            dispatch(changeFilterCreator({
                ...filterCreator,
                page: filterCreator.page + 1
            }));
        }
    };

    return (
        <Box>
            <Box sx={{ position: 'relative', width: '100%', height: { xs: '60vh', sm: '70vh', md: 'calc(100vh - 64px)' }, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', color: 'white', bgcolor: 'black' }}>
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

            <Box sx={{ py: "8rem", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%' }}>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center' }}>OUR CREATORS</Typography>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', maxWidth: '1000px', textTransform: 'uppercase' }}>Meet our “livestream by passion” creator partners</Typography>
                </motion.div>

                <Box sx={{ width: '80%', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '8rem', alignItems: 'start', mt: 6, mx: 'auto', "@media (max-width: 1080px)": { gridTemplateColumns: '1fr', gap: '1rem' } }}>

                    {/* SWIPER */}
                    <Box width={'100%'}>
                        <Poster3DSwiper
                            autoPlayDelay={5000}
                            height={500}
                            images={listCreator.map(c => c?.image)}
                            onActiveChange={handleActiveChange}
                        />
                    </Box>

                    {/* THÔNG TIN CHI TIẾT */}
                    <Box>
                        <AnimatePresence mode='wait'>
                            {activeCreator && (
                                <motion.div
                                    // Dùng ID làm key để trigger animation
                                    key={activeCreator.id || activeIndex}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Typography variant="h5" fontWeight="bold">
                                        {activeCreator.fullName}
                                    </Typography>

                                    <Typography color="text.secondary" sx={{ mb: 2 }}>
                                        @{activeCreator.tagName}
                                    </Typography>

                                    <Grid container spacing={2} sx={{ mb: 2 }}>
                                        <Grid item>
                                            <Typography fontWeight="bold" variant="h6">
                                                {new Intl.NumberFormat('en-US', { notation: "compact", compactDisplay: "short" }).format(activeCreator.followers || 0)}
                                            </Typography>
                                            <Typography variant="caption" color="text.secondary">FOLLOWERS</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography fontWeight="bold" variant="h6">
                                                {/* Kiểm tra mảng categories có tồn tại và có phần tử không */}
                                                {activeCreator.categories?.[0]?.name || 'N/A'}
                                            </Typography>
                                            <Typography variant="caption" color="text.secondary">CATEGORY</Typography>
                                        </Grid>
                                    </Grid>

                                    <Typography sx={{ lineHeight: 1.8, color: '#555' }}>
                                        {activeCreator.description}
                                    </Typography>

                                    <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                                        {activeCreator.categories?.map((cat, idx) => (
                                            <Box key={cat.id || idx} sx={{ bgcolor: '#f0f0f0', px: 1, py: 0.5, borderRadius: 1, fontSize: '0.75rem', color: '#666' }}>
                                                {cat.name}
                                            </Box>
                                        ))}
                                    </Box>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </Box>
                </Box>
            </Box>

            <Box sx={{ py: "2.4rem", display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', backgroundColor: '#f9f9f9' }}>
                <ServiceSection />
            </Box>

            <Box sx={{ width: '100%' }}>
                <EcosystemSection />
            </Box>
        </Box>
    );
}

export default Home;