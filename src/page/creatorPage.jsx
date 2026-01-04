import React from 'react';
import { Box, Container, Typography, Button, Stack, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { Users, TrendingUp, DollarSign, Award, Camera, Palette, Heart } from 'lucide-react';

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

export default function CreatorPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: COLORS.white, overflowX: 'hidden' }}>

      {/* ================= HERO SECTION ================= */}
      <Box sx={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        
        {/* Background with parallax effect simulation */}
        <Box sx={{ position: 'absolute', inset: 0 }}>
          <Stack direction="row" sx={{ height: '100%', width: '100%' }}>
            {[
              'https://images.unsplash.com/photo-1681483570508-e88d43762d7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg',
              'https://images.unsplash.com/photo-1698181842119-a5283dea1440?crop=entropy&cs=tinysrgb&fit=max&fm=jpg',
              'https://images.unsplash.com/photo-1669743281584-b9125947f9ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg'
            ].map((img, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                sx={{ flex: 1, position: 'relative', height: '100%' }}
              >
                <Box 
                  component="img" 
                  src={img} 
                  sx={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </MotionBox>
            ))}
          </Stack>
          {/* Gradient Overlay */}
          <Box
            sx={{
              position: 'absolute', inset: 0,
              background: `linear-gradient(135deg, ${COLORS.dark}F2 0%, ${COLORS.secondary}E6 50%, ${COLORS.primary}F2 100%)` // Hex opacity: F2=95%, E6=90%
            }}
          />
        </Box>

        {/* Hero Content */}
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 10, py: 10 }}>
          <Stack direction={isMobile ? 'column' : 'row'} spacing={6} alignItems="center">
            
            {/* Left Content */}
            <Box sx={{ flex: 1 }}>
              <MotionTypography
                variant="h1"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                sx={{ 
                  fontSize: { xs: '3rem', md: '5rem' }, 
                  fontWeight: 700, 
                  color: COLORS.white, 
                  mb: 3, lineHeight: 1.1 
                }}
              >
                Tỏa Sáng<br />Cùng Chúng Tôi
              </MotionTypography>
              
              <MotionTypography
                variant="h6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                sx={{ color: 'rgba(255,255,255,0.9)', mb: 5, fontSize: '1.25rem', fontWeight: 400 }}
              >
                Biến đam mê thành sự nghiệp, kết nối với những thương hiệu hàng đầu
              </MotionTypography>

              <MotionButton
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                sx={{
                  bgcolor: COLORS.white,
                  color: COLORS.primary,
                  px: 5, py: 2,
                  borderRadius: 50,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  '&:hover': { bgcolor: '#f0f0f0' }
                }}
              >
                Tham gia ngay
              </MotionButton>
            </Box>

            {/* Right Content - Floating Stats */}
            <Box sx={{ flex: 1, width: '100%', height: { xs: 300, md: 400 }, position: 'relative' }}>
              {/* Stat Card 1 (Top Right) */}
              <MotionBox
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                sx={{
                  position: 'absolute', top: 0, right: { xs: 0, md: 40 },
                  bgcolor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.2)', borderRadius: 4, p: 3, minWidth: 160
                }}
              >
                <Users color="white" size={32} style={{ marginBottom: 8 }} />
                <Typography variant="h4" sx={{ color: 'white', fontWeight: 700 }}>5000+</Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>Creators</Typography>
              </MotionBox>

              {/* Stat Card 2 (Bottom Left) */}
              <MotionBox
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
                sx={{
                  position: 'absolute', bottom: { xs: 40, md: 80 }, left: { xs: 0, md: 40 },
                  bgcolor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.2)', borderRadius: 4, p: 3, minWidth: 160
                }}
              >
                <DollarSign color="white" size={32} style={{ marginBottom: 8 }} />
                <Typography variant="h4" sx={{ color: 'white', fontWeight: 700 }}>$2M+</Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>Đã chi trả</Typography>
              </MotionBox>

              {/* Stat Card 3 (Bottom Right) */}
              <MotionBox
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 }}
                sx={{
                  position: 'absolute', bottom: 0, right: { xs: 20, md: 100 },
                  bgcolor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.2)', borderRadius: 4, p: 3, minWidth: 160
                }}
              >
                <Award color="white" size={32} style={{ marginBottom: 8 }} />
                <Typography variant="h4" sx={{ color: 'white', fontWeight: 700 }}>98%</Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>Hài lòng</Typography>
              </MotionBox>
            </Box>

          </Stack>
        </Container>
      </Box>

      {/* ================= BENEFITS SECTION (MOSAIC LAYOUT) ================= */}
      <Box sx={{ py: 10, bgcolor: COLORS.white }}>
        <Container maxWidth="xl">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            sx={{ textAlign: 'center', mb: 8 }}
          >
            <Typography variant="h3" sx={{ color: COLORS.dark, fontWeight: 700, mb: 2 }}>
              Lợi Ích Khi Tham Gia
            </Typography>
            <Typography variant="h6" sx={{ color: COLORS.textGray, fontWeight: 400 }}>
              Phát triển sự nghiệp creator của bạn
            </Typography>
          </MotionBox>

          {/* Mosaic Layout using Nested Stacks */}
          <Stack direction={isMobile ? 'column' : 'row'} spacing={3}>
            
            {/* Cột Trái (Chiếm 1/3) - Card Cao */}
            <Box sx={{ flex: { xs: 'auto', md: 1 }, display: 'flex' }}>
              <MotionBox
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                sx={{
                  flex: 1, position: 'relative', borderRadius: 6, overflow: 'hidden', minHeight: 400,
                  '&:hover .bg-hover': { transform: 'scale(1.1)' }
                }}
              >
                <Box
                  className="bg-hover"
                  sx={{
                    position: 'absolute', inset: 0,
                    backgroundImage: 'url(https://images.unsplash.com/photo-1645848810565-ff3c1de0da09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg)',
                    backgroundSize: 'cover', backgroundPosition: 'center', transition: 'transform 0.7s'
                  }}
                />
                <Box sx={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${COLORS.primary}, ${COLORS.primary}99, transparent)` }} />
                <Box sx={{ position: 'relative', p: 4, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                  <Camera color="white" size={40} style={{ marginBottom: 16 }} />
                  <Typography variant="h4" sx={{ color: 'white', mb: 2, fontWeight: 600 }}>Thiết Bị Chuyên Nghiệp</Typography>
                  <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem' }}>
                    Studio với trang thiết bị hiện đại, hỗ trợ tạo content chất lượng cao
                  </Typography>
                </Box>
              </MotionBox>
            </Box>

            {/* Cột Phải (Chiếm 2/3) - Chứa các card còn lại */}
            <Stack spacing={3} sx={{ flex: { xs: 'auto', md: 2 } }}>
              
              {/* Card Dài Trên Cùng */}
              <MotionBox
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -10 }}
                sx={{
                  p: 4, borderRadius: 6,
                  background: `linear-gradient(to right, ${COLORS.dark}, ${COLORS.secondary})`
                }}
              >
                <TrendingUp color="white" size={40} style={{ marginBottom: 16 }} />
                <Typography variant="h4" sx={{ color: 'white', mb: 2, fontWeight: 600 }}>Tăng Trưởng Nhanh Chóng</Typography>
                <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem' }}>
                   Chiến lược phát triển kênh, tăng followers và engagement
                </Typography>
              </MotionBox>

              {/* Hàng chứa 2 card nhỏ */}
              <Stack direction={isMobile ? 'column' : 'row'} spacing={3}>
                <MotionBox
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  sx={{
                    flex: 1, position: 'relative', borderRadius: 6, overflow: 'hidden', minHeight: 250, p: 4
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute', inset: 0,
                      backgroundImage: 'url(https://images.unsplash.com/photo-1574576839798-00b48241d0b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg)',
                      backgroundSize: 'cover', backgroundPosition: 'center'
                    }}
                  />
                  <Box sx={{ position: 'absolute', inset: 0, bgcolor: `${COLORS.secondary}CC` }} />
                  <Box sx={{ position: 'relative' }}>
                    <DollarSign color="white" size={40} style={{ marginBottom: 16 }} />
                    <Typography variant="h5" sx={{ color: 'white', mb: 1, fontWeight: 600 }}>Thu Nhập Ổn Định</Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)' }}>Deal hấp dẫn từ các brand</Typography>
                  </Box>
                </MotionBox>

                <MotionBox
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  sx={{
                    flex: 1, borderRadius: 6, p: 4, minHeight: 250,
                    background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`
                  }}
                >
                  <Palette color="white" size={40} style={{ marginBottom: 16 }} />
                  <Typography variant="h5" sx={{ color: 'white', mb: 1, fontWeight: 600 }}>Sáng Tạo Tự Do</Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)' }}>Thể hiện phong cách riêng</Typography>
                </MotionBox>
              </Stack>

              {/* Card Dài Cuối Cùng */}
              <MotionBox
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ y: -10 }}
                sx={{
                  position: 'relative', borderRadius: 6, overflow: 'hidden', p: 4,
                  minHeight: 250, display: 'flex', flexDirection: 'column', justifyContent: 'center',
                  '&:hover .bg-hover-2': { transform: 'scale(1.1)' }
                }}
              >
                 <Box
                  className="bg-hover-2"
                  sx={{
                    position: 'absolute', inset: 0,
                    backgroundImage: 'url(https://images.unsplash.com/photo-1609835794682-ed9fc1a51010?crop=entropy&cs=tinysrgb&fit=max&fm=jpg)',
                    backgroundSize: 'cover', backgroundPosition: 'center', transition: 'transform 0.7s'
                  }}
                />
                <Box sx={{ position: 'absolute', inset: 0, background: `linear-gradient(to right, ${COLORS.dark}E6, transparent)` }} />
                <Box sx={{ position: 'relative' }}>
                   <Heart color="white" size={40} style={{ marginBottom: 16 }} />
                   <Typography variant="h4" sx={{ color: 'white', mb: 2, fontWeight: 600 }}>Cộng Đồng Hỗ Trợ</Typography>
                   <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem' }}>
                      Kết nối với các creators cùng chí hướng, học hỏi và phát triển
                   </Typography>
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
            sx={{ textAlign: 'center', mb: 8 }}
          >
            <Typography variant="h3" sx={{ color: COLORS.dark, fontWeight: 700, mb: 2 }}>
              Quy Trình Đơn Giản
            </Typography>
          </MotionBox>

          <Stack direction={isMobile ? 'column' : 'row'} spacing={4}>
            {[
              { step: '01', title: 'Đăng ký', desc: 'Tạo hồ sơ creator' },
              { step: '02', title: 'Xét duyệt', desc: 'Kiểm tra profile' },
              { step: '03', title: 'Nhận deal', desc: 'Chọn campaign phù hợp' },
              { step: '04', title: 'Sáng tạo', desc: 'Tạo nội dung & nhận tiền' },
            ].map((item, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                sx={{ flex: 1, position: 'relative' }}
              >
                {/* Connecting Line (Desktop only) */}
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
                  sx={{
                    bgcolor: COLORS.white, borderRadius: 4, p: 4, boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                    position: 'relative', zIndex: 1, height: '100%'
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

      {/* ================= SUCCESS STORIES ================= */}
      <Box sx={{ py: 10, bgcolor: COLORS.white }}>
        <Container maxWidth="xl">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            sx={{ textAlign: 'center', mb: 8 }}
          >
            <Typography variant="h3" sx={{ color: COLORS.dark, fontWeight: 700, mb: 2 }}>
              Câu Chuyện Thành Công
            </Typography>
            <Typography variant="h6" sx={{ color: COLORS.textGray, fontWeight: 400 }}>
              Creators đã phát triển cùng chúng tôi
            </Typography>
          </MotionBox>

          <Stack direction={isMobile ? 'column' : 'row'} spacing={4}>
            {[
              { name: 'Minh Anh', role: 'Fashion Blogger', growth: '+300%', img: 'https://images.unsplash.com/photo-1681483570508-e88d43762d7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg' },
              { name: 'Thu Hà', role: 'Beauty Creator', growth: '+250%', img: 'https://images.unsplash.com/photo-1698181842119-a5283dea1440?crop=entropy&cs=tinysrgb&fit=max&fm=jpg' },
              { name: 'Đức Nam', role: 'Food Blogger', growth: '+400%', img: 'https://images.unsplash.com/photo-1669743281584-b9125947f9ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg' },
            ].map((creator, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                sx={{ flex: 1, borderRadius: 4, overflow: 'hidden', height: 450, position: 'relative', cursor: 'pointer', '&:hover img': { transform: 'scale(1.1)' } }}
              >
                <Box
                  component="img"
                  src={creator.img}
                  alt={creator.name}
                  sx={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s' }}
                />
                {/* Gradient Overlay */}
                <Box sx={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${COLORS.dark}E6, transparent, transparent)` }} />
                
                {/* Content */}
                <Box sx={{ position: 'absolute', bottom: 24, left: 24, right: 24 }}>
                  <Typography variant="h5" sx={{ color: COLORS.white, fontWeight: 600, mb: 0.5 }}>{creator.name}</Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>{creator.role}</Typography>
                </Box>
                
                {/* Badge */}
                <Box sx={{ position: 'absolute', top: 24, right: 24, bgcolor: COLORS.primary, color: COLORS.white, px: 2, py: 1, borderRadius: 50, fontWeight: 600 }}>
                  {creator.growth}
                </Box>
              </MotionBox>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* ================= CTA SECTION ================= */}
      <Box sx={{ py: 15, position: 'relative', overflow: 'hidden' }}>
        <Box
          sx={{
            position: 'absolute', inset: 0,
            backgroundImage: 'url(https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg)',
            backgroundSize: 'cover', backgroundPosition: 'center'
          }}
        />
        <Box
          sx={{
             position: 'absolute', inset: 0,
             background: `linear-gradient(135deg, ${COLORS.dark}F2, ${COLORS.primary}F2)`
          }}
        />
        
        <Container maxWidth="md" sx={{ position: 'relative', textAlign: 'center' }}>
          <MotionBox
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Typography variant="h2" sx={{ color: COLORS.white, fontWeight: 700, mb: 3 }}>
              Bắt Đầu Hành Trình Của Bạn
            </Typography>
            <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.9)', mb: 6, fontWeight: 400 }}>
              Tham gia cùng hàng nghìn creators đã thành công
            </Typography>
            
            <MotionButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              sx={{
                bgcolor: COLORS.white,
                color: COLORS.primary,
                px: 6, py: 2,
                borderRadius: 50,
                fontSize: '1.2rem',
                fontWeight: 600,
                textTransform: 'none',
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