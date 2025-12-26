import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Star, Crown, Mic2, Gem } from 'lucide-react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Stack,
    useTheme
} from '@mui/material';

// Component ImageWithFallback giữ nguyên
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

// Mapping: Giá trị cốt lõi (Dream - Talent - Kingdom)
const values = [
    {
        icon: Star,
        title: 'Dream (Ước mơ)',
        description: 'Giá trị của sân khấu bắt nguồn từ ước mơ. DTK là nơi thuộc về tất cả những ai dám mơ ước và dám tỏa sáng.',
    },
    {
        icon: Mic2, // Hoặc dùng User, Star
        title: 'Talent (Tài năng)',
        description: 'Tập trung phân khúc cao cấp. Hệ thống huấn luyện bài bản đảm bảo mỗi tài năng đều được tỏa sáng.',
    },
    {
        icon: Crown,
        title: 'Kingdom (Vương quốc)',
        description: 'Không chỉ là công ty quản lý, mà là vương quốc sân khấu của những tinh anh. Mỗi thành viên là người kiến tạo.',
    }
];

// Mapping: DTK Media có gì? (Tận dụng layout Timeline cũ)
const features = [
    { label: 'Tiên phong', content: 'Định hướng phát triển chuyên sâu và khác biệt trong lĩnh vực giải trí livestream tại Việt Nam.' },
    { label: 'Khép kín', content: 'Chuỗi sản xuất toàn diện: trang điểm, vũ đạo, quay dựng, biên tập - đảm bảo đậm bản sắc riêng.' },
    { label: 'Xu hướng', content: 'Bản địa hóa mô hình thành công từ Trung Quốc, kết hợp Nghệ thuật - Công nghệ - TMĐT.' },
];

// Giữ lại placeholder Team (Bạn có thể cập nhật tên thật sau)
const team = [
    {
        name: 'Producer A',
        role: 'Giám đốc Sáng tạo',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=1080',
    },
    {
        name: 'Trainer B',
        role: 'Huấn luyện viên Biểu diễn',
        image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&q=80&w=1080',
    },
    {
        name: 'Manager C',
        role: 'Quản lý Vận hành',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=1080',
    },
    {
        name: 'Stylist D',
        role: 'Định hình Phong cách',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1080',
    },
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
                    // Giữ tone màu tím/hồng phù hợp với concept "Idol/Giải trí"
                    background: 'linear-gradient(135deg, #f3e8ff 0%, #fce7f3 50%, #eff6ff 100%)'
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
                                        fontSize: { xs: '2.5rem', md: '3.75rem' }
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
                                        DTK Media
                                    </Box>
                                </Typography>
                                <Typography variant="h5" sx={{ mb: 2, fontWeight: 'medium', color: '#4b5563' }}>
                                    Define · The · Kingdom
                                </Typography>
                                <Typography variant="h6" color="text.secondary" paragraph sx={{ mb: 3, fontStyle: 'italic' }}>
                                    "Định nghĩa lại Vương quốc giải trí trên sân khấu"
                                </Typography>
                                <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.125rem' }}>
                                    Chúng tôi cam kết xây dựng hệ sinh thái nam thần tượng cao cấp đầu tiên tại Việt Nam,
                                    với thẩm mỹ quốc tế và hệ thống đào tạo chuyên nghiệp.
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
                                {/* Ảnh minh họa cho sân khấu/livestream */}
                                <ImageWithFallback
                                    src="https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=2070&auto=format&fit=crop"
                                    alt="DTK Media Stage"
                                    sx={{ borderRadius: 4, boxShadow: 6, minHeight: '400px' }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Mission & Vision Section */}
            <Box sx={{ py: 10 }}>
                <Container maxWidth="lg">
                    <Grid container spacing={6}>
                        {/* Mission */}
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
                                <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>Sứ mệnh</Typography>
                                <Typography variant="h6" gutterBottom sx={{ color: '#9333ea' }}>
                                    Trao quyền cho giới trẻ – Kiến tạo giấc mơ sân khấu
                                </Typography>
                                <Typography variant="body1" color="text.secondary" paragraph>
                                    Mang đến chương trình huấn luyện chuyên nghiệp, cơ hội biểu diễn và nguồn lực toàn cầu.
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Xây dựng mô hình nam thần tượng/nhóm livestream hệ thống hóa, tinh gọn và chất lượng cao.
                                </Typography>
                            </Box>
                        </Grid>

                        {/* Vision */}
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
                                <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>Tầm nhìn</Typography>
                                <Box component="ul" sx={{ pl: 2, color: 'text.secondary', fontSize: '1.125rem' }}>
                                    <li>
                                        <Typography variant="body1" paragraph>
                                            Nơi ươm mầm thần tượng nam hàng đầu Việt Nam.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant="body1" paragraph>
                                            Công ty quản lý livestream giải trí tiêu chuẩn tại Đông Nam Á.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant="body1">
                                            Vương quốc sân khấu cho giới trẻ toàn cầu theo đuổi ước mơ.
                                        </Typography>
                                    </li>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Core Values Section */}
            <Box sx={{ py: 10, bgcolor: 'grey.50' }}>
                <Container maxWidth="lg">
                    <Box
                        component={motion.div}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        sx={{ textAlign: 'center', mb: 8 }}
                    >
                        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>Giá trị cốt lõi</Typography>
                        <Typography variant="h6" color="text.secondary">
                            Nền tảng của Vương quốc DTK
                        </Typography>
                    </Box>

                    <Grid container spacing={4} justifyContent="center">
                        {values.map((value, index) => (
                            <Grid item xs={12} md={4} key={index}>
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
                                            width: 80,
                                            height: 80,
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            mb: 3,
                                            mx: 'auto',
                                            background: 'linear-gradient(to right, #f3e8ff, #fce7f3)'
                                        }}
                                    >
                                        <value.icon color="#9333ea" size={40} />
                                    </Box>
                                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#9333ea' }}>
                                        {value.title}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        {value.description}
                                    </Typography>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Team Section (Placeholder) */}
            <Box sx={{ py: 10 }}>
                <Container maxWidth="lg">
                    <Box
                        component={motion.div}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        sx={{ textAlign: 'center', mb: 8 }}
                    >
                        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>Đội ngũ tinh anh</Typography>
                        <Typography variant="h6" color="text.secondary">
                            Những người kiến tạo vương quốc
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
                                    <Box sx={{ height: 320, position: 'relative' }}>
                                        <ImageWithFallback
                                            src={member.image}
                                            alt={member.name}
                                            sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </Box>
                                    <CardContent sx={{ textAlign: 'center', p: 3 }}>
                                        <Typography variant="h6" gutterBottom>{member.name}</Typography>
                                        <Typography variant="body2" sx={{ color: '#9333ea', fontWeight: 600, textTransform: 'uppercase' }}>
                                            {member.role}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Features/Ecosystem Section (Replaces Timeline) */}
            <Box sx={{ py: 10, bgcolor: 'grey.50' }}>
                <Container maxWidth="md">
                    <Box
                        component={motion.div}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        sx={{ textAlign: 'center', mb: 8 }}
                    >
                        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>DTK Media có gì?</Typography>
                        <Typography variant="h6" color="text.secondary">
                            Hệ sinh thái giải trí khác biệt
                        </Typography>
                    </Box>

                    <Stack spacing={4}>
                        {features.map((item, index) => (
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
                                    gap: 4,
                                    flexDirection: { xs: 'column', sm: 'row' }
                                }}
                            >
                                <Box
                                    sx={{
                                        background: 'linear-gradient(to right, #9333ea, #db2777)',
                                        color: 'white',
                                        px: 4,
                                        py: 2,
                                        borderRadius: 999,
                                        minWidth: '200px',
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        boxShadow: 2
                                    }}>
                                    {item.label}
                                </Box>
                                <Box
                                    sx={{
                                        bgcolor: 'white',
                                        p: 3,
                                        borderRadius: 3,
                                        boxShadow: 3,
                                        flex: 1,
                                        width: '100%',
                                        borderLeft: '4px solid #db2777'
                                    }}
                                >
                                    <Typography variant="h6" sx={{ fontSize: '1.125rem', lineHeight: 1.6 }}>
                                        {item.content}
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