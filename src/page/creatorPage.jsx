import React from "react";
import { Star, ArrowRight, TrendingUp, Camera, Users, Lightbulb, Monitor, Video, BarChart, Sparkles, Award } from "lucide-react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Box, Typography, Container, Button } from "@mui/material";
import { ImageWithFallback } from "../component/ImageWithFallback";
import Leon from '../assets/Leon.png';
import NenTang from '../assets/NenTang.png';
import ChuLuc from '../assets/ChuLuc.png';
import TiemNang from '../assets/TiemNang.png';
import AnhSang from '../assets/AnhSang.png';
import Studio from '../assets/Studio.png';
import HeThongLive from '../assets/HeThongLive.png';
import HoTroNoiDung from '../assets/HoTroNoiDung.png';
import XayDungHinhAnh from '../assets/XayDungHinhAnh.png';
import DanceMakeUp from '../assets/DanceMakeUp.png';
import Group47 from '../assets/Group47.png';
import Traffic from '../assets/Traffic.png';
import Analyze from '../assets/Analyze.png';

// Khởi tạo các component kết hợp giữa MUI và Framer Motion
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

export default function ForCreator() {
  const requirements = [
    {
      icon: Star,
      text: "Mong muốn trở thành idol nam / nữ",
    },
    {
      icon: Camera,
      text: "Có năng khiếu biểu diễn, ngoại hình, camera sense",
    },
    {
      icon: Users,
      text: "Sẵn sàng học hỏi và làm việc theo nhóm",
    },
    {
      icon: TrendingUp,
      text: "Muốn phát triển lâu dài, không làm ngắn hạn",
    },
  ];

  const roadmap = [
    {
      level: "Giai đoạn 1",
      title: "Nghệ sĩ tiềm năng",
      description: "Đào tạo cơ bản, phát triển kỹ năng nền tảng",
      duration: "0-3 tháng",
      image: TiemNang,
      icon: Star,
      features: [
        "Đào tạo kỹ năng cơ bản",
        "Phát triển camera sense",
        "Học nhóm và giao tiếp"
      ],
      highlights: [
        { label: "Thời gian", value: "3 tháng" },
        { label: "Tập trung", value: "Kỹ năng nền tảng" },
      ]
    },
    {
      level: "Giai đoạn 2",
      title: "Idol chủ lực",
      description: "Tham gia nhóm livestream, xây dựng fanbase",
      duration: "3-12 tháng",
      image: ChuLuc,
      icon: Users,
      features: [
        "Livestream chính thức",
        "Xây dựng fanbase",
        "Thu nhập ổn định"
      ],
      highlights: [
        { label: "Thời gian", value: "9 tháng" },
        { label: "Tập trung", value: "Xây dựng fanbase" },
      ]
    },
    {
      level: "Giai đoạn 3",
      title: "Nghệ sĩ cấp nền tảng",
      description: "Hợp tác TikTok, phát triển thương hiệu cá nhân",
      duration: "12+ tháng",
      image: NenTang,
      icon: Award,
      features: [
        "Hợp tác thương hiệu",
        "Phát triển cá nhân",
        "Mở rộng sự nghiệp"
      ],
      highlights: [
        { label: "Thời gian", value: "Dài hạn" },
        { label: "Tập trung", value: "Thương hiệu cá nhân" },
      ]
    },
  ];

  const facilities = [
    {
      icon: Monitor,
      title: "Studio livestream quy mô lớn",
      image: Studio,
    },
    {
      icon: Video,
      title: "Hệ thống phòng live đồng thời",
      image: HeThongLive,
    },
    {
      icon: Camera,
      title: "Trang thiết bị ánh sáng – âm thanh – camera chuyên nghiệp",
      image: AnhSang,
    },
  ];

  const training = [
    {
      title: "Dance – Makeup – Kỹ năng biểu diễn",
      image: DanceMakeUp,
    },
    {
      title: "Xây dựng hình ảnh cá nhân",
      image: XayDungHinhAnh,
    },
    {
      title: "Hỗ trợ nội dung & kịch bản livestream",
      image: HoTroNoiDung,
    },
  ];

  const operations = [
    {
      icon: Users,
      title: "Nhóm 4–7 thành viên + MC + quản lý riêng",
      image: Group47,
    },
    {
      icon: BarChart,
      title: "Phân tích dữ liệu – tối ưu livestream",
      image: Analyze,
    },
    {
      icon: TrendingUp,
      title: "Đảm bảo traffic & thu nhập ổn định",
      image: Traffic,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <Box sx={{ bgcolor: "#FAFAFA", overflowX: "hidden", minHeight: "100vh" }}>
      {/* --- Hero Section --- */}
      <Box component="section" sx={{ position: "relative", minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", bgcolor: "white" }}>
        <Container maxWidth="lg" sx={{ textAlign: "center", py: 10 }}>
          <MotionBox
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              px: 2,
              py: 1,
              bgcolor: "grey.50",
              borderRadius: 50,
              border: "1px solid",
              borderColor: "grey.200",
              mb: 4,
            }}
          >
            <Star size={16} color="#C7364A" />
            <Typography variant="body2" sx={{ color: "#2A2A2A", fontWeight: 500 }}>
              Cơ hội nghề nghiệp
            </Typography>
          </MotionBox>
          <MotionTypography
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            sx={{
              fontSize: { xs: "2.25rem", sm: "3rem", md: "3.75rem" },
              fontWeight: 700,
              mb: 3,
              color: "#2A2A2A",
              lineHeight: 1.2,
            }}
          >
            Ai phù hợp gia nhập DTK?
          </MotionTypography>
          <MotionTypography
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            sx={{ fontSize: "1.25rem", color: "grey.600", maxWidth: 768, mx: "auto", mb: 6 }}
          >
            Nơi tài năng được tỏa sáng và ước mơ trở thành idol được hiện thực hóa
          </MotionTypography>
        </Container>
      </Box>

      {/* --- Requirements Section --- */}
      <Box component="section" sx={{ py: 10, bgcolor: "grey.50" }}>
        <Container maxWidth="lg">
          <MotionTypography
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            sx={{ fontSize: { xs: "1.875rem", sm: "2.25rem" }, fontWeight: 700, textAlign: "center", mb: 8, color: "#2A2A2A" }}
          >
            Bạn có phù hợp?
          </MotionTypography>

          <MotionBox
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }, gap: 3 }}
          >
            {requirements.map((req, index) => (
              <MotionBox
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                sx={{
                  p: 3,
                  bgcolor: "white",
                  borderRadius: 3,
                  border: "2px solid",
                  borderColor: "grey.200",
                  textAlign: "center",
                  transition: "all 0.3s",
                  "&:hover": { borderColor: "#C7364A", boxShadow: 4 },
                }}
              >
                <MotionBox
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  sx={{ width: 56, height: 56, bgcolor: "#C7364A", borderRadius: 3, display: "flex", alignItems: "center", justifyContent: "center", mx: "auto", mb: 2, boxShadow: 3 }}
                >
                  <req.icon size={28} color="white" />
                </MotionBox>
                <Typography sx={{ fontWeight: 600, color: "grey.800" }}>{req.text}</Typography>
              </MotionBox>
            ))}
          </MotionBox>


          {/* Leon */}
          {/* --- Case Study: Leon --- */}
          <Box component="section" sx={{ py: 10, overflow: "hidden" }}>
            <Box
              sx={{
                display: "flex",
                gap: { xs: 6, md: 10 },
                alignItems: "center",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              {/* LEFT IMAGE */}
              <MotionBox
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                sx={{
                  flex: 1,
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <MotionBox
                  whileHover="hover"
                  sx={{
                    position: "relative",
                    width: "100%",
                    maxWidth: "420px",
                    borderRadius: 6,
                    overflow: "hidden",
                    boxShadow: 6,
                  }}
                >
                  <MotionBox
                    variants={{ hover: { scale: 1.05 } }}
                    transition={{ duration: 0.5 }}
                    sx={{ width: "100%", height: "100%" }}
                  >
                    <ImageWithFallback src={Leon} alt="Leon" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </MotionBox>
                  {/* Lớp gradient mờ nhẹ dưới chân ảnh */}
                  <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.4), transparent 50%)", pointerEvents: "none" }} />
                </MotionBox>
              </MotionBox>

              {/* RIGHT CONTENT */}
              <MotionBox
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                sx={{ flex: 1 }}
              >
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    px: 2,
                    py: 1,
                    bgcolor: "#FEFCE8",
                    borderRadius: 50,
                    border: "1px solid #FEF08A",
                    mb: 3,
                  }}
                >
                  <Award size={18} color="#CA8A04" />
                  <Typography sx={{ color: "#A16207", fontWeight: 600, fontSize: "0.875rem" }}>
                    Câu chuyện thành công
                  </Typography>
                </Box>

                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: "1.875rem", sm: "2.25rem" },
                    fontWeight: 700,
                    color: "#2A2A2A",
                    mb: 3,
                    lineHeight: 1.2,
                  }}
                >
                  Case Study: Hành trình của Leon
                </Typography>

                <Typography
                  sx={{
                    fontSize: "1.125rem",
                    color: "grey.700",
                    lineHeight: 1.8,
                    mb: 3,
                  }}
                >
                  <Box component="span" sx={{ fontWeight: 700, color: "#2A2A2A" }}>Leon</Box> – từ một nhân viên phục vụ, đã chuyển mình thành
                  <Box component="span" sx={{ fontWeight: 700, color: "#C7364A" }}> Idol chuyên nghiệp</Box> sau khi hợp tác và được đào tạo bài bản tại
                  <Box component="span" sx={{ fontWeight: 700, color: "#2A2A2A" }}> DTK Media</Box>.
                </Typography>

                <Typography
                  sx={{
                    fontSize: "1.125rem",
                    color: "grey.700",
                    lineHeight: 1.8,
                    mb: 3,
                  }}
                >
                  Khởi đầu từ con số <Box component="span" sx={{ fontWeight: 700 }}>0</Box>, Leon từng bước xây dựng thương hiệu cá
                  nhân, bứt phá lượng người theo dõi trong giai đoạn
                  <Box component="span" sx={{ fontWeight: 700 }}> 2024–2025</Box> và đạt mức thu nhập{" "}
                  <Box component="span" sx={{ fontWeight: 700, color: "#C7364A", bgcolor: "red.50", px: 1, py: 0.5, borderRadius: 1 }}>
                    50 triệu/tháng
                  </Box>.
                </Typography>

                <Box
                  sx={{
                    p: 3,
                    bgcolor: "grey.50",
                    borderRadius: 3,
                    borderLeft: "4px solid #C7364A",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "1rem",
                      color: "grey.800",
                      fontStyle: "italic",
                      lineHeight: 1.6,
                    }}
                  >
                    "Câu chuyện của Leon là minh chứng rõ ràng rằng với định hướng đúng và sự rèn luyện nghiêm túc, bất kỳ ai cũng có thể tỏa sáng."
                  </Typography>
                </Box>
              </MotionBox>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* --- Roadmap Section --- */}
      <Box component="section" sx={{ py: 10, bgcolor: "white" }}>
        <Container maxWidth="lg">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            sx={{ textAlign: "center", mb: 8 }}
          >
            <Typography variant="h4" sx={{ fontWeight: 700, color: "#2A2A2A", mb: 2, fontSize: { xs: "1.875rem", sm: "2.25rem" } }}>
              Lộ trình phát triển
            </Typography>
            <Typography sx={{ fontSize: "1.125rem", color: "grey.600" }}>
              Từ học viên mới đến nghệ sĩ cấp nền tảng
            </Typography>
          </MotionBox>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {roadmap.map((stage, index) => {
              const isEven = index % 2 === 0;

              return (
                <MotionBox
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", lg: isEven ? "row" : "row-reverse" },
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  {/* Image Side */}
                  <MotionBox
                    whileHover="hover"
                    sx={{ width: { xs: "100%", lg: "50%" }, position: "relative" }}
                  >
                    <MotionBox
                      variants={{ hover: { scale: 1.02 } }}
                      transition={{ duration: 0.3 }}
                      sx={{ position: "relative", height: 400, borderRadius: 6, overflow: "hidden", boxShadow: 6 }}
                    >
                      <MotionBox variants={{ hover: { scale: 1.1 } }} transition={{ duration: 0.7 }} sx={{ width: "100%", height: "100%" }}>
                        <ImageWithFallback src={stage.image} alt={stage.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      </MotionBox>
                      <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.5), transparent)" }} />

                      {/* Floating Badge */}
                      <Box sx={{ position: "absolute", top: 24, left: 24 }}>
                        <MotionBox
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          sx={{ display: "inline-flex", alignItems: "center", gap: 1.5, px: 3, py: 1.5, bgcolor: "rgba(255, 255, 255, 0.95)", backdropFilter: "blur(4px)", borderRadius: 50, boxShadow: 4 }}
                        >
                          <Box sx={{ width: 40, height: 40, borderRadius: "50%", bgcolor: "#C7364A", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: 3 }}>
                            <stage.icon size={20} color="white" />
                          </Box>
                          <Box>
                            <Typography sx={{ fontSize: "0.75rem", fontWeight: 600, color: "grey.500" }}>{stage.level}</Typography>
                            <Typography sx={{ fontSize: "0.875rem", fontWeight: 700, color: "#2A2A2A" }}>{stage.duration}</Typography>
                          </Box>
                        </MotionBox>
                      </Box>

                      {/* Number Badge */}
                      <Box sx={{ position: "absolute", bottom: 24, right: 24 }}>
                        <MotionBox
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          sx={{ width: 80, height: 80, borderRadius: "50%", bgcolor: "#2A2A2A", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontSize: "1.875rem", boxShadow: 6, border: "4px solid white" }}
                        >
                          {index + 1}
                        </MotionBox>
                      </Box>
                    </MotionBox>
                  </MotionBox>

                  {/* Content Side */}
                  <Box sx={{ width: { xs: "100%", lg: "50%" } }}>
                    <MotionBox
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, color: "#2A2A2A", fontSize: { xs: "1.875rem", sm: "2.25rem" } }}>
                        {stage.title}
                      </Typography>
                      <Typography sx={{ fontSize: "1.25rem", color: "grey.600", mb: 3 }}>
                        {stage.description}
                      </Typography>

                      {/* Highlights */}
                      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 2, mb: 3 }}>
                        {stage.highlights.map((highlight, idx) => (
                          <MotionBox
                            key={idx}
                            whileHover={{ scale: 1.05, borderColor: '#C7364A' }}
                            sx={{ p: 2, bgcolor: "grey.50", borderRadius: 3, border: "2px solid", borderColor: "grey.200", boxShadow: 1 }}
                          >
                            <Typography sx={{ fontSize: "0.875rem", color: "grey.500", mb: 0.5 }}>{highlight.label}</Typography>
                            <Typography sx={{ fontWeight: 700, color: "#2A2A2A" }}>{highlight.value}</Typography>
                          </MotionBox>
                        ))}
                      </Box>

                      {/* Features List */}
                      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                        {stage.features.map((feature, idx) => (
                          <MotionBox
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + idx * 0.1 }}
                            whileHover={{ x: 5 }}
                            sx={{ display: "flex", alignItems: "center", gap: 1.5, p: 1.5, bgcolor: "grey.50", borderRadius: 3 }}
                          >
                            <Box sx={{ width: 24, height: 24, borderRadius: "50%", bgcolor: "#C7364A", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                              <Box sx={{ width: 8, height: 8, bgcolor: "white", borderRadius: "50%" }} />
                            </Box>
                            <Typography sx={{ fontWeight: 500, color: "grey.800" }}>{feature}</Typography>
                          </MotionBox>
                        ))}
                      </Box>
                    </MotionBox>
                  </Box>
                </MotionBox>
              );
            })}
          </Box>
        </Container>
      </Box>

      {/* --- What DTK Provides Section --- */}
      <Box component="section" sx={{ py: 10, bgcolor: "grey.50" }}>
        <Container maxWidth="lg">
          <MotionTypography
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            sx={{ fontSize: { xs: "1.875rem", sm: "2.25rem" }, fontWeight: 700, textAlign: "center", mb: 8, color: "#2A2A2A" }}
          >
            DTK cung cấp gì?
          </MotionTypography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {/* Facilities */}
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 4 }}>
                <Box sx={{ width: 48, height: 48, bgcolor: "#C7364A", borderRadius: 3, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: 3 }}>
                  <Monitor size={28} color="white" />
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 700, color: "#2A2A2A" }}>Cơ sở vật chất</Typography>
              </Box>
              <MotionBox variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 3 }}>
                {facilities.map((facility, index) => (
                  <MotionBox key={index} variants={itemVariants} whileHover="hover" sx={{ position: "relative", overflow: "hidden", borderRadius: 4, boxShadow: 3, transition: "box-shadow 0.3s", "&:hover": { boxShadow: 6, transform: "translateY(-5px)" } }}>
                    <Box sx={{ relative: true, height: 256, overflow: "hidden" }}>
                      <MotionBox variants={{ hover: { scale: 1.1 } }} transition={{ duration: 0.5 }} sx={{ width: "100%", height: "100%" }}>
                        <ImageWithFallback src={facility.image} alt={facility.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      </MotionBox>
                      <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.4), transparent)" }} />
                      <Box sx={{ position: "absolute", top: 16, right: 16 }}>
                        <Box sx={{ width: 48, height: 48, bgcolor: "rgba(255, 255, 255, 0.2)", backdropFilter: "blur(4px)", borderRadius: 3, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255, 255, 255, 0.3)" }}>
                          <facility.icon size={24} color="white" />
                        </Box>
                      </Box>
                      <Box sx={{ position: "absolute", bottom: 0, left: 0, right: 0, p: 3 }}>
                        <Typography sx={{ fontWeight: 700, color: "white", fontSize: "1.125rem" }}>{facility.title}</Typography>
                      </Box>
                    </Box>
                  </MotionBox>
                ))}
              </MotionBox>
            </Box>

            {/* Training */}
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 4 }}>
                <Box sx={{ width: 48, height: 48, bgcolor: "#C7364A", borderRadius: 3, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: 3 }}>
                  <Lightbulb size={28} color="white" />
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 700, color: "#2A2A2A" }}>Đào tạo</Typography>
              </Box>
              <MotionBox variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 3 }}>
                {training.map((item, index) => (
                  <MotionBox key={index} variants={itemVariants} whileHover="hover" sx={{ position: "relative", overflow: "hidden", borderRadius: 4, boxShadow: 3, transition: "box-shadow 0.3s", "&:hover": { boxShadow: 6, transform: "translateY(-5px)" } }}>
                    <Box sx={{ relative: true, height: 256, overflow: "hidden" }}>
                      <MotionBox variants={{ hover: { scale: 1.1 } }} transition={{ duration: 0.5 }} sx={{ width: "100%", height: "100%" }}>
                        <ImageWithFallback src={item.image} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      </MotionBox>
                      <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.4), transparent)" }} />
                      <Box sx={{ position: "absolute", top: 16, right: 16 }}>
                        <Sparkles size={32} color="#FDE047" />
                      </Box>
                      <Box sx={{ position: "absolute", bottom: 0, left: 0, right: 0, p: 3 }}>
                        <Typography sx={{ fontWeight: 700, color: "white", fontSize: "1.125rem" }}>{item.title}</Typography>
                      </Box>
                    </Box>
                  </MotionBox>
                ))}
              </MotionBox>
            </Box>

            {/* Operations */}
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 4 }}>
                <Box sx={{ width: 48, height: 48, bgcolor: "#C7364A", borderRadius: 3, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: 3 }}>
                  <Users size={28} color="white" />
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 700, color: "#2A2A2A" }}>Vận hành nhóm</Typography>
              </Box>
              <MotionBox variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 3 }}>
                {operations.map((operation, index) => (
                  <MotionBox key={index} variants={itemVariants} whileHover="hover" sx={{ position: "relative", overflow: "hidden", borderRadius: 4, boxShadow: 3, transition: "box-shadow 0.3s", "&:hover": { boxShadow: 6, transform: "translateY(-5px)" } }}>
                    <Box sx={{ relative: true, height: 256, overflow: "hidden" }}>
                      <MotionBox variants={{ hover: { scale: 1.1 } }} transition={{ duration: 0.5 }} sx={{ width: "100%", height: "100%" }}>
                        <ImageWithFallback src={operation.image} alt={operation.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      </MotionBox>
                      <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.4), transparent)" }} />
                      <Box sx={{ position: "absolute", top: 16, right: 16 }}>
                        <Box sx={{ width: 48, height: 48, bgcolor: "rgba(255, 255, 255, 0.2)", backdropFilter: "blur(4px)", borderRadius: 3, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255, 255, 255, 0.3)" }}>
                          <operation.icon size={24} color="white" />
                        </Box>
                      </Box>
                      <Box sx={{ position: "absolute", bottom: 0, left: 0, right: 0, p: 3 }}>
                        <Typography sx={{ fontWeight: 700, color: "white", fontSize: "1.125rem" }}>{operation.title}</Typography>
                      </Box>
                    </Box>
                  </MotionBox>
                ))}
              </MotionBox>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* --- CTA Section --- */}
      <Box component="section" sx={{ py: 10, bgcolor: "white" }}>
        <Container maxWidth="md">
          <MotionBox
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            sx={{ bgcolor: "grey.50", borderRadius: 4, p: { xs: 4, sm: 6 }, border: "2px solid", borderColor: "grey.200", boxShadow: 4, textAlign: "center" }}
          >
            <MotionBox
              animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              sx={{ display: "flex", justifyContent: "center", mb: 3 }}
            >
              <Star size={64} color="#EAB308" fill="#EAB308" />
            </MotionBox>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: "#2A2A2A", fontSize: { xs: "1.875rem", sm: "2.25rem" } }}>
              Sẵn sàng trở thành idol?
            </Typography>
            <Typography sx={{ fontSize: "1.25rem", color: "grey.600", mb: 4 }}>
              Bắt đầu hành trình của bạn cùng DTK Media ngay hôm nay
            </Typography>
            <Button
              component={Link}
              to="/contact"
              sx={{
                px: 4,
                py: 2,
                bgcolor: "#2A2A2A",
                color: "white",
                borderRadius: 50,
                fontWeight: 600,
                textTransform: "none",
                fontSize: "1rem",
                display: "inline-flex",
                gap: 1,
                "&:hover": { bgcolor: "#1A1A1A", boxShadow: 4, "& .arrow-icon": { transform: "translateX(4px)" } },
              }}
            >
              Đăng ký ngay
              <ArrowRight size={20} className="arrow-icon" style={{ transition: "transform 0.3s" }} />
            </Button>
          </MotionBox>
        </Container>
      </Box>
    </Box>
  );
}