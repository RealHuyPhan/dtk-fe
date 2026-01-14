import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Button, Stack, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Target, BarChart3, Sparkles, Zap, Rocket } from 'lucide-react';
import dtkbrandbg from '../assets/dtkbrand.jpg';
import content from '../assets/content.jpeg';
import group from '../assets/group.jpeg';
import humanresource from '../assets/humanresource.jpg';
import increase from '../assets/increase.jpg';
import trust from '../assets/trust.jpg';
import cele1 from '../assets/cele1.jpeg';
import cele2 from '../assets/cele2.jpeg';
import cele3 from '../assets/cele3.jpeg';
import cele4 from '../assets/cele4.jpeg';
import { ROUTES } from '@/router/routerConstants';
import { useNavigate } from 'react-router-dom';

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

const SNAP_TRANSITION = {
  type: "spring",
  stiffness: 400,
  damping: 30,
  mass: 1
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

export default function BrandPage() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % loopingTexts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: COLORS.white, overflowX: 'hidden' }}>

      {/* --- HERO SECTION --- */}
      <Box sx={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        {/* Background */}
        <Box sx={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Box
            component="img"
            src={dtkbrandbg}
            alt="DTK background"
            sx={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',     // GIỮ TỈ LỆ
              objectPosition: 'center',
              transform: {
                xs: 'scale(1.15)',    // mobile zoom nhẹ
                md: 'scale(1)'
              }
            }}
          />
          <Box sx={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${COLORS.dark}E6 0%, ${COLORS.secondary}CC 50%, ${COLORS.primary}E6 100%)` }} />
        </Box>

        <MotionBox
          animate={{ y: [0, -30, 0], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          sx={{
            position: 'absolute', top: '10%', left: '5%', width: 100, height: 100,
            bgcolor: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(40px)',
            willChange: 'transform'
          }}
        />

        {/* Hero Content */}
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <MotionTypography variant="h1"
            sx={{ fontSize: { xs: '3rem', md: '5rem' }, fontWeight: 700, color: COLORS.white, mb: 3, lineHeight: 1.1 }}
          >
            Giải pháp<br />Cho Thương Hiệu
          </MotionTypography>

          {/* Text Loop -*/}
          <Box sx={{ height: 60, position: 'relative', mb: 6, overflow: 'hidden' }}>
            <AnimatePresence mode="wait">
              <MotionTypography
                key={currentTextIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                sx={{
                  color: 'rgba(255,255,255,0.9)',
                  fontSize: { xs: '1.25rem', md: '2rem' },
                  position: 'absolute', width: '100%', left: 0, textAlign: 'center'
                }}
              >
                {loopingTexts[currentTextIndex]}
              </MotionTypography>
            </AnimatePresence>
          </Box>

          <MotionButton
            onClick={() => navigate(ROUTES.CONTACT)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={SNAP_TRANSITION}
            sx={{
              bgcolor: COLORS.white, color: COLORS.primary,
              px: 6, py: 2, borderRadius: 50,
              fontSize: '1.1rem', fontWeight: 700, textTransform: 'none',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
              '&:hover': { bgcolor: '#f8f8f8' }
            }}
          >
            Bắt đầu chiến dịch
          </MotionButton>
        </Container>
      </Box>

      {/* --- BENTO GRID SECTION --- */}
      <Box sx={{ py: 12, bgcolor: COLORS.white }}>
        <Container maxWidth="lg">
          <MotionBox
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            sx={{ textAlign: 'center', mb: 8 }}
          >
            <Typography variant="h3" sx={{ color: COLORS.dark, fontWeight: 700, mb: 2 }}>
              Hệ Sinh Thái Toàn Diện
            </Typography>
            <Typography variant="h6" sx={{ color: COLORS.textGray, fontWeight: 400 }}>
              Mọi công cụ bạn cần để tăng trưởng bứt phá
            </Typography>
          </MotionBox>

          <Stack spacing={3}>
            {/* ROW 1 */}
            <Stack direction={isMobile ? 'column' : 'row'} spacing={3} sx={{ minHeight: { md: 420 } }}>
              {/* Card Lớn */}
              <MotionBox
                whileHover={{ y: -5 }}
                transition={SNAP_TRANSITION}
                sx={{
                  flex: { md: 2 }, position: 'relative', borderRadius: 6, overflow: 'hidden', cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                  '&:hover .bg-image': { transform: 'scale(1.05)' }
                }}
              >
                <Box
                  className="bg-image"
                  sx={{
                    position: 'absolute', inset: 0,
                    backgroundImage: `url(${content})`,
                    backgroundSize: 'cover', backgroundPosition: 'center',
                    transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  }}
                />
                <Box sx={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, transparent 0%, ${COLORS.dark}E6 100%)` }} />
                <Box sx={{ position: 'relative', p: 5, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                  <Box sx={{ width: 60, height: 60, bgcolor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
                    <Sparkles color="white" size={30} />
                  </Box>
                  <Typography variant="h4" sx={{ color: 'white', mb: 1, fontWeight: 700 }}>Livestream Arena</Typography>
                  <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)' }}>Sàn livestream rộng 1000m² và hệ thống livestream studio chuyên nghiệp</Typography>
                </Box>
              </MotionBox>

              <Stack direction="column" spacing={3} sx={{ flex: { md: 1 } }}>
                {[
                  { title: 'Professional Studio System', icon: Target, desc: 'Hệ thống livestream studio chuyên nghiệp', grad: `linear-gradient(135deg, ${COLORS.secondary}, ${COLORS.primary})` },
                  { title: 'Creative - Performance Team', icon: BarChart3, desc: 'Đội ngũ sáng tạo nội dung, biên đạo, dàn dựng, biểu diễn, makeup & tạo hình', grad: `linear-gradient(135deg, ${COLORS.dark}, #2A3B55)` }
                ].map((item, idx) => (
                  <MotionBox
                    key={idx}
                    whileHover={{ y: -5 }}
                    transition={SNAP_TRANSITION}
                    sx={{
                      flex: 1, borderRadius: 6, p: 4, cursor: 'pointer',
                      background: item.grad, position: 'relative', overflow: 'hidden',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                      display: 'flex', flexDirection: 'column', justifyContent: 'center'
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box sx={{ p: 1.5, bgcolor: 'rgba(255,255,255,0.2)', borderRadius: 2, mr: 2 }}>
                        <item.icon color="white" size={24} />
                      </Box>
                      <Typography variant="h5" sx={{ color: 'white', fontWeight: 600 }}>{item.title}</Typography>
                    </Box>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>{item.desc}</Typography>
                  </MotionBox>
                ))}
              </Stack>
            </Stack>

            {/* ROW 2 - Medium Card */}
            <MotionBox
              whileHover={{ y: -5 }}
              transition={SNAP_TRANSITION}
              sx={{
                width: isMobile ? '100%' : '66%', height: 300,
                position: 'relative', borderRadius: 6, overflow: 'hidden', cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                '&:hover .bg-image-2': { transform: 'scale(1.05)' }
              }}
            >
              <Box
                className="bg-image-2"
                sx={{
                  position: 'absolute', inset: 0,
                  backgroundImage: `url(${group})`,
                  backgroundSize: 'cover', backgroundPosition: 'center',
                  transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}
              />
              <Box sx={{ position: 'absolute', inset: 0, background: `linear-gradient(90deg, ${COLORS.dark}E6 0%, transparent 100%)` }} />
              <Box sx={{ position: 'relative', p: 5, height: '100%', display: 'flex', alignItems: 'center' }}>
                <Box>
                  <Box sx={{ display: 'inline-flex', p: 1.5, bgcolor: COLORS.primary, borderRadius: 3, mb: 2 }}>
                    <TrendingUp color="white" size={24} />
                  </Box>
                  <Typography variant="h4" sx={{ color: 'white', mb: 1, fontWeight: 700 }}>Production Crew</Typography>
                  <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', maxWidth: 400 }}>
                    Chiến lược tăng trưởng đột phá, Ekip quay dựng và hậu kỳ
                  </Typography>
                </Box>
              </Box>
            </MotionBox>
          </Stack>
        </Container>
      </Box>

      {/* --- WHY CHOOSE US --- */}
      <Box sx={{ py: 12, bgcolor: COLORS.gray }}>
        <Container maxWidth="lg">
          <MotionBox initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" sx={{ color: COLORS.dark, fontWeight: 700 }}>Tại Sao Chọn Chúng Tôi?</Typography>
          </MotionBox>

          <Stack direction={isMobile ? 'column' : 'row'} spacing={4}>
            {[
              { icon: Zap, title: 'Strong Foundation - Credibility', desc: 'Vận hành vững chắc, uy tín được khẳng định.', img: trust },
              { icon: Target, title: 'Professional Team - Ecosystem', desc: 'Nhân sự tinh gọn, hệ sinh thái đồng bộ.', img: humanresource },
              { icon: Rocket, title: 'Commercial Power - Added Value', desc: 'Tối ưu thương mại, gia tăng giá trị.', img: increase },
            ].map((item, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
                sx={{ flex: 1, cursor: 'default' }}
              >
                <Box sx={{
                  position: 'relative', height: 240, borderRadius: 4, overflow: 'hidden', mb: 3,
                  boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
                  '&:hover .card-img': { transform: 'scale(1.1)' }
                }}>
                  <Box
                    className="card-img"
                    component="img" src={item.img}
                    sx={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                  />
                  <Box sx={{ position: 'absolute', bottom: 16, left: 16, width: 50, height: 50, bgcolor: COLORS.white, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 2 }}>
                    <item.icon color={COLORS.primary} size={24} />
                  </Box>
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 700, color: COLORS.dark, mb: 1 }}>{item.title}</Typography>
                <Typography variant="body1" sx={{ color: COLORS.textGray }}>{item.desc}</Typography>
              </MotionBox>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* --- SUCCESS STORIES --- */}
      <Box sx={{ py: 12, bgcolor: COLORS.white }}>
        <Container maxWidth="xl">
          <Typography variant="h3" sx={{ textAlign: 'center', color: COLORS.dark, fontWeight: 700, mb: 8 }}>
            Dấu Ấn Tiêu Biểu
          </Typography>

          <Stack direction="row" flexWrap="wrap" gap={3} justifyContent="center">
            {[
              { img: cele1, kpi: 'Trending' },
              { img: cele2, kpi: 'Fest VIETNAM' },
              { img: cele3, kpi: 'Fest VIETNAM' },
              { img: cele4, kpi: 'Trending' },
            ].map((item, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                sx={{
                  position: 'relative',
                  aspectRatio: '5/5',
                  width: { xs: '100%', sm: 'calc(50% - 24px)', md: 'calc(25% - 24px)' },
                  // --------------------------

                  borderRadius: 4,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                  '&:hover .story-overlay': { opacity: 1 }
                }}
              >
                <Box
                  component="img"
                  src={item.img}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />

                {/* Overlay Effect */}
                <Box
                  className="story-overlay"
                  sx={{
                    position: 'absolute', inset: 0,
                    background: `linear-gradient(to top, ${COLORS.primary}E6, ${COLORS.primary}40)`,
                    opacity: 0, transition: 'opacity 0.3s ease',
                    display: 'flex', alignItems: 'flex-end', p: 3
                  }}
                >
                  <Box>
                    <Typography variant="overline" sx={{ color: 'white', opacity: 0.8 }}>
                      Case Study #{index + 1}
                    </Typography>
                    <Typography variant="h5" sx={{ color: 'white', fontWeight: 700 }}>
                      {item.kpi}
                    </Typography>
                  </Box>
                </Box>
              </MotionBox>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* --- CTA SECTION --- */}
      <Box sx={{ py: 12, background: `linear-gradient(135deg, ${COLORS.dark}, #253350)` }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h3" sx={{ color: COLORS.white, fontWeight: 700, mb: 3 }}>
              Sẵn Sàng Tăng Trưởng Đột Phá?
            </Typography>
            <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.7)', mb: 6, fontWeight: 400 }}>
              Hơn 10000+ đối tác và khách hàng đồng hành . Cùng tạo nên dấu ấn tiếp theo.
            </Typography>
            <MotionButton
              onClick={() => navigate(ROUTES.CONTACT)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={SNAP_TRANSITION}
              sx={{
                bgcolor: COLORS.primary, color: COLORS.white,
                px: 8, py: 2.5, borderRadius: 50,
                fontSize: '1.2rem', fontWeight: 700, textTransform: 'none',
                boxShadow: '0 10px 30px rgba(199, 54, 74, 0.4)',
                '&:hover': { bgcolor: COLORS.secondary }
              }}
            >
              Đặt lịch tư vấn miễn phí
            </MotionButton>
          </MotionBox>
        </Container>
      </Box>
    </Box>
  );
}