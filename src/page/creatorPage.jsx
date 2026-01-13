import React from 'react';
import { Box, Container, Typography, Button, Stack, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { Users, TrendingUp, DollarSign, Award, Camera, Palette, Heart } from 'lucide-react';

import content from '../assets/content.jpeg';
import cele1 from '../assets/cele1.jpeg';
import backgroundCreator from '../assets/backgroundCreator.jpg';
import backgroundCreative from '../assets/backgroundCreative.jpg';
import backgroundSalary from '../assets/backgroundSalary.jpg';
import { ROUTES } from '@/router/routerConstants';
import { useNavigate } from 'react-router-dom';

const COLORS = {
  primary: '#C7364A',
  secondary: '#A92C3D',
  dark: '#16223A',
  white: '#ffffff',
  gray: '#f9fafb',
  textGray: '#4b5563'
};

const getOptimizedImage = (url, width = 800) => {
  if (url.includes('unsplash.com')) {
    return `${url}&w=${width}&q=80&auto=format`;
  }
  return url;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 20 },
    willChange: "transform, opacity"
  }
};

const scaleVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 150, damping: 20 },
    willChange: "transform, opacity"
  }
};

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

export default function CreatorPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: COLORS.white, overflowX: 'hidden' }}>

      {/* ================= HERO SECTION ================= */}
      <Box sx={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>

        {/* Background Animation */}
        <Box sx={{ position: 'absolute', inset: 0 }}>
          <Stack direction="row" sx={{ height: '100%', width: '100%' }}>
            {[
              backgroundCreator,
            ].map((img, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
                sx={{ flex: 1, position: 'relative', height: '100%', transform: 'translateZ(0)' }} // translateZ giúp mượt hơn
              >
                <Box
                  component="img"
                  src={getOptimizedImage(img, 600)}
                  sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </MotionBox>
            ))}
          </Stack>
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background: `linear-gradient(
                        135deg,
                        ${COLORS.dark}99 0%,
                        ${COLORS.secondary}80 60%,
                        ${COLORS.primary}99 100%
                      )`
            }}
          />
        </Box>

        {/* Hero Content */}
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 10, py: 10 }}>
          <Stack
            direction={isMobile ? 'column' : 'row'}
            spacing={6}
            alignItems="center"
            component={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >

            {/* Left Content */}
            <Box sx={{ flex: 1 }}>
              <MotionTypography variant="h1" variants={itemVariants}
                sx={{ fontSize: { xs: '3rem', md: '5rem' }, fontWeight: 700, color: COLORS.white, mb: 3, lineHeight: 1.1 }}
              >
               Đồng Hành<br />Cùng Những Giá Trị Lớn
              </MotionTypography>

              <MotionTypography variant="h6" variants={itemVariants}
                sx={{ color: 'rgba(255,255,255,0.9)', mb: 5, fontSize: '1.25rem', fontWeight: 400 }}>
                Bắt đầu hành trình chuyên nghiệp, phát triển đam mê và chạm tới những cơ hội lớn.
              </MotionTypography>

              <MotionButton
                onClick={() => navigate(ROUTES.CONTACT)}
                variants={scaleVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                sx={{
                  bgcolor: COLORS.white, color: COLORS.primary, px: 5, py: 2, borderRadius: 50,
                  fontSize: '1.1rem', fontWeight: 600, textTransform: 'none',
                  '&:hover': { bgcolor: '#f0f0f0' }
                }}
              >
                Tham gia ngay
              </MotionButton>
            </Box>

            {/* Right Content - Floating Stats */}
            <Box sx={{ flex: 1, width: '100%', height: { xs: 300, md: 400 }, position: 'relative' }}>
              {[
                { icon: Users, val: '100+', label: 'Creators', top: 0, right: { xs: 0, md: 40 } },
                { icon: DollarSign, val: '$2M+', label: 'Đã chi trả', bottom: { xs: 40, md: 80 }, left: { xs: 0, md: 40 } },
                { icon: Award, val: '98%', label: 'Hài lòng', bottom: 0, right: { xs: 20, md: 100 } }
              ].map((stat, idx) => (
                <MotionBox
                  key={idx}
                  variants={scaleVariants}
                  sx={{
                    position: 'absolute', top: stat.top, bottom: stat.bottom, left: stat.left, right: stat.right,
                    bgcolor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(6px)',
                    border: '1px solid rgba(255,255,255,0.2)', borderRadius: 4, p: 3, minWidth: 160,
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                  }}
                >
                  <stat.icon color="white" size={32} style={{ marginBottom: 8 }} />
                  <Typography variant="h4" sx={{ color: 'white', fontWeight: 700 }}>{stat.val}</Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>{stat.label}</Typography>
                </MotionBox>
              ))}
            </Box>

          </Stack>
        </Container>
      </Box>

      {/* ================= BENEFITS SECTION ================= */}
      <Box sx={{ py: 10, bgcolor: COLORS.white }}>
        <Container maxWidth="xl">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5 }}
            sx={{ textAlign: 'center', mb: 8 }}
          >
            <Typography variant="h3" sx={{ color: COLORS.dark, fontWeight: 700, mb: 2 }}>
              Lợi Ích Khi Tham Gia
            </Typography>
            <Typography variant="h6" sx={{ color: COLORS.textGray, fontWeight: 400 }}>
              Phát triển sự nghiệp creator của bạn
            </Typography>
          </MotionBox>

          <Stack
            direction={isMobile ? 'column' : 'row'}
            spacing={3}
            component={motion.div}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
          >

            {/* Cột Trái */}
            <Box sx={{ flex: { xs: 'auto', md: 1 }, display: 'flex' }}>
              <MotionBox variants={itemVariants}
                whileHover={{ y: -5 }}
                sx={{
                  flex: 1, position: 'relative', borderRadius: 6, overflow: 'hidden', minHeight: 400,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)', transform: 'translateZ(0)'
                }}
              >
                <Box
                  className="bg-hover"
                  sx={{
                    position: 'absolute', inset: 0,
                    backgroundImage: `url(${getOptimizedImage(content, 600)})`,
                    backgroundSize: 'cover', backgroundPosition: 'center',
                    transition: 'transform 0.4s ease-out'
                  }}
                />
                <Box sx={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${COLORS.primary}, ${COLORS.primary}99, transparent)` }} />
                <Box sx={{ position: 'relative', p: 4, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                  <Camera color="white" size={40} style={{ marginBottom: 16 }} />
                  <Typography variant="h4" sx={{ color: 'white', mb: 2, fontWeight: 600 }}>Thiết Bị Chuyên Nghiệp</Typography>
                  <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem' }}>Studio với trang thiết bị hiện đại</Typography>
                </Box>
              </MotionBox>
            </Box>

            {/* Cột Phải */}
            <Stack spacing={3} sx={{ flex: { xs: 'auto', md: 2 } }}>
              <MotionBox variants={itemVariants} whileHover={{ y: -5 }}
                sx={{ p: 4, borderRadius: 6, background: `linear-gradient(to right, ${COLORS.dark}, ${COLORS.secondary})`, boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}
              >
                <TrendingUp color="white" size={40} style={{ marginBottom: 16 }} />
                <Typography variant="h4" sx={{ color: 'white', mb: 2, fontWeight: 600 }}>Tăng Trưởng Nhanh Chóng</Typography>
                <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem' }}>Chiến lược phát triển kênh, tăng followers</Typography>
              </MotionBox>

              <Stack direction={isMobile ? 'column' : 'row'} spacing={3}>
                <MotionBox variants={itemVariants} whileHover={{ scale: 1.02 }}
                  sx={{ flex: 1, position: 'relative', borderRadius: 6, overflow: 'hidden', minHeight: 250, p: 4, transform: 'translateZ(0)' }}
                >
                  <Box sx={{ position: 'absolute', inset: 0, backgroundImage: `url(${getOptimizedImage(backgroundSalary, 400)})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                  <Box sx={{
                    position: 'absolute', inset: 0, background: `linear-gradient(
                    135deg,
                    ${COLORS.secondary}99 0%,
                    ${COLORS.primary}66 100%
                  )` }} />
                  <Box sx={{ position: 'relative' }}>
                    <DollarSign color="white" size={40} style={{ marginBottom: 16 }} />
                    <Typography variant="h5" sx={{ color: 'white', mb: 1, fontWeight: 600 }}>Thu Nhập Ổn Định</Typography>
                  </Box>
                </MotionBox>
                <MotionBox variants={itemVariants} whileHover={{ scale: 1.02 }}
                  sx={{ flex: 1, position: 'relative', borderRadius: 6, overflow: 'hidden', minHeight: 250, p: 4, transform: 'translateZ(0)' }}
                >
                  <Box sx={{ position: 'absolute', inset: 0, backgroundImage: `url(${getOptimizedImage(backgroundCreative, 400)})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                  <Box sx={{
                    position: 'absolute', inset: 0, background: `linear-gradient(
                    135deg,
                    ${COLORS.secondary}99 0%,
                    ${COLORS.primary}66 100%
                  )` }} />
                  <Box sx={{ position: 'relative' }}>
                    <Palette color="white" size={40} style={{ marginBottom: 16 }} />
                    <Typography variant="h5" sx={{ color: 'white', mb: 1, fontWeight: 600 }}>Tự Do Sáng Tạo</Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)' }}>Khẳng định dấu ấn cá nhân</Typography>
                  </Box>
                </MotionBox>
              </Stack>

              <MotionBox variants={itemVariants} whileHover={{ y: -5 }}
                sx={{ position: 'relative', borderRadius: 6, overflow: 'hidden', p: 4, minHeight: 250, display: 'flex', flexDirection: 'column', justifyContent: 'center', transform: 'translateZ(0)' }}
              >
                <Box className="bg-hover-2" sx={{ position: 'absolute', inset: 0, backgroundImage: `url(${getOptimizedImage(cele1, 600)})`, backgroundSize: 'cover', backgroundPosition: 'center 30%', transition: 'transform 0.4s ease-out', '&:hover': { transform: 'scale(1.05)' } }} />
                <Box sx={{ position: 'absolute', inset: 0, background: `linear-gradient(to right, ${COLORS.dark}E6, transparent)` }} />
                <Box sx={{ position: 'relative' }}>
                  <Heart color="white" size={40} style={{ marginBottom: 16 }} />
                  <Typography variant="h4" sx={{ color: 'white', mb: 2, fontWeight: 600 }}>Mạng Lưới Đồng Hành</Typography>
                  <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem' }}>Kết nối và phát triển cùng cộng đồng creators chuyên nghiệp.</Typography>
                </Box>
              </MotionBox>

            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* ================= PROCESS SECTION ================= */}
      <Box sx={{ py: 10, bgcolor: COLORS.gray }}>
        <Container maxWidth="xl">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            sx={{ textAlign: 'center', mb: 8 }}
          >
            <Typography variant="h3" sx={{ color: COLORS.dark, fontWeight: 700, mb: 2 }}>
              Quy Trình Kết Nối
            </Typography>
          </MotionBox>

          <Stack
            direction={isMobile ? 'column' : 'row'}
            spacing={4}
            component={motion.div}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
          >
            {[
              { step: '01', title: 'Đăng ký', desc: 'Khởi tạo hồ sơ creator\nCung cấp thông tin cơ bản để chúng tôi hiểu rõ phong cách và thế mạnh của bạn.' },
              { step: '02', title: 'Đánh Giá & Kết Nối', desc: 'Đánh giá hồ sơ & tư vấn phù hợp' },
              { step: '03', title: 'Nhận Dự Án', desc: 'Lựa chọn chiến dịch phù hợp\nTham gia các campaign, dự án phù hợp với hình ảnh và năng lực cá nhân.' },
              { step: '04', title: 'Sáng Tạo & Phát Triển', desc: 'áng tạo nội dung & gia tăng thu nhập\nTập trung phát triển nội dung, xây dựng thương hiệu cá nhân' },
            ].map((item, index) => (
              <MotionBox
                key={index}
                variants={itemVariants}
                sx={{ flex: 1, position: 'relative' }}
              >
                {index < 3 && !isMobile && (
                  <Box
                    sx={{
                      position: 'absolute', top: 50, left: 'calc(100% - 20px)', width: 'calc(100% + 40px)', height: 2, zIndex: 0,
                      background: `linear-gradient(to right, ${COLORS.primary}, transparent)`
                    }}
                  />
                )}

                <MotionBox
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  sx={{
                    bgcolor: COLORS.white, borderRadius: 4, p: 4, boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                    position: 'relative', zIndex: 1, height: '100%', cursor: 'default'
                  }}
                >
                  <Typography variant="h2" sx={{ color: COLORS.primary, opacity: 0.2, fontWeight: 900, mb: 2 }}>
                    {item.step}
                  </Typography>
                  <Typography variant="h5" sx={{ color: COLORS.dark, fontWeight: 600, mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: COLORS.textGray }}>
                    {item.desc}
                  </Typography>
                </MotionBox>
              </MotionBox>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* ================= CTA SECTION ================= */}
      <Box sx={{ py: 15, position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', inset: 0, backgroundImage: `url(${getOptimizedImage('https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg', 1200)})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <Box sx={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${COLORS.dark}F2, ${COLORS.primary}F2)` }} />

        <Container maxWidth="md" sx={{ position: 'relative', textAlign: 'center' }}>
          <MotionBox
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <Typography variant="h2" sx={{ color: COLORS.white, fontWeight: 700, mb: 3 }}>
              Bắt Đầu Hành Trình Của Bạn
            </Typography>
            <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.9)', mb: 6, fontWeight: 400 }}>
              Hãy tham gia cùng chúng tôi
            </Typography>

            <MotionButton
              onClick={() => navigate(ROUTES.CONTACT)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              sx={{
                bgcolor: COLORS.white, color: COLORS.primary, px: 6, py: 2, borderRadius: 50,
                fontSize: '1.2rem', fontWeight: 600, textTransform: 'none',
                '&:hover': { bgcolor: '#f0f0f0' }
              }}
            >
              Đăng ký miễn phí
            </MotionButton>
          </MotionBox>
        </Container>
      </Box>

    </Box>
  );
}