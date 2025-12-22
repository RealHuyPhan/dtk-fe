// import React from 'react';

// const CreatorPage = () => {

//     return (
//         <div>123</div>
//     );
// }
// export default CreatorPage;



import React from 'react';
import {
    Box,
    Typography,
    Container,
    Grid,
    Button,
    Card,
    CardContent,
    useTheme,
    useMediaQuery,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@mui/material';
import { motion } from 'framer-motion';
import { Rocket, DollarSign, Award, TrendingUp, Users, Star, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CardInfo from '@/component/CardInfo';

// Nếu chưa có component ImageWithFallback, bạn có thể dùng thẻ img hoặc Box component="img"
// import { ImageWithFallback } from '../components/figma/ImageWithFallback';

// --- DATA ---
const benefits = [
    {
        icon: <DollarSign size={28} />,
        title: 'Thu nhập ổn định',
        description: 'Nhận được các dự án liên tục từ các thương hiệu uy tín',
    },
    {
        icon: <Rocket size={28} />,
        title: 'Phát triển sự nghiệp',
        description: 'Cơ hội hợp tác với các thương hiệu lớn và nâng tầm ảnh hưởng',
    },
    {
        icon: <Award size={28} />,
        title: 'Hỗ trợ chuyên nghiệp',
        description: 'Đội ngũ hỗ trợ 24/7 trong quá trình làm việc',
    },
    {
        icon: <TrendingUp size={28} />,
        title: 'Tăng trưởng nhanh',
        description: 'Công cụ và chiến lược để phát triển kênh của bạn',
    },
    {
        icon: <Users size={28} />,
        title: 'Cộng đồng creator',
        description: 'Kết nối và học hỏi từ cộng đồng creator đông đảo',
    },
    {
        icon: <Star size={28} />,
        title: 'Thương hiệu cá nhân',
        description: 'Xây dựng và phát triển thương hiệu cá nhân mạnh mẽ',
    },
];

const stats = [
    { number: '2000+', label: 'Creators' },
    { number: '500+', label: 'Thương hiệu' },
    { number: '10K+', label: 'Chiến dịch' },
    { number: '98%', label: 'Hài lòng' },
];

const requirements = [
    'Tối thiểu 10K followers trên 1 nền tảng',
    'Nội dung chất lượng và nhất quán',
    'Engagement rate tối thiểu 3%',
    'Tuân thủ quy định về quảng cáo',
    'Chuyên nghiệp trong giao tiếp',
];

const BenefitSection = () => {
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
                    {benefits.map((item, index) => (
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

const CreatorPage = () => {
    const theme = useTheme();

    return (
        <Box sx={{ bgcolor: '#fff', overflowX: 'hidden' }}>

            {/* 1. HERO SECTION */}
            <Box sx={{
                position: 'relative',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, #fdf2f8 0%, #faf5ff 50%, #eff6ff 100%)', // pink-50, purple-50, blue-50
            }}>
                {/* 1 */}
                <Box sx={{
                    py: "5rem",
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    width: '100%',
                }}>
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
                            <Box component={motion.div}
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <Typography variant="h1" sx={{
                                    fontWeight: 'bold',
                                    mb: 3,
                                    fontSize: { xs: '2.5rem', md: '3.75rem' },
                                    lineHeight: 1.2
                                }}>
                                    Biến đam mê
                                    <Box component="span" sx={{
                                        display: 'block',
                                        background: 'linear-gradient(to right, #db2777, #9333ea)', // pink-600 to purple-600
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                    }}>
                                        Thành sự nghiệp
                                    </Box>
                                </Typography>

                                <Typography variant="h6" sx={{ color: 'text.secondary', mb: 4, fontWeight: 400 }}>
                                    Tham gia mạng lưới creators hàng đầu Việt Nam. Nhận được các cơ
                                    hội hợp tác với thương hiệu uy tín và phát triển sự nghiệp của bạn
                                </Typography>

                                <Link to="/contact" style={{ textDecoration: 'none' }}>
                                    <Button
                                        component={motion.button}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        variant="contained"
                                        size="large"
                                        sx={{
                                            background: 'linear-gradient(to right, #db2777, #9333ea)',
                                            color: 'white',
                                            borderRadius: '12px',
                                            px: 4,
                                            py: 1.5,
                                            fontSize: '1.1rem',
                                            fontWeight: 600,
                                            textTransform: 'none',
                                            boxShadow: '0 4px 14px 0 rgba(219, 39, 119, 0.39)',
                                            '&:hover': {
                                                background: 'linear-gradient(to right, #be185d, #7e22ce)',
                                            }
                                        }}
                                    >
                                        Đăng ký ngay
                                    </Button>
                                </Link>
                            </Box>
                        </Box>

                        {/* Phần text Creator có animation trượt từ phải sang */}
                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}>
                            <Box
                                component="img"
                                src="https://images.unsplash.com/photo-1640725804478-ebf80960a3f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwY3JlYXRvciUyMHNvY2lhbCUyMG1lZGlhfGVufDF8fHx8MTc2NjExMTYxN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                                alt="Content Creator"
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



            </Box>

            {/* 2. STATS SECTION */}
            <Box sx={{ py: 8, bgcolor: 'white' }}>
                <Container maxWidth="lg">
                    <Grid container spacing={4} sx={{justifyContent: 'space-around'}}>
                        {stats.map((stat, index) => (
                            <Grid item xs={6} md={3} key={index}>
                                <Box
                                    component={motion.div}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    sx={{ textAlign: 'center' }}
                                >
                                    <Typography variant="h3" sx={{
                                        fontWeight: 'bold',
                                        mb: 1,
                                        fontSize: { xs: '2rem', md: '3rem' },
                                        background: 'linear-gradient(to right, #db2777, #9333ea)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                    }}>
                                        {stat.number}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        {stat.label}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* 3. BENEFITS SECTION */}
            <Box sx={{
                py: "2.4rem",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                backgroundColor: '#f9f9f9'
            }}>
                <BenefitSection />
            </Box>

            {/* 4. REQUIREMENTS SECTION */}
            <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#f9fafb' }}> {/* gray-50 */}
                <Container maxWidth="md">
                    <Box component={motion.div}
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                        sx={{ textAlign: 'center', mb: 6 }}
                    >
                        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2, fontSize: { xs: '2rem', md: '2.5rem' } }}>
                            Yêu cầu tham gia
                        </Typography>
                        <Typography variant="h6" sx={{ color: 'text.secondary', fontWeight: 400 }}>
                            Các tiêu chí cơ bản để trở thành creator trong mạng lưới
                        </Typography>
                    </Box>

                    <Box
                        component={motion.div}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        sx={{
                            bgcolor: 'white',
                            p: { xs: 3, md: 5 },
                            borderRadius: '16px',
                            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                        }}
                    >
                        <List>
                            {requirements.map((req, index) => (
                                <ListItem
                                    key={index}
                                    component={motion.li}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    disableGutters
                                    sx={{ py: 1.5 }}
                                >
                                    <ListItemIcon sx={{ minWidth: 40 }}>
                                        <Check size={24} color="#22c55e" /> {/* green-500 */}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={req}
                                        primaryTypographyProps={{ fontSize: '1.125rem', color: '#374151' }} // text-gray-700
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Container>
            </Box>

            {/* 5. PROCESS SECTION */}
            {/* <Box sx={{ py: { xs: 8, md: 12 } }}>
                <Container maxWidth="lg">
                    <Box component={motion.div}
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                        sx={{ textAlign: 'center', mb: 8 }}
                    >
                        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2, fontSize: { xs: '2rem', md: '2.5rem' } }}>
                            Quy trình đăng ký
                        </Typography>
                        <Typography variant="h6" sx={{ color: 'text.secondary', fontWeight: 400 }}>
                            Chỉ 3 bước đơn giản để bắt đầu
                        </Typography>
                    </Box>

                    <Grid container spacing={4}>
                        {processSteps.map((item, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <Box
                                    component={motion.div}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    sx={{ position: 'relative', p: 2 }}
                                >
                                    <Typography variant="h1" sx={{
                                        fontWeight: 900,
                                        fontSize: '4rem',
                                        background: 'linear-gradient(to right, #db2777, #9333ea)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        mb: 2,
                                        opacity: 0.2
                                    }}>
                                        {item.step}
                                    </Typography>
                                    <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        {item.description}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box> */}


            <Box sx={{ py: { xs: 8, md: 12 } }}>
                <Container maxWidth="md">
                    <Box
                        component={motion.div}
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                        sx={{
                            background: 'linear-gradient(to right, #db2777, #9333ea)', // pink-600 to purple-600
                            borderRadius: '16px',
                            p: { xs: 4, md: 8 },
                            textAlign: 'center',
                            color: 'white'
                        }}
                    >
                        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 3, fontSize: { xs: '1.875rem', md: '2.5rem' } }}>
                            Sẵn sàng bắt đầu hành trình?
                        </Typography>
                        <Typography variant="h6" sx={{ mb: 5, fontWeight: 400, opacity: 0.9 }}>
                            Đăng ký ngay hôm nay và nhận được cơ hội hợp tác đầu tiên
                        </Typography>

                        <Link to="/contact" style={{ textDecoration: 'none' }}>
                            <Button
                                component={motion.button}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                variant="contained"
                                size="large"
                                sx={{
                                    bgcolor: 'white',
                                    color: '#9333ea', // purple-600
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
                                Đăng ký Creator
                            </Button>
                        </Link>
                    </Box>
                </Container>
            </Box>

        </Box >
    );
}

export default CreatorPage;