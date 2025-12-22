import CardInfo from '@/component/CardInfo';
import { Box, Typography, Container, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion'; // Import animation library

import React from 'react';
import {
    UsersRound, TrendingUp, CircleStar,
    Building2, Clapperboard, MonitorPlay,
    Brush, Scissors, Lightbulb
} from 'lucide-react';

const servicesData = [
    {
        title: "Targeting chính xác",
        description: "Tiếp cận đúng đối tượng khách hàng mục tiêu thông qua creator phù hợp.",
        icon: <UsersRound size={28} />
    },
    {
        title: "Tăng trưởng bền vững",
        description: "Xây dựng chiến lược dài hạn với hiệu quả đo lường được.",
        icon: <TrendingUp size={28} />
    },
    {
        title: "Phân tích chi tiết",
        description: "Báo cáo và insights về hiệu quả chiến dịch.",
        icon: <CircleStar size={28} />
    },
    {
        title: "Bảo mật thông tin",
        description: "Cam kết bảo vệ thông tin và quyền lợi của thương hiệu.",
        icon: <CircleStar size={28} />
    },
    {
        title: "Đội ngũ chuyên nghiệp",
        description: "Được hỗ trợ bởi team có kinh nghiệm trong ngành.",
        icon: <CircleStar size={28} />
    },
    {
        title: "Triển khai nhanh chóng",
        description: "Khởi động chiến dịch trong thời gian ngắn.",
        icon: <CircleStar size={28} />
    }
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



const BrandPage = () => {

    return (
        <Box>
            <Box sx={{
                background: 'linear-gradient(135deg, #eff6ff 0%, #faf5ff 50%, #fdf2f8 100%)',
                py: "8rem",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                width: '100%',
            }}>
                <Box sx={{
                    width: '80%',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '8rem',
                    alignItems: 'start',
                    mt: 6,
                    "@media (max-width: 1080px)": {
                        gridTemplateColumns: '1fr',
                        gap: '1rem',
                    },
                }}>
                    <Box component={motion.div}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', mb: 3, fontSize: { xs: '2.5rem', md: '3.75rem' }, lineHeight: 1.2 }}>
                            Nâng tầm
                            <Box component="span" sx={{
                                display: 'block',
                                background: 'linear-gradient(to right, #2563eb, #9333ea)', // blue-600 to purple-600
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}>
                                Thương hiệu của bạn
                            </Box>
                        </Typography>

                        <Typography variant="h6" sx={{ color: 'text.secondary', mb: 4, fontWeight: 400 }}>
                            Kết nối với hàng nghìn creator chất lượng cao để tạo nên những
                            chiến dịch marketing đột phá và tăng trưởng doanh số vượt trội
                        </Typography>
                        <Button
                            component={motion.button}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            variant="contained"
                            size="large"
                            sx={{
                                background: 'linear-gradient(to right, #2563eb, #9333ea)',
                                color: 'white',
                                borderRadius: '12px',
                                px: 4,
                                py: 1.5,
                                fontSize: '1.1rem',
                                textTransform: 'none',
                                boxShadow: '0 4px 14px 0 rgba(37, 99, 235, 0.39)',
                                '&:hover': {
                                    background: 'linear-gradient(to right, #1d4ed8, #7e22ce)',
                                }
                            }}
                        >
                            Bắt đầu ngay
                        </Button>
                    </Box>
                    <Box component={motion.div}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        sx={{ position: 'relative' }}
                    >
                        <Box
                            component="img"
                            src="https://images.unsplash.com/photo-1726361872261-d59c45e7406d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMHBhcnRuZXJzaGlwJTIwbWFya2V0aW5nfGVufDF8fHx8MTc2NjExMTYxOHww&ixlib=rb-4.1.0&q=80&w=1080"
                            alt="Brand Partnership"
                            sx={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '16px',
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', // shadow-2xl
                                display: 'block'
                            }}
                        />
                    </Box>
                </Box>
            </Box>
            <Box sx={{
                py: "2.4rem",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
            }}>
                <ServiceSection />
            </Box>
            <Box sx={{
                py: { xs: 8, md: 12 },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%'
            }}>
                <Box
                    component={motion.div}
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                    sx={{
                        width: '60%',
                        background: 'linear-gradient(to right, #2563eb, #9333ea)', // blue-600 to purple-600
                        borderRadius: '16px',
                        p: { xs: 4, md: 6 },
                        textAlign: 'center',
                        color: 'white'
                    }}
                >
                    <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 3, fontSize: { xs: '1.875rem', md: '2.25rem' } }}>
                        Sẵn sàng bắt đầu?
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 5, fontWeight: 400, opacity: 0.9 }}>
                        Liên hệ với chúng tôi ngay hôm nay để được tư vấn miễn phí
                    </Typography>

                    <Button
                        component={motion.button}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        variant="contained"
                        size="large"
                        sx={{
                            bgcolor: 'white',
                            color: '#9333ea',
                            px: 4,
                            py: 1.5,
                            borderRadius: '12px',
                            fontWeight: 600,
                            textTransform: 'none',
                            fontSize: '1.1rem',
                            '&:hover': {
                                bgcolor: '#f3f4f6', // gray-100
                            }
                        }}
                    >
                        Liên hệ ngay
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
export default BrandPage;