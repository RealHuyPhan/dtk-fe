import React from 'react';
import {
    Box,
    Typography,
    Container,
    Grid,
    Button,
    useTheme,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@mui/material';
import { motion } from 'framer-motion';
import { Rocket, DollarSign, Award, TrendingUp, Users, Star, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CardInfo from '@/component/CardInfoRectangle';
import bgBrand from '../assets/globalBG.png'

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


const BenefitSection = () => {
    return (
        <Box
            component={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            sx={{ width: '100%', py: { xs: 6, md: 10 } }}
        >
            <Container maxWidth="lg">
                <Box sx={{ mb: 6, textAlign: 'center' }}>
                    <Typography
                        component={motion.div} variants={fadeInUp}
                        align="center" gutterBottom
                        sx={{
                            fontWeight: 600,
                            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                        }}>
                        Dịch vụ của chúng tôi
                    </Typography>

                    <Typography
                        component={motion.div} variants={fadeInUp}
                        align="center"
                        sx={{
                            fontSize: { xs: '1rem', md: '1.4rem' },
                            color: 'text.secondary',
                            maxWidth: '800px',
                            mx: 'auto'
                        }}>
                        Giải pháp toàn diện cho sự phát triển của bạn
                    </Typography>
                </Box>

                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: 4,
                    "@media (max-width: 900px)": {
                        gridTemplateColumns: '1fr',
                        gap: 3
                    },
                }}>
                    {benefits.map((item, index) => (
                        <Box
                            component={motion.div} variants={fadeInUp}
                            key={index}
                            sx={{ display: 'flex', justifyContent: 'center' }}
                        >
                            <CardInfo
                                title={item.title}
                                description={item.description}
                                icon={item.icon}
                            />
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
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
                    py: "3rem",
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
                            gap: '1.8rem',
                        },
                    }}>
                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}>
                            <Box
                                component="img"
                                src={bgBrand}
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

                    </Box>
                </Box>



            </Box>

            {/* 2. STATS SECTION */}
            <Box sx={{ py: '4rem', bgcolor: 'white' }}>
                <Container maxWidth="lg">
                    <Grid container spacing={4} sx={{ justifyContent: 'space-around' }}>
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
                py: "1rem",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                backgroundColor: '#f9f9f9'
            }}>
                <BenefitSection />
            </Box>

            {/* 4. REQUIREMENTS SECTION */}
            <Box sx={{ pb: '4rem', bgcolor: '#f9fafb' }}> {/* gray-50 */}
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
            <Box sx={{ py: '2rem' }}>
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
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '2.5rem',
                            width: '100%',
                        }}
                    >
                        {processSteps.map((item, index) => (
                            <Box
                                key={index}
                                component={motion.div}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                sx={{
                                    position: 'relative',
                                    padding: '1.5rem',
                                    maxWidth: '900px',
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: 900,
                                        fontSize: '4rem',
                                        background: 'linear-gradient(to right, #db2777, #9333ea)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        opacity: 0.2,
                                        lineHeight: 1,
                                        mb: 1,
                                    }}
                                >
                                    {item.step}
                                </Typography>

                                <Typography
                                    sx={{
                                        fontSize: '1.4rem',
                                        fontWeight: 'bold',
                                        mb: 1,
                                    }}
                                >
                                    {item.title}
                                </Typography>

                                <Typography color="text.secondary">
                                    {item.description}
                                </Typography>
                            </Box>
                        ))}
                    </Box>

                </Container>
            </Box>


            <Box sx={{ py: '6rem' }}>
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