import React from 'react';
import { Box, Container, Typography, Button, Stack, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { Target, Users, Award, TrendingUp, Heart, Zap } from 'lucide-react';
import group from '../assets/group.jpeg';
import dtkbrand from '../assets/dtkbrand.jpg';
import cele1 from '../assets/cele1.jpeg';
import group2 from '../assets/group2.jpeg';
import content from '../assets/content.jpeg';
import tiktok from '../assets/tiktok.jpeg';

// --- CẤU HÌNH MÀU SẮC ---
const COLORS = {
    primary: '#C7364A',
    secondary: '#A92C3D',
    dark: '#16223A',
    white: '#ffffff',
    gray: '#f9fafb',
    textGray: '#4b5563'
};

// --- HÀM TỐI ƯU ẢNH (Quan trọng) ---
// Giúp giảm tải dung lượng ảnh, load nhanh hơn và đỡ tốn RAM GPU
const getOptimizedImage = (url, width = 800) => {
    if (url.includes('unsplash.com')) {
        return `${url}&w=${width}&q=80&auto=format`;
    }
    return url;
};

// --- MOTION WRAPPERS ---
// Dùng motion.div trực tiếp ở những chỗ không cần quá nhiều props của MUI để nhẹ hơn
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

// --- ANIMATION VARIANTS (Đã thêm will-change) ---
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05, // Giảm thời gian stagger để cảm giác nhanh hơn
            delayChildren: 0.05,
        }
    }
};

const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 }, // Giảm khoảng cách trượt xuống 20px
    visible: {
        opacity: 1,
        y: 0,
        // willChange báo cho trình duyệt render bằng GPU
        transition: { type: "spring", stiffness: 100, damping: 20 },
        willChange: "transform, opacity"
    }
};

const slideInVariants = (direction = "left") => ({
    hidden: { opacity: 0, x: direction === "left" ? -20 : 20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { type: "spring", stiffness: 100, damping: 20 },
        willChange: "transform, opacity"
    }
});

const popUpVariants = {
    hidden: { opacity: 0, scale: 0.95 }, // Scale ít thôi để đỡ bị mờ text
    visible: {
        opacity: 1,
        scale: 1,
        transition: { type: "spring", stiffness: 120, damping: 20 },
        willChange: "transform, opacity"
    }
};

export default function AboutUsPage() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: COLORS.white, overflowX: 'hidden' }}>

            {/* ================= HERO SECTION ================= */}
            <Box sx={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>

                {/* Background Image - Load ảnh kích thước lớn nhưng đã tối ưu */}
                <MotionBox
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    sx={{ position: 'absolute', inset: 0 }}
                >
                    <Box
                        sx={{
                            position: 'absolute', inset: 0,
                            backgroundImage: `url(${getOptimizedImage(dtkbrand, 1600)})`,
                            backgroundSize: 'cover', backgroundPosition: 'center'
                        }}
                    />
                    <Box sx={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${COLORS.dark}F2, ${COLORS.secondary}E6, ${COLORS.primary}F2)` }} />
                </MotionBox>

                <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 10, py: 10 }}>
                    <Stack
                        direction={isMobile ? 'column' : 'row'}
                        spacing={8}
                        alignItems="center"
                        component={motion.div}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >

                        {/* Left Content */}
                        <Box sx={{ flex: 1 }}>
                            <MotionTypography variant="h1" variants={fadeInUpVariants} sx={{ fontSize: { xs: '3rem', md: '5rem' }, fontWeight: 700, color: COLORS.white, mb: 3 }}>
                                Về DTK-Media
                            </MotionTypography>
                            <MotionTypography variant="h5" variants={fadeInUpVariants} sx={{ color: 'rgba(255,255,255,0.9)', mb: 6, fontWeight: 400 }}>
                                Kết nối thương hiệu với những người sáng tạo nội dung hàng đầu Việt Nam
                            </MotionTypography>

                            {/* Stats Grid */}
                            <Box
                                component={motion.div}
                                variants={containerVariants}
                                sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}
                            >
                                {[
                                    { number: '5000+', label: 'Creators' },
                                    { number: '500+', label: 'Brands' },
                                    { number: '10K+', label: 'Campaigns' },
                                ].map((stat, index) => (
                                    <MotionBox
                                        key={index}
                                        variants={popUpVariants}
                                        // Bỏ hiệu ứng hover phức tạp để giảm lag
                                        whileHover={{ y: -5 }}
                                        sx={{
                                            // Giảm blur xuống hoặc bỏ hẳn nếu máy yếu, blur càng cao càng lag
                                            bgcolor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(5px)',
                                            border: '1px solid rgba(255,255,255,0.2)', borderRadius: 4, p: 3,
                                            minWidth: 140, flex: { xs: 1, sm: 'none' }, cursor: 'default'
                                        }}
                                    >
                                        <Typography variant="h4" sx={{ color: COLORS.white, mb: 1, fontWeight: 700 }}>{stat.number}</Typography>
                                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>{stat.label}</Typography>
                                    </MotionBox>
                                ))}
                            </Box>
                        </Box>

                        {/* Right Content - Image Mosaic */}
                        <Box sx={{ flex: 1, width: '100%' }}>
                            <Box
                                component={motion.div}
                                variants={containerVariants}
                                sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}
                            >
                                {[
                                    cele1,
                                    group,
                                    group2,
                                    content
                                ].map((img, index) => (
                                    <MotionBox
                                        key={index}
                                        variants={popUpVariants}
                                        whileHover={{ scale: 1.02 }} // Scale nhẹ hơn
                                        sx={{
                                            width: 'calc(50% - 12px)',
                                            height: 200, borderRadius: 4, overflow: 'hidden', boxShadow: 3,
                                            // Thêm transform: translateZ(0) để kích hoạt hardware acceleration
                                            transform: 'translateZ(0)'
                                        }}
                                    >
                                        <Box
                                            component="img"
                                            // Tải ảnh nhỏ (width 400px)
                                            src={getOptimizedImage(img, 400)}
                                            sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </MotionBox>
                                ))}
                            </Box>
                        </Box>
                    </Stack>
                </Container>
            </Box>

            {/* ================= MISSION SECTION ================= */}
            <Box sx={{ py: 15, bgcolor: COLORS.white }}>
                <Container maxWidth="xl">
                    <Stack
                        direction={isMobile ? 'column' : 'row'}
                        spacing={8}
                        alignItems="center"
                        component={motion.div}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-10%" }} // Margin % linh hoạt hơn px
                        variants={containerVariants}
                    >

                        {/* Left Image */}
                        <MotionBox
                            variants={slideInVariants("left")}
                            sx={{ flex: 1, position: 'relative', height: 600, borderRadius: 6, overflow: 'hidden', width: '100%', transform: 'translateZ(0)' }}
                        >
                            <Box
                                component="img"
                                src={getOptimizedImage(dtkbrand, 800)}
                                sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <Box sx={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${COLORS.primary}CC, transparent)` }} />

                            <Box sx={{ position: 'absolute', bottom: 32, left: 32, right: 32 }}>
                                <MotionBox
                                    variants={popUpVariants}
                                    sx={{
                                        // Giảm blur xuống 8px
                                        bgcolor: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)',
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
                        <Box sx={{ flex: 1 }}>
                            <MotionTypography variant="h3" variants={fadeInUpVariants} sx={{ color: COLORS.dark, fontWeight: 700, mb: 3 }}>
                                Giới thiệu về DTK Media
                            </MotionTypography>
                            <MotionTypography variant="h6" variants={fadeInUpVariants} sx={{ color: COLORS.textGray, mb: 3, fontWeight: 400 }}>
                                DTK Media là thành viên của Tân Khoa Group – tập đoàn đa ngành hoạt động trong lĩnh vực Xây dựng, Thiết bị công nghiệp và F&B.
                            </MotionTypography>
                            <MotionTypography variant="body1" variants={fadeInUpVariants} sx={{ color: COLORS.textGray, mb: 5, fontSize: '1.1rem', lineHeight: 1.8 }}>
                                Được thành lập nhằm mở rộng sang Thương mại điện tử và Livestream giải trí, DTK Media hướng tới xây dựng hệ sinh thái nội dung sáng tạo, kết nối thương hiệu, người sáng tạo và khán giả trên nền tảng công nghệ hiện đại.
                            </MotionTypography>

                            <Stack spacing={2} component={motion.div} variants={containerVariants}>
                                {['Xây dựng hệ sinh thái nam thần tượng cao cấp', 'Ươm mầm & đào tạo thế hệ thần tượng trẻ', 'Kiến tạo vương quốc sân khấu số'].map((value, index) => (
                                    <MotionBox
                                        key={index}
                                        variants={slideInVariants("right")}
                                        sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
                                    >
                                        <Box sx={{ width: 10, height: 10, bgcolor: COLORS.primary, borderRadius: '50%' }} />
                                        <Typography variant="h6" sx={{ color: COLORS.dark, fontSize: '1.1rem' }}>{value}</Typography>
                                    </MotionBox>
                                ))}
                            </Stack>
                        </Box>
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

                    <Box
                        component={motion.div}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-10%" }}
                        sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}
                    >
                        {[
                            { icon: Heart, title: 'Đam Mê', desc: 'Chúng tôi yêu những gì chúng tôi làm', color: COLORS.primary },
                            { icon: Users, title: 'Cộng Đồng', desc: 'Xây dựng cộng đồng mạnh mẽ', color: COLORS.secondary },
                            { icon: Zap, title: 'Đổi Mới', desc: 'Không ngừng sáng tạo và cải tiến', color: COLORS.dark },
                            { icon: Award, title: 'Chất Lượng', desc: 'Cam kết chất lượng trong từng chiến dịch', color: COLORS.primary },
                            { icon: TrendingUp, title: 'Tăng Trưởng', desc: 'Đồng hành cùng đối tác phát triển', color: COLORS.secondary },
                            { icon: Target, title: 'Hiệu Quả', desc: 'Tối ưu hóa mọi nguồn lực', color: COLORS.dark },
                        ].map((value, index) => (
                            <MotionBox
                                key={index}
                                variants={fadeInUpVariants}
                                whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}
                                sx={{
                                    bgcolor: COLORS.white, p: 5, borderRadius: 6, boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                                    width: { xs: '100%', md: 'calc(33.333% - 22px)' },
                                    display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
                                    transition: 'box-shadow 0.2s ease-out, transform 0.2s ease-out' // Dùng CSS transition thay vì motion cho hover state để nhẹ hơn
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 64, height: 64, borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3,
                                        bgcolor: value.color,
                                        transition: 'transform 0.3s',
                                        '&:hover': { transform: 'rotate(10deg) scale(1.1)' } // CSS Hover
                                    }}
                                >
                                    <value.icon color="white" size={32} />
                                </Box>
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
                    </MotionBox>

                    <Box
                        component={motion.div}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-10%" }}
                        sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}
                    >
                        {[
                            { name: 'Nguyễn Văn A', role: 'CEO & Founder', img: 'https://images.unsplash.com/photo-1645848810565-ff3c1de0da09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg' },
                            { name: 'Trần Thị B', role: 'Head of Creators', img: 'https://images.unsplash.com/photo-1698181842119-a5283dea1440?crop=entropy&cs=tinysrgb&fit=max&fm=jpg' },
                            { name: 'Lê Văn C', role: 'Head of Brands', img: 'https://images.unsplash.com/photo-1669743281584-b9125947f9ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg' },
                            { name: 'Phạm Thị D', role: 'Creative Director', img: 'https://images.unsplash.com/photo-1681483570508-e88d43762d7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg' },
                        ].map((member, index) => (
                            <MotionBox
                                key={index}
                                variants={popUpVariants}
                                whileHover={{ y: -5 }}
                                sx={{
                                    width: { xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(25% - 24px)' },
                                    position: 'relative', cursor: 'pointer'
                                }}
                            >
                                <Box sx={{ position: 'relative', height: 400, borderRadius: 6, overflow: 'hidden', mb: 2, transform: 'translateZ(0)' }}>
                                    <Box
                                        component="img"
                                        src={getOptimizedImage(member.img, 600)} // Resize ảnh nhỏ hơn
                                        alt={member.name}
                                        sx={{
                                            width: '100%', height: '100%', objectFit: 'cover',
                                            transition: 'transform 0.4s ease-out',
                                            '&:hover': { transform: 'scale(1.05)' }
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
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={popUpVariants}
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