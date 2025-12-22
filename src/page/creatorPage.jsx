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

// Nếu chưa có component ImageWithFallback, bạn có thể dùng thẻ img hoặc Box component="img"
// import { ImageWithFallback } from '../components/figma/ImageWithFallback';

// --- DATA ---
const benefits = [
    {
        icon: DollarSign,
        title: 'Thu nhập ổn định',
        description: 'Nhận được các dự án liên tục từ các thương hiệu uy tín',
    },
    {
        icon: Rocket,
        title: 'Phát triển sự nghiệp',
        description: 'Cơ hội hợp tác với các thương hiệu lớn và nâng tầm ảnh hưởng',
    },
    {
        icon: Award,
        title: 'Hỗ trợ chuyên nghiệp',
        description: 'Đội ngũ hỗ trợ 24/7 trong quá trình làm việc',
    },
    {
        icon: TrendingUp,
        title: 'Tăng trưởng nhanh',
        description: 'Công cụ và chiến lược để phát triển kênh của bạn',
    },
    {
        icon: Users,
        title: 'Cộng đồng creator',
        description: 'Kết nối và học hỏi từ cộng đồng creator đông đảo',
    },
    {
        icon: Star,
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

const processSteps = [
    {
        step: '01',
        title: 'Đăng ký thông tin',
        description: 'Điền form đăng ký với thông tin chi tiết về kênh của bạn',
    },
    {
        step: '02',
        title: 'Xét duyệt',
        description: 'Team của chúng tôi sẽ review và liên hệ trong vòng 48h',
    },
    {
        step: '03',
        title: 'Bắt đầu làm việc',
        description: 'Nhận các dự án phù hợp và bắt đầu kiếm tiền',
    },
];

// --- ANIMATION VARIANTS ---
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
        <Box sx={{ minHeight: '100vh', bgcolor: '#fff', overflowX: 'hidden' }}>

            {/* 1. HERO SECTION */}
            <Box sx={{
                position: 'relative',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, #fdf2f8 0%, #faf5ff 50%, #eff6ff 100%)', // pink-50, purple-50, blue-50
                py: { xs: 10, md: 15 },
            }}>
                <Container maxWidth="lg">
                    <Grid container spacing={6} alignItems="center">
                        {/* Left Side: Text */}
                        <Grid item xs={12} md={6}>
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
                        </Grid>

                        {/* Right Side: Image */}
                        <Grid item xs={12} md={6}>
                            <Box component={motion.div}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                sx={{ position: 'relative' }}
                            >
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
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* 2. STATS SECTION */}
            <Box sx={{ py: 8, bgcolor: 'white' }}>
                <Container maxWidth="lg">
                    <Grid container spacing={4}>
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
            <Box sx={{ py: { xs: 8, md: 12 } }}>
                <Container maxWidth="lg">
                    <Box component={motion.div}
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                        sx={{ textAlign: 'center', mb: 8 }}
                    >
                        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2, fontSize: { xs: '2rem', md: '2.5rem' } }}>
                            Lợi ích khi tham gia
                        </Typography>
                        <Typography variant="h6" sx={{ color: 'text.secondary', fontWeight: 400 }}>
                            Những giá trị mà chúng tôi mang lại cho creator
                        </Typography>
                    </Box>

                    <Grid container spacing={4}>
                        {benefits.map((benefit, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card
                                    component={motion.div}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    elevation={0}
                                    sx={{
                                        height: '100%',
                                        p: 2,
                                        borderRadius: '16px',
                                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                                        '&:hover': {
                                            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                                        },
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    <CardContent>
                                        <Box sx={{
                                            width: 64,
                                            height: 64,
                                            borderRadius: '12px',
                                            background: 'linear-gradient(to right, #fce7f3, #f3e8ff)', // pink-100 to purple-100
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            mb: 3
                                        }}>
                                            <benefit.icon size={32} color="#db2777" /> {/* pink-600 */}
                                        </Box>
                                        <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
                                            {benefit.title}
                                        </Typography>
                                        <Typography variant="body1" color="text.secondary">
                                            {benefit.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
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
            <Box sx={{ py: { xs: 8, md: 12 } }}>
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
            </Box>

            {/* 6. CTA SECTION */}
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

        </Box>
    );
}

export default CreatorPage;