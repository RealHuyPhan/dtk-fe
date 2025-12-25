import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Users, Award, TrendingUp } from 'lucide-react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Avatar,
    Stack,
    useTheme
} from '@mui/material';

// Nếu bạn chưa có ImageWithFallback, đây là một phiên bản thay thế đơn giản dùng MUI
const ImageWithFallback = ({ src, alt, ...props }) => (
    <Box
        component="img"
        src={src}
        alt={alt}
        {...props}
        sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            ...props.sx
        }}
    />
);

const values = [
    {
        icon: Heart,
        title: 'Đam mê',
        description: 'Chúng tôi yêu thích những gì mình làm và cam kết mang đến giá trị tốt nhất',
    },
    {
        icon: Users,
        title: 'Kết nối',
        description: 'Xây dựng mối quan hệ bền vững giữa thương hiệu và creator',
    },
    {
        icon: Award,
        title: 'Chất lượng',
        description: 'Cam kết chất lượng cao trong mọi dự án và chiến dịch',
    },
    {
        icon: TrendingUp,
        title: 'Phát triển',
        description: 'Không ngừng học hỏi và cải tiến để mang lại giá trị tốt hơn',
    },
];

const team = [
    {
        name: 'Nguyễn Văn A',
        role: 'CEO & Founder',
        image: 'https://images.unsplash.com/photo-1640725804478-ebf80960a3f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwY3JlYXRvciUyMHNvY2lhbCUyMG1lZGlhfGVufDF8fHx8MTc2NjExMTYxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
        name: 'Trần Thị B',
        role: 'Marketing Director',
        image: 'https://images.unsplash.com/photo-1522108098940-de49801b5b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBpbmZsdWVuY2VyfGVufDF8fHx8MTc2NjExMTYxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
        name: 'Lê Văn C',
        role: 'Operations Manager',
        image: 'https://images.unsplash.com/photo-1640725804478-ebf80960a3f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwY3JlYXRvciUyMHNvY2lhbCUyMG1lZGlhfGVufDF8fHx8MTc2NjExMTYxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
        name: 'Phạm Thị D',
        role: 'Creator Relations',
        image: 'https://images.unsplash.com/photo-1516763296043-f676c1105999?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYmxvZ2dlcnxlbnwxfHx8fDE3NjYwNjM2MTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
];

const milestones = [
    { year: '2020', event: 'Thành lập MediaHub' },
    { year: '2021', event: 'Đạt 500+ creators trong mạng lưới' },
    { year: '2022', event: 'Hợp tác với 100+ thương hiệu' },
    { year: '2023', event: 'Triển khai 5000+ chiến dịch thành công' },
    { year: '2024', event: 'Mở rộng ra toàn quốc' },
];

export function AboutUsPage() {
    const theme = useTheme();

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
            {/* Hero Section */}
            <Box
                sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    py: 10,
                    background: 'linear-gradient(135deg, #f3e8ff 0%, #fce7f3 50%, #eff6ff 100%)' // purple-50 via pink-50 to blue-50 approximation
                }}
            >
                <Container maxWidth="lg">
                    <Grid container spacing={6} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Box
                                component={motion.div}
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <Typography
                                    variant="h2"
                                    component="h1"
                                    gutterBottom
                                    sx={{
                                        fontWeight: 'bold',
                                        fontSize: { xs: '2.5rem', md: '3.75rem' } // text-5xl md:text-6xl
                                    }}
                                >
                                    <Box
                                        component="span"
                                        sx={{
                                            background: 'linear-gradient(to right, #9333ea, #db2777)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent'
                                        }}
                                    >
                                        Về MediaHub
                                    </Box>
                                </Typography>
                                <Typography variant="h6" color="text.secondary" paragraph sx={{ mb: 3 }}>
                                    Chúng tôi là nền tảng kết nối hàng đầu Việt Nam, tạo cầu nối giữa
                                    thương hiệu và những creator tài năng để tạo nên những chiến dịch
                                    marketing đột phá.
                                </Typography>
                                <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.125rem' }}>
                                    Với sứ mệnh mang đến giá trị tốt nhất cho cả thương hiệu và creator,
                                    chúng tôi cam kết xây dựng một hệ sinh thái marketing bền vững và
                                    hiệu quả.
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Box
                                component={motion.div}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                sx={{ position: 'relative' }}
                            >
                                <ImageWithFallback
                                    src="https://images.unsplash.com/photo-1763191213523-1489179a1088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMG9mZmljZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjYwMTg5NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                                    alt="MediaHub Office"
                                    sx={{ borderRadius: 4, boxShadow: 6 }} // rounded-2xl shadow-2xl
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Mission & Vision */}
            <Box sx={{ py: 10 }}>
                <Container maxWidth="lg">
                    <Grid container spacing={6}>
                        <Grid item xs={12} md={6}>
                            <Box
                                component={motion.div}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                sx={{
                                    p: 4,
                                    borderRadius: 4,
                                    background: 'linear-gradient(135deg, #f3e8ff, #fce7f3)',
                                    height: '100%'
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 64,
                                        height: 64,
                                        borderRadius: 3,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mb: 3,
                                        background: 'linear-gradient(to right, #9333ea, #db2777)'
                                    }}
                                >
                                    <Target color="white" size={32} />
                                </Box>
                                <Typography variant="h4" gutterBottom>Sứ mệnh</Typography>
                                <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.125rem' }}>
                                    Kết nối và trao quyền cho các creator để cùng thương hiệu tạo nên
                                    những chiến dịch marketing sáng tạo, mang lại giá trị thực sự cho
                                    cộng đồng.
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Box
                                component={motion.div}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                sx={{
                                    p: 4,
                                    borderRadius: 4,
                                    background: 'linear-gradient(135deg, #eff6ff, #f3e8ff)',
                                    height: '100%'
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 64,
                                        height: 64,
                                        borderRadius: 3,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mb: 3,
                                        background: 'linear-gradient(to right, #2563eb, #9333ea)'
                                    }}
                                >
                                    <Eye color="white" size={32} />
                                </Box>
                                <Typography variant="h4" gutterBottom>Tầm nhìn</Typography>
                                <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.125rem' }}>
                                    Trở thành nền tảng kết nối creator hàng đầu Đông Nam Á, tiên phong
                                    trong việc định hình tương lai của influencer marketing.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Values */}
            <Box sx={{ py: 10, bgcolor: 'grey.50' }}>
                <Container maxWidth="lg">
                    <Box
                        component={motion.div}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        sx={{ textAlign: 'center', mb: 8 }}
                    >
                        <Typography variant="h3" gutterBottom>Giá trị cốt lõi</Typography>
                        <Typography variant="h6" color="text.secondary">
                            Những giá trị định hướng mọi hành động của chúng tôi
                        </Typography>
                    </Box>

                    <Grid container spacing={4}>
                        {values.map((value, index) => (
                            <Grid item xs={12} md={6} lg={3} key={index}>
                                <Card
                                    component={motion.div}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -10 }}
                                    sx={{
                                        p: 3,
                                        height: '100%',
                                        borderRadius: 4,
                                        boxShadow: 3,
                                        '&:hover': { boxShadow: 6 },
                                        textAlign: 'center'
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 64,
                                            height: 64,
                                            borderRadius: 3,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            mb: 3,
                                            mx: 'auto',
                                            background: 'linear-gradient(to right, #f3e8ff, #fce7f3)'
                                        }}
                                    >
                                        <value.icon color="#9333ea" size={32} />
                                    </Box>
                                    <Typography variant="h5" gutterBottom>{value.title}</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {value.description}
                                    </Typography>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Team */}
            <Box sx={{ py: 10 }}>
                <Container maxWidth="lg">
                    <Box
                        component={motion.div}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        sx={{ textAlign: 'center', mb: 8 }}
                    >
                        <Typography variant="h3" gutterBottom>Đội ngũ của chúng tôi</Typography>
                        <Typography variant="h6" color="text.secondary">
                            Những con người tạo nên MediaHub
                        </Typography>
                    </Box>

                    <Grid container spacing={4}>
                        {team.map((member, index) => (
                            <Grid item xs={12} md={6} lg={3} key={index}>
                                <Card
                                    component={motion.div}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -10 }}
                                    sx={{
                                        borderRadius: 4,
                                        overflow: 'hidden',
                                        boxShadow: 3,
                                        '&:hover': { boxShadow: 6 },
                                        height: '100%'
                                    }}
                                >
                                    <Box sx={{ height: 256, position: 'relative' }}>
                                        <ImageWithFallback
                                            src={member.image}
                                            alt={member.name}
                                            sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </Box>
                                    <CardContent sx={{ textAlign: 'center', p: 3 }}>
                                        <Typography variant="h6" gutterBottom>{member.name}</Typography>
                                        <Typography variant="body2" sx={{ color: '#9333ea', fontWeight: 500 }}>
                                            {member.role}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Timeline */}
            <Box sx={{ py: 10, bgcolor: 'grey.50' }}>
                <Container maxWidth="md">
                    <Box
                        component={motion.div}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        sx={{ textAlign: 'center', mb: 8 }}
                    >
                        <Typography variant="h3" gutterBottom>Hành trình phát triển</Typography>
                        <Typography variant="h6" color="text.secondary">
                            Những cột mốc quan trọng của MediaHub
                        </Typography>
                    </Box>

                    <Stack spacing={4}>
                        {milestones.map((milestone, index) => (
                            <Box
                                component={motion.div}
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 4
                                }}
                            >
                                <Box
                                    sx={{
                                        background: 'linear-gradient(to right, #9333ea, #db2777)',
                                        color: 'white',
                                        px: 3,
                                        py: 1.5,
                                        borderRadius: 999,
                                        minWidth: 'fit-content',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    {milestone.year}
                                </Box>
                                <Box
                                    sx={{
                                        bgcolor: 'white',
                                        p: 3,
                                        borderRadius: 3,
                                        boxShadow: 3,
                                        flex: 1
                                    }}
                                >
                                    <Typography variant="h6" sx={{ fontSize: '1.125rem' }}>
                                        {milestone.event}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
}