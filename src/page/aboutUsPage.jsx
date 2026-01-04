import React from 'react';
import { Box, Container, Typography, Button, Stack, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { Target, Users, Award, TrendingUp, Heart, Zap } from 'lucide-react';

// --- CẤU HÌNH MÀU SẮC ---
const COLORS = {
    primary: '#C7364A',
    secondary: '#A92C3D',
    dark: '#16223A',
    white: '#ffffff',
    gray: '#f9fafb',
    textGray: '#4b5563'
};

// --- MOTION WRAPPERS ---
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

export default function AboutUsPage() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: COLORS.white, overflowX: 'hidden' }}>

            {/* ================= HERO SECTION ================= */}
            <Box sx={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>

                {/* Background Image */}
                <Box
                    sx={{
                        position: 'absolute', inset: 0,
                        backgroundImage: 'url(https://images.unsplash.com/photo-1764123108291-0f48d2c7e563?crop=entropy&cs=tinysrgb&fit=max&fm=jpg)',
                        backgroundSize: 'cover', backgroundPosition: 'center'
                    }}
                />
                {/* Gradient Overlay */}
                <Box
                    sx={{
                        position: 'absolute', inset: 0,
                        background: `linear-gradient(135deg, ${COLORS.dark}F2, ${COLORS.secondary}E6, ${COLORS.primary}F2)`
                    }}
                />

                <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 10, py: 10 }}>
                    <Stack direction={isMobile ? 'column' : 'row'} spacing={8} alignItems="center">

                        {/* Left Content */}
                        <Box sx={{ flex: 1 }}>
                            <MotionBox
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <Typography variant="h1" sx={{ fontSize: { xs: '3rem', md: '5rem' }, fontWeight: 700, color: COLORS.white, mb: 3 }}>
                                    Về MediaHub
                                </Typography>
                                <Typography variant="h5" sx={{ color: 'rgba(255,255,255,0.9)', mb: 6, fontWeight: 400 }}>
                                    Kết nối thương hiệu với những người sáng tạo nội dung hàng đầu Việt Nam
                                </Typography>

                                {/* Stats Grid using Flex Wrap */}
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
                                    {[
                                        { number: '5000+', label: 'Creators' },
                                        { number: '500+', label: 'Brands' },
                                        { number: '10K+', label: 'Campaigns' },
                                    ].map((stat, index) => (
                                        <MotionBox
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 + index * 0.1 }}
                                            sx={{
                                                bgcolor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)',
                                                border: '1px solid rgba(255,255,255,0.2)', borderRadius: 4, p: 3,
                                                minWidth: 140, flex: { xs: 1, sm: 'none' }
                                            }}
                                        >
                                            <Typography variant="h4" sx={{ color: COLORS.white, mb: 1, fontWeight: 700 }}>{stat.number}</Typography>
                                            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>{stat.label}</Typography>
                                        </MotionBox>
                                    ))}
                                </Box>
                            </MotionBox>
                        </Box>

                        {/* Right Content - Image Mosaic (No Grid) */}
                        <MotionBox
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            sx={{ flex: 1, width: '100%' }}
                        >
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
                                {[
                                    'https://images.unsplash.com/photo-1645848810565-ff3c1de0da09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg',
                                    'https://images.unsplash.com/photo-1609835794682-ed9fc1a51010?crop=entropy&cs=tinysrgb&fit=max&fm=jpg',
                                    'https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg',
                                    'https://images.unsplash.com/photo-1574576839798-00b48241d0b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg',
                                ].map((img, index) => (
                                    <MotionBox
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.5 + index * 0.1 }}
                                        whileHover={{ scale: 1.05, rotate: 2 }}
                                        sx={{
                                            width: 'calc(50% - 12px)', // 50% width minus half gap
                                            height: 200, borderRadius: 4, overflow: 'hidden', boxShadow: 3
                                        }}
                                    >
                                        <Box component="img" src={img} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </MotionBox>
                                ))}
                            </Box>
                        </MotionBox>
                    </Stack>
                </Container>
            </Box>

            {/* ================= MISSION SECTION ================= */}
            <Box sx={{ py: 15, bgcolor: COLORS.white }}>
                <Container maxWidth="xl">
                    <Stack direction={isMobile ? 'column' : 'row'} spacing={8} alignItems="center">

                        {/* Left Image with Overlay Card */}
                        <MotionBox
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            sx={{ flex: 1, position: 'relative', height: 600, borderRadius: 6, overflow: 'hidden', width: '100%' }}
                        >
                            <Box
                                component="img"
                                src="https://images.unsplash.com/photo-1681483570508-e88d43762d7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg"
                                sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <Box sx={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${COLORS.primary}CC, transparent)` }} />

                            {/* Floating Card inside Image */}
                            <Box sx={{ position: 'absolute', bottom: 32, left: 32, right: 32 }}>
                                <MotionBox
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    sx={{
                                        bgcolor: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(12px)',
                                        border: '1px solid rgba(255,255,255,0.3)', borderRadius: 4, p: 4
                                    }}
                                >
                                    <Target color="white" size={40} style={{ marginBottom: 16 }} />
                                    <Typography variant="h6" sx={{ color: 'white', lineHeight: 1.6 }}>
                                        Sứ mệnh của chúng tôi là tạo ra cầu nối giữa thương hiệu và creators
                                    </Typography>
                                </MotionBox>
                            </Box>
                        </MotionBox>

                        {/* Right Text Content */}
                        <MotionBox
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            sx={{ flex: 1 }}
                        >
                            <Typography variant="h3" sx={{ color: COLORS.dark, fontWeight: 700, mb: 3 }}>
                                Sứ Mệnh Của Chúng Tôi
                            </Typography>
                            <Typography variant="h6" sx={{ color: COLORS.textGray, mb: 3, fontWeight: 400 }}>
                                Chúng tôi tin rằng mỗi thương hiệu đều có câu chuyện riêng, và mỗi creator đều có giá trị độc đáo.
                            </Typography>
                            <Typography variant="body1" sx={{ color: COLORS.textGray, mb: 5, fontSize: '1.1rem', lineHeight: 1.8 }}>
                                MediaHub được thành lập với mục tiêu kết nối những thương hiệu muốn lan tỏa thông điệp của mình với những người sáng tạo nội dung tài năng. Chúng tôi xây dựng nền tảng để cả hai bên cùng phát triển và thành công.
                            </Typography>

                            <Stack spacing={2}>
                                {['Kết nối chân thực', 'Sáng tạo không giới hạn', 'Tăng trưởng bền vững'].map((value, index) => (
                                    <MotionBox
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
                                    >
                                        <Box sx={{ width: 10, height: 10, bgcolor: COLORS.primary, borderRadius: '50%' }} />
                                        <Typography variant="h6" sx={{ color: COLORS.dark, fontSize: '1.1rem' }}>{value}</Typography>
                                    </MotionBox>
                                ))}
                            </Stack>
                        </MotionBox>
                    </Stack>
                </Container>
            </Box>

            {/* ================= CORE VALUES SECTION ================= */}
            <Box sx={{ py: 15, bgcolor: COLORS.gray }}>
                <Container maxWidth="xl">
                    <MotionBox
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        sx={{ textAlign: 'center', mb: 8 }}
                    >
                        <Typography variant="h3" sx={{ color: COLORS.dark, fontWeight: 700, mb: 2 }}>
                            Giá Trị Cốt Lõi
                        </Typography>
                        <Typography variant="h6" sx={{ color: COLORS.textGray, fontWeight: 400 }}>
                            Những nguyên tắc định hướng hoạt động của chúng tôi
                        </Typography>
                    </MotionBox>

                    {/* Flexbox Layout mimicking Grid cols-3 */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}>
                        {[
                            { icon: Heart, title: 'Đam Mê', desc: 'Chúng tôi yêu những gì chúng tôi làm và làm những gì chúng tôi yêu', color: COLORS.primary },
                            { icon: Users, title: 'Cộng Đồng', desc: 'Xây dựng cộng đồng mạnh mẽ, hỗ trợ lẫn nhau phát triển', color: COLORS.secondary },
                            { icon: Zap, title: 'Đổi Mới', desc: 'Không ngừng sáng tạo và cải tiến để mang đến giá trị tốt nhất', color: COLORS.dark },
                            { icon: Award, title: 'Chất Lượng', desc: 'Cam kết chất lượng trong từng chiến dịch, từng nội dung', color: COLORS.primary },
                            { icon: TrendingUp, title: 'Tăng Trưởng', desc: 'Đồng hành cùng đối tác phát triển bền vững', color: COLORS.secondary },
                            { icon: Target, title: 'Hiệu Quả', desc: 'Tối ưu hóa mọi nguồn lực để đạt kết quả tốt nhất', color: COLORS.dark },
                        ].map((value, index) => (
                            <MotionBox
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                sx={{
                                    bgcolor: COLORS.white, p: 5, borderRadius: 6, boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                                    width: { xs: '100%', md: 'calc(33.333% - 22px)' }, // 3 items per row on desktop
                                    display: 'flex', flexDirection: 'column', alignItems: 'flex-start'
                                }}
                            >
                                <MotionBox
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                    sx={{
                                        width: 64, height: 64, borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3,
                                        bgcolor: value.color
                                    }}
                                >
                                    <value.icon color="white" size={32} />
                                </MotionBox>
                                <Typography variant="h5" sx={{ color: COLORS.dark, mb: 2, fontWeight: 600 }}>{value.title}</Typography>
                                <Typography variant="body1" sx={{ color: COLORS.textGray, lineHeight: 1.6 }}>{value.desc}</Typography>
                            </MotionBox>
                        ))}
                    </Box>
                </Container>
            </Box>

            {/* ================= TEAM SECTION ================= */}
            <Box sx={{ py: 15, bgcolor: COLORS.white }}>
                <Container maxWidth="xl">
                    <MotionBox
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        sx={{ textAlign: 'center', mb: 8 }}
                    >
                        <Typography variant="h3" sx={{ color: COLORS.dark, fontWeight: 700, mb: 2 }}>
                            Đội Ngũ Của Chúng Tôi
                        </Typography>
                        <Typography variant="h6" sx={{ color: COLORS.textGray, fontWeight: 400 }}>
                            Những con người tâm huyết đằng sau MediaHub
                        </Typography>
                    </MotionBox>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}>
                        {[
                            { name: 'Nguyễn Văn A', role: 'CEO & Founder', img: 'https://images.unsplash.com/photo-1645848810565-ff3c1de0da09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg' },
                            { name: 'Trần Thị B', role: 'Head of Creators', img: 'https://images.unsplash.com/photo-1698181842119-a5283dea1440?crop=entropy&cs=tinysrgb&fit=max&fm=jpg' },
                            { name: 'Lê Văn C', role: 'Head of Brands', img: 'https://images.unsplash.com/photo-1669743281584-b9125947f9ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg' },
                            { name: 'Phạm Thị D', role: 'Creative Director', img: 'https://images.unsplash.com/photo-1681483570508-e88d43762d7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg' },
                        ].map((member, index) => (
                            <MotionBox
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                sx={{
                                    width: { xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(25% - 24px)' }, // 4 items per row on desktop
                                    position: 'relative', cursor: 'pointer'
                                }}
                            >
                                <Box sx={{ position: 'relative', height: 400, borderRadius: 6, overflow: 'hidden', mb: 2 }}>
                                    <Box
                                        component="img"
                                        src={member.img}
                                        alt={member.name}
                                        sx={{
                                            width: '100%', height: '100%', objectFit: 'cover',
                                            transition: 'transform 0.5s',
                                            '&:hover': { transform: 'scale(1.1)' }
                                        }}
                                    />
                                    <Box sx={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${COLORS.dark}CC, transparent)` }} />

                                    <Box sx={{ position: 'absolute', bottom: 24, left: 24, right: 24 }}>
                                        <Typography variant="h5" sx={{ color: COLORS.white, fontWeight: 600, mb: 0.5 }}>{member.name}</Typography>
                                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>{member.role}</Typography>
                                    </Box>
                                </Box>
                            </MotionBox>
                        ))}
                    </Box>
                </Container>
            </Box>

            {/* ================= CTA SECTION ================= */}
            <Box sx={{ py: 15, background: `linear-gradient(135deg, ${COLORS.dark}, ${COLORS.secondary}, ${COLORS.primary})` }}>
                <Container maxWidth="md" sx={{ textAlign: 'center' }}>
                    <MotionBox
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <Typography variant="h3" sx={{ color: COLORS.white, fontWeight: 700, mb: 3 }}>
                            Hãy Cùng Nhau Tạo Nên Điều Đặc Biệt
                        </Typography>
                        <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.9)', mb: 6, fontWeight: 400 }}>
                            Tham gia cùng chúng tôi trong hành trình kết nối và sáng tạo
                        </Typography>

                        <Stack direction="row" spacing={3} justifyContent="center" flexWrap="wrap">
                            <MotionButton
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                sx={{
                                    bgcolor: COLORS.white, color: COLORS.primary,
                                    px: 5, py: 2, borderRadius: 50, fontSize: '1.1rem', fontWeight: 600, textTransform: 'none',
                                    '&:hover': { bgcolor: '#f0f0f0' }
                                }}
                            >
                                Tham gia ngay
                            </MotionButton>
                            <MotionButton
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                variant="outlined"
                                sx={{
                                    borderColor: COLORS.white, color: COLORS.white,
                                    px: 5, py: 2, borderRadius: 50, fontSize: '1.1rem', fontWeight: 600, textTransform: 'none',
                                    '&:hover': { borderColor: COLORS.white, bgcolor: 'rgba(255,255,255,0.1)' }
                                }}
                            >
                                Tìm hiểu thêm
                            </MotionButton>
                        </Stack>
                    </MotionBox>
                </Container>
            </Box>

        </Box>
    );
}