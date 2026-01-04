import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Button, Stack, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { TrendingUp, Target, BarChart3, Sparkles, Zap, Rocket } from 'lucide-react';

// Định nghĩa màu sắc theo yêu cầu trước đó
const COLORS = {
  primary: '#C7364A',
  secondary: '#A92C3D',
  dark: '#16223A',
  white: '#ffffff',
  gray: '#f5f5f5',
  textGray: '#666666'
};

const loopingTexts = [
  'Tăng nhận diện thương hiệu',
  'Tiếp cận khách hàng mới',
  'Xây dựng lòng tin',
  'Tạo nội dung viral',
];

// Component Motion Wrapper để dùng animation với MUI Component
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

export default function BrandPage() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const theme = useTheme();
  // Check responsive để chỉnh layout Flexbox
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % loopingTexts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: COLORS.white }}>
      
      {/* --- HERO SECTION --- */}
      <Box sx={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        {/* Background Image & Overlay */}
        <Box sx={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1764123108291-0f48d2c7e563?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGNvbGxhYm9yYXRpb24lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY3NTE1NTYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <Box
            sx={{
              position: 'absolute', inset: 0,
              background: `linear-gradient(135deg, ${COLORS.dark}E6 0%, ${COLORS.secondary}CC 50%, ${COLORS.primary}E6 100%)` // E6, CC là opacity hex
            }}
          />
        </Box>

        {/* Hero Content */}
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <MotionTypography
            variant="h2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            sx={{
              color: COLORS.white,
              fontWeight: 700,
              mb: 4,
              fontSize: { xs: '2.5rem', md: '4.5rem' }
            }}
          >
            Giải Pháp Cho Thương Hiệu
          </MotionTypography>

          {/* Text Loop */}
          <Box sx={{ height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 4 }}>
            <MotionTypography
              key={currentTextIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              sx={{ color: COLORS.white, fontSize: { xs: '1.5rem', md: '2.5rem' } }}
            >
              {loopingTexts[currentTextIndex]}
            </MotionTypography>
          </Box>

          <MotionTypography
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            sx={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.25rem', mb: 6 }}
          >
            Kết nối với hàng nghìn creators để mang thương hiệu của bạn đến gần hơn với khách hàng
          </MotionTypography>

          <MotionButton
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            sx={{
              bgcolor: COLORS.white,
              color: COLORS.primary,
              px: 5, py: 2,
              borderRadius: 50,
              fontSize: '1.1rem',
              textTransform: 'none',
              fontWeight: 600,
              '&:hover': { bgcolor: '#f0f0f0' }
            }}
          >
            Bắt đầu hợp tác
          </MotionButton>
        </Container>

        {/* Floating Elements (Background Blobs) */}
        <MotionBox
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          sx={{
            position: 'absolute', top: 80, left: 40, width: 80, height: 80,
            bgcolor: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(20px)'
          }}
        />
        <MotionBox
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          sx={{
            position: 'absolute', bottom: 80, right: 40, width: 128, height: 128,
            bgcolor: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(20px)'
          }}
        />
      </Box>

      {/* --- BENTO SECTION (NO GRID - USING FLEX STACK) --- */}
      <Box sx={{ py: 10, bgcolor: COLORS.white, overflow: 'hidden' }}>
        <Container maxWidth="lg">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            sx={{ textAlign: 'center', mb: 8 }}
          >
            <Typography variant="h3" sx={{ color: COLORS.dark, fontWeight: 700, mb: 2 }}>
              Nâng Tầm Thương Hiệu Của Bạn
            </Typography>
            <Typography variant="h6" sx={{ color: COLORS.textGray }}>
              Chúng tôi mang đến giải pháp toàn diện
            </Typography>
          </MotionBox>

          {/* Bento Layout Simulation using Flexbox */}
          <Stack spacing={3}>
            {/* Hàng 1: Big Card (Trái) + Cột 2 thẻ nhỏ (Phải) */}
            <Stack direction={isMobile ? 'column' : 'row'} spacing={3} sx={{ minHeight: { md: 500 } }}>
              
              {/* Feature Card 1 (Big) - Chiếm 2/3 */}
              <MotionBox
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                sx={{
                  flex: { md: 2 },
                  position: 'relative',
                  borderRadius: 6,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  minHeight: 300,
                  '&:hover .bg-image': { transform: 'scale(1.1)' }
                }}
              >
                <Box
                  className="bg-image"
                  sx={{
                    position: 'absolute', inset: 0,
                    backgroundImage: 'url(https://images.unsplash.com/photo-1609835794682-ed9fc1a51010?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHN0dWRpbyUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2NzUxNTU2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)',
                    backgroundSize: 'cover', backgroundPosition: 'center',
                    transition: 'transform 0.5s'
                  }}
                />
                <Box sx={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${COLORS.primary}CC, ${COLORS.dark}CC)` }} />
                <Box sx={{ position: 'relative', p: 5, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                  <MotionBox
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    sx={{ width: 64, height: 64, bgcolor: 'rgba(255,255,255,0.2)', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}
                  >
                    <Sparkles color="white" size={32} />
                  </MotionBox>
                  <Typography variant="h4" sx={{ color: 'white', mb: 2, fontWeight: 600 }}>Content Strategy</Typography>
                  <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                    Chiến lược nội dung độc đáo, phù hợp với DNA thương hiệu và mục tiêu kinh doanh
                  </Typography>
                </Box>
              </MotionBox>

              {/* Cột bên phải: 2 thẻ nhỏ - Chiếm 1/3 */}
              <Stack direction="column" spacing={3} sx={{ flex: { md: 1 } }}>
                {/* Small Card 1 */}
                <MotionBox
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ y: -10 }}
                  sx={{
                    flex: 1,
                    borderRadius: 6,
                    overflow: 'hidden',
                    background: `linear-gradient(135deg, ${COLORS.secondary}, ${COLORS.primary})`,
                    p: 4, cursor: 'pointer',
                    minHeight: 200
                  }}
                >
                  <MotionBox whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }} sx={{ width: 56, height: 56, bgcolor: 'rgba(255,255,255,0.2)', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                    <Target color="white" size={28} />
                  </MotionBox>
                  <Typography variant="h5" sx={{ color: 'white', mb: 1, fontWeight: 600 }}>Targeting</Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)' }}>Tiếp cận đúng đối tượng khách hàng</Typography>
                </MotionBox>

                {/* Small Card 2 */}
                <MotionBox
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ y: -10 }}
                  sx={{
                    flex: 1,
                    borderRadius: 6,
                    overflow: 'hidden',
                    background: `linear-gradient(135deg, ${COLORS.dark}, ${COLORS.secondary})`,
                    p: 4, cursor: 'pointer',
                    minHeight: 200
                  }}
                >
                  <MotionBox whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }} sx={{ width: 56, height: 56, bgcolor: 'rgba(255,255,255,0.2)', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                    <BarChart3 color="white" size={28} />
                  </MotionBox>
                  <Typography variant="h5" sx={{ color: 'white', mb: 1, fontWeight: 600 }}>Analytics</Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)' }}>Đo lường hiệu quả chiến dịch</Typography>
                </MotionBox>
              </Stack>
            </Stack>

            {/* Hàng 2: Medium Card (Chiếm 2/3 không gian nếu muốn giống grid cũ, hoặc full width) */}
            <Box sx={{ display: 'flex' }}>
                 <MotionBox
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ y: -10 }}
                  sx={{
                    width: { xs: '100%', md: '66%' }, // Bằng chiều rộng của cột bên trái ở trên (2/3)
                    position: 'relative',
                    borderRadius: 6,
                    overflow: 'hidden',
                    cursor: 'pointer',
                    height: 300,
                    '&:hover .bg-image-2': { transform: 'scale(1.1)' }
                  }}
                >
                  <Box
                    className="bg-image-2"
                    sx={{
                      position: 'absolute', inset: 0,
                      backgroundImage: 'url(https://images.unsplash.com/photo-1645848810565-ff3c1de0da09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpYSUyMGNyZWF0b3IlMjBpbmZsdWVuY2VyfGVufDF8fHx8MTc2NzUxNTU2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)',
                      backgroundSize: 'cover', backgroundPosition: 'center',
                      transition: 'transform 0.5s'
                    }}
                  />
                  <Box sx={{ position: 'absolute', inset: 0, background: `linear-gradient(to right, ${COLORS.dark}E6, transparent)` }} />
                  <Box sx={{ position: 'relative', p: 4, height: '100%', display: 'flex', alignItems: 'center' }}>
                    <Box>
                        <MotionBox
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            sx={{ width: 56, height: 56, bgcolor: 'rgba(255,255,255,0.2)', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}
                        >
                            <TrendingUp color="white" size={28} />
                        </MotionBox>
                        <Typography variant="h4" sx={{ color: 'white', mb: 2, fontWeight: 600 }}>Growth Marketing</Typography>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                            Tăng trưởng bền vững cùng chiến lược marketing hiệu quả
                        </Typography>
                    </Box>
                  </Box>
                </MotionBox>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* --- WHY CHOOSE US (FLEXBOX) --- */}
      <Box sx={{ py: 10, bgcolor: COLORS.gray }}>
        <Container maxWidth="lg">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            sx={{ textAlign: 'center', mb: 8 }}
          >
            <Typography variant="h3" sx={{ color: COLORS.dark, fontWeight: 700, mb: 2 }}>
              Tại Sao Chọn Chúng Tôi?
            </Typography>
          </MotionBox>

          <Stack direction={isMobile ? 'column' : 'row'} spacing={4} justifyContent="center">
            {[
              { icon: Zap, title: 'Nhanh Chóng', desc: 'Triển khai chiến dịch trong 48 giờ', img: 'https://images.unsplash.com/photo-1574576839798-00b48241d0b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg' },
              { icon: Target, title: 'Chính Xác', desc: 'Targeting đúng đối tượng mục tiêu', img: 'https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg' },
              { icon: Rocket, title: 'Hiệu Quả', desc: 'ROI cao, chi phí tối ưu', img: 'https://images.unsplash.com/photo-1764123108291-0f48d2c7e563?crop=entropy&cs=tinysrgb&fit=max&fm=jpg' },
            ].map((item, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                sx={{ flex: 1, minWidth: 0 }} // minWidth 0 helps flex items shrink properly
              >
                <Box sx={{ position: 'relative', height: 256, borderRadius: 4, overflow: 'hidden', mb: 3 }}>
                    <Box 
                        component="img" 
                        src={item.img} 
                        sx={{ 
                            width: '100%', height: '100%', objectFit: 'cover', 
                            transition: 'transform 0.5s', 
                            '&:hover': { transform: 'scale(1.1)' } 
                        }} 
                    />
                    <Box sx={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${COLORS.dark}CC, transparent)` }} />
                    <MotionBox
                        whileHover={{ scale: 1.1 }}
                        sx={{
                            position: 'absolute', bottom: 16, left: 16,
                            width: 56, height: 56, bgcolor: COLORS.primary,
                            borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}
                    >
                        <item.icon color="white" size={28} />
                    </MotionBox>
                </Box>
                <Typography variant="h5" sx={{ color: COLORS.dark, fontWeight: 600, mb: 1 }}>{item.title}</Typography>
                <Typography variant="body1" sx={{ color: COLORS.textGray }}>{item.desc}</Typography>
              </MotionBox>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* --- SUCCESS STORIES (FLEXBOX WRAP) --- */}
      <Box sx={{ py: 10, bgcolor: COLORS.white }}>
        <Container maxWidth="lg">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            sx={{ textAlign: 'center', mb: 8 }}
          >
             <Typography variant="h3" sx={{ color: COLORS.dark, fontWeight: 700, mb: 2 }}>
              Câu Chuyện Thành Công
            </Typography>
            <Typography variant="h6" sx={{ color: COLORS.textGray }}>
              Những chiến dịch ấn tượng mà chúng tôi đã thực hiện
            </Typography>
          </MotionBox>

          <Stack direction="row" flexWrap="wrap" gap={3} justifyContent="center">
            {[
              'https://images.unsplash.com/photo-1681483570508-e88d43762d7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg',
              'https://images.unsplash.com/photo-1698181842119-a5283dea1440?crop=entropy&cs=tinysrgb&fit=max&fm=jpg',
              'https://images.unsplash.com/photo-1669743281584-b9125947f9ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg',
              'https://images.unsplash.com/photo-1609835794682-ed9fc1a51010?crop=entropy&cs=tinysrgb&fit=max&fm=jpg',
            ].map((img, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                sx={{
                  position: 'relative',
                  height: 384,
                  width: { xs: '100%', sm: 'calc(50% - 24px)', md: 'calc(25% - 24px)' }, // Tính toán width thủ công thay vì grid
                  borderRadius: 4,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  boxShadow: 3
                }}
              >
                <Box component="img" src={img} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <MotionBox
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    sx={{
                        position: 'absolute', inset: 0,
                        background: `linear-gradient(to top, ${COLORS.primary}, transparent)`,
                        display: 'flex', alignItems: 'flex-end', p: 3
                    }}
                >
                    <Box sx={{ color: 'white' }}>
                        <Typography variant="body2" sx={{ mb: 0.5 }}>Campaign #{index + 1}</Typography>
                        <Typography variant="h6" fontWeight={700}>+{(index + 1) * 150}% Engagement</Typography>
                    </Box>
                </MotionBox>
              </MotionBox>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* --- CTA SECTION --- */}
      <Box sx={{ py: 10, background: `linear-gradient(135deg, ${COLORS.dark}, ${COLORS.secondary}, ${COLORS.primary})` }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <MotionBox
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Typography variant="h3" sx={{ color: COLORS.white, fontWeight: 700, mb: 3 }}>
              Sẵn Sàng Nâng Tầm Thương Hiệu?
            </Typography>
            <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.9)', mb: 6 }}>
              Hãy để chúng tôi đồng hành cùng bạn
            </Typography>
            <MotionButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              sx={{
                bgcolor: COLORS.white,
                color: COLORS.primary,
                px: 6, py: 2,
                borderRadius: 50,
                fontSize: '1.1rem',
                fontWeight: 600,
                textTransform: 'none',
                '&:hover': { bgcolor: '#f0f0f0' }
              }}
            >
              Liên hệ ngay
            </MotionButton>
          </MotionBox>
        </Container>
      </Box>
    </Box>
  );
}