import React from "react";
import { Sparkles, TrendingUp, Users, Award, ArrowRight, Shield, Zap, Trophy, Star, Rocket, Target } from "lucide-react";
import { Link } from "react-router"; // hoặc react-router-dom tùy phiên bản của bạn
import { motion } from "framer-motion";
import { Box, Typography, Container, Button } from "@mui/material";
import { ImageWithFallback } from "../component/ImageWithFallback";
import sample from "../assets/background.mp4";
import HomePic1 from "../assets/HomePic1.png";
import LuuLuong from "../assets/LuuLuong.png";
import SQuad from "../assets/SQuad.png";


// Khởi tạo các component kết hợp giữa MUI và Framer Motion
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

export default function Home() {
  const coreValues = [
    {
      title: "Bảo chứng nền tảng",
      description: "Ươm mầm idol",
      icon: Shield,
    },
    {
      title: "Nền tảng tập đoàn",
      description: "Thương mại hóa – tạo doanh thu",
      icon: TrendingUp,
    },
    {
      title: "Đổi mới mô hình",
      description: " Nền tảng hệ sinh thái",
      icon: Zap,
    },
  ];

  const highlights = [
    { text: "Đối tác chính thức TikTok", icon: Award },
    { text: "Tiên phong mô hình livestream nhóm", icon: Rocket },
    { text: "Đào tạo idol nam / nữ chuyên nghiệp", icon: Star },
    { text: "Hệ sinh thái giải trí nền tảng hóa", icon: Target },
  ];

  const stats = [
    { value: "1200+", label: "Người xem cùng lúc", icon: Users },
    { value: "600+", label: "Online ổn định mỗi phiên", icon: TrendingUp },
  ];

  const processSteps = [
    { step: 1, title: "Xây dựng chuyên nghiệp — Từ người mới đến tân binh sân khấu", description: "Kỹ năng biểu diễn, dance, makeup và xây dựng hình ảnh", icon: Star },
    { step: 2, title: "Livestream nhóm — Bước lên sân khấu thực thụ", description: "Studio chuyên nghiệp, nhóm 4-7 thành viên + MC", icon: Users },
    { step: 3, title: "Hỗ trợ lưu lượng — Tăng trưởng fan nhanh chóng", description: "Đối tác chính thức, quảng bá và tăng tương tác", icon: Rocket },
    { step: 4, title: "Nội dung tạo doanh thu — Bắt đầu kiếm tiền ổn định", description: "Tối ưu doanh thu, hợp tác thương hiệu", icon: TrendingUp },
    { step: 5, title: "Phát triển dài hạn — Xây dựng thương hiệu cá nhân", description: "Thu nhập ổn định, lộ trình thăng tiến rõ ràng", icon: Trophy },
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
    <Box sx={{ bgcolor: "#FAFAFA", overflowX: "hidden" }}>
      {/* --- Video Hero Section --- */}
      <Box component="section" sx={{ position: "relative", height: "90vh", bgcolor: "#1A1A1A", overflow: "hidden" }}>

        {/* Background Video */}
        <Box sx={{ position: "absolute", inset: 0 }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              objectFit: "cover",
            }}
          >
            <source src={sample} type="video/mp4" />
          </video>
        </Box>

        {/* Video Overlay (Lớp mờ đen giúp chữ nổi bật) */}
        <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent, rgba(0,0,0,0.3))" }} />

      </Box>

      {/* --- Main Hero Content --- */}
      <Box component="section" sx={{ position: "relative", py: 10, bgcolor: "white", overflow: "hidden" }}>
        <Container maxWidth="lg" sx={{ textAlign: "center" }}>
          <MotionBox
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
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
            <Sparkles size={16} color="#C7364A" />
            <Typography variant="body2" sx={{ color: "#2A2A2A", fontWeight: 500 }}>
              Đối tác chính thức TikTok
            </Typography>
          </MotionBox>

          <MotionTypography
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            sx={{
              fontSize: { xs: "2.25rem", sm: "3rem", md: "4.5rem" },
              fontWeight: 700,
              mb: 3,
              color: "#C7364A",
              lineHeight: 1.2,
            }}
          >
            DTK Media
          </MotionTypography>

          <MotionTypography
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            sx={{
              fontSize: { xs: "1.875rem", sm: "2.25rem", md: "3rem" },
              fontWeight: 700,
              mb: 3,
              color: "#2A2A2A",
              lineHeight: 1.2,
            }}
          >
            Hoạt động chuyên nghiệp
            <br />
            để tái định nghĩa tiêu chuẩn giá trị
            <br />
            của livestream tại Việt Nam
          </MotionTypography>

          <MotionTypography
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            sx={{ fontSize: { xs: "1.125rem", sm: "1.25rem" }, color: "grey.600", maxWidth: 1024, mx: "auto", mb: 6 }}
          >
            Chúng tôi cam kết xây dựng hệ thống đào tạo tiêu chuẩn cao và vận hành chuyên nghiệp, hướng tới trở thành “nền tảng quản lý giải trí livestream hàng đầu tại Việt Nam”, giúp các Idol hoạt động theo mô hình nhóm phát triển lâu dài và ổn định.
          </MotionTypography>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2, justifyContent: "center" }}
          >
            <Button
              component={Link}
              to="/for-creator"
              sx={{
                px: 4,
                py: 2,
                bgcolor: "#C7364A",
                color: "white",
                borderRadius: 50,
                fontWeight: 600,
                textTransform: "none",
                fontSize: "1rem",
                display: "flex",
                gap: 1,
                "&:hover": { bgcolor: "#ad4452", boxShadow: 4, "& .arrow-icon": { transform: "translateX(4px)" } },
              }}
            >
              Trở thành Creator
              <ArrowRight size={20} className="arrow-icon" style={{ transition: "transform 0.3s" }} />
            </Button>
            <Button
              component={Link}
              to="/for-brand"
              variant="outlined"
              sx={{
                px: 4,
                py: 2,
                borderColor: "#2A2A2A",
                color: "#2A2A2A",
                borderWidth: 2,
                borderRadius: 50,
                fontWeight: 600,
                textTransform: "none",
                fontSize: "1rem",
                "&:hover": { bgcolor: "grey.50", borderColor: "#2A2A2A", borderWidth: 2 },
              }}
            >
              Tìm hiểu thêm
            </Button>
          </MotionBox>
        </Container>
      </Box>

      {/* --- About Section --- */}
      <Box component="section" sx={{ py: 10, bgcolor: "grey.50" }}>
        <Container maxWidth="lg">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            sx={{ textAlign: "center", mb: 8 }}
          >
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, color: "#2A2A2A", fontSize: { xs: "1.875rem", sm: "2.25rem" } }}>
              DTK Media là gì?
            </Typography>
            <Typography variant="h6" sx={{ color: "grey.600", fontWeight: 400 }}>
              Chúng tôi không chỉ là một công ty quản lý livestream
            </Typography>
          </MotionBox>

          <MotionBox
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 4 }}
          >
            {coreValues.map((value, index) => (
              <MotionBox
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                sx={{
                  p: 4,
                  bgcolor: "white",
                  borderRadius: 4,
                  border: "2px solid",
                  borderColor: "grey.200",
                  transition: "all 0.3s",
                  "&:hover": { borderColor: "#C7364A", boxShadow: 4 },
                }}
              >
                <MotionBox
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  sx={{
                    width: 56,
                    height: 56,
                    bgcolor: "#C7364A",
                    borderRadius: 3,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 3,
                    boxShadow: 2,
                  }}
                >
                  <value.icon size={28} color="white" />
                </MotionBox>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, color: "#2A2A2A" }}>
                  {value.title}
                </Typography>
                <Typography sx={{ color: "grey.600" }}>{value.description}</Typography>
              </MotionBox>
            ))}
          </MotionBox>
        </Container>
      </Box>

      {/* --- Highlights Section --- */}
      <Box component="section" sx={{ py: 10, bgcolor: "white" }}>
        <Container maxWidth="lg">
          <MotionTypography
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            sx={{ fontSize: { xs: "1.875rem", sm: "2.25rem" }, fontWeight: 700, textAlign: "center", mb: 6, color: "#2A2A2A" }}
          >
            Giá trị nổi bật
          </MotionTypography>

          <MotionBox
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }, gap: 3, mb: 8 }}
          >
            {highlights.map((highlight, index) => (
              <MotionBox
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                sx={{
                  p: 3,
                  bgcolor: "grey.50",
                  borderRadius: 3,
                  border: "2px solid",
                  borderColor: "grey.200",
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  transition: "all 0.3s",
                  "&:hover": { borderColor: "#C7364A", boxShadow: 3 },
                }}
              >
                <MotionBox whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                  <highlight.icon size={24} color="#C7364A" />
                </MotionBox>
                <Typography sx={{ fontWeight: 600, color: "grey.800" }}>{highlight.text}</Typography>
              </MotionBox>
            ))}
          </MotionBox>

          <MotionBox
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" }, gap: 3, maxWidth: 900, mx: "auto" }}
          >
            {stats.map((stat, index) => (
              <MotionBox
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                sx={{
                  p: 4,
                  bgcolor: "white",
                  borderRadius: 4,
                  border: "2px solid",
                  borderColor: "grey.200",
                  display: "flex",
                  alignItems: "center",
                  gap: 3,
                  transition: "all 0.3s",
                  boxShadow: 2,
                  "&:hover": { borderColor: "#C7364A" },
                }}
              >
                <Box sx={{ width: 64, height: 64, bgcolor: "#C7364A", borderRadius: 3, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: 2 }}>
                  <stat.icon size={32} color="white" />
                </Box>
                <Box>
                  <MotionTypography
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    sx={{ fontSize: "2.25rem", fontWeight: 700, color: "#2A2A2A", mb: 0.5 }}
                  >
                    {stat.value}
                  </MotionTypography>
                  <Typography sx={{ color: "grey.600", fontWeight: 500 }}>{stat.label}</Typography>
                </Box>
              </MotionBox>
            ))}
          </MotionBox>
        </Container>
      </Box>

      {/* --- S-Squad Featured Section --- */}
      <Box component="section" sx={{ py: 10, bgcolor: "grey.50" }}>
        <Container maxWidth="lg">
          <MotionBox initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} sx={{ textAlign: "center", mb: 6 }}>
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
              <Trophy size={20} color="#CA8A04" />
              <Typography sx={{ color: "#A16207", fontWeight: 600, fontSize: "0.875rem" }}>Dự án tiêu biểu</Typography>
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 700, color: "#2A2A2A", mb: 2, fontSize: { xs: "1.875rem", sm: "2.25rem" } }}>
              Giới thiệu S-Squad
            </Typography>
            <Typography sx={{ fontSize: "1.25rem", color: "grey.600" }}>Nhóm idol được TikTok chọn quảng bá chính thức</Typography>
          </MotionBox>

          <MotionBox initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "repeat(2, 1fr)" }, gap: 4, mb: 4 }}>
              {/* Left Image */}
              <MotionBox
                whileHover="hover"
                sx={{ position: "relative", height: { xs: 400, lg: 500 }, borderRadius: 4, overflow: "hidden", boxShadow: 6 }}
              >
                <MotionBox
                  variants={{ hover: { scale: 1.1 } }}
                  transition={{ duration: 0.5 }}
                  sx={{ width: "100%", height: "100%" }}
                >
                  <ImageWithFallback
                    src={HomePic1}
                    alt="S-Squad Performance"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </MotionBox>
                <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)" }} />
                <Box sx={{ position: "absolute", bottom: 0, left: 0, right: 0, p: 3 }}>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: "white", mb: 1 }}>
                    S-Squad Live Performance
                  </Typography>
                  <Typography sx={{ color: "grey.300" }}>Boygroup đạt thành tưu Top 1 từ số 0 tới 20.000 follower chính thức chỉ trong 1 năm</Typography>
                </Box>
              </MotionBox>

              {/* Right Images */}
              <Box sx={{ display: "grid", gridTemplateRows: "repeat(2, 1fr)", gap: 4 }}>
                <MotionBox
                  whileHover="hover"
                  sx={{ position: "relative", height: { xs: 190, lg: 240 }, borderRadius: 4, overflow: "hidden", boxShadow: 3 }}
                >
                  <MotionBox variants={{ hover: { scale: 1.1 } }} transition={{ duration: 0.5 }} sx={{ width: "100%", height: "100%" }}>
                    <ImageWithFallback
                      src={LuuLuong}
                      alt="S-Squad Studio"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </MotionBox>
                  <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)" }} />
                  <Box sx={{ position: "absolute", bottom: 0, left: 0, right: 0, p: 2 }}>
                    <Typography sx={{ color: "white", fontWeight: 600 }}>Behind The Scenes</Typography>
                    <Typography sx={{ color: "grey.300" }}>Boygroup đạt thành tưu Top 1 từ số 0 tới 20.000 follower chính thức chỉ trong 1 năm</Typography>
                  </Box>
                </MotionBox>

                <MotionBox
                  whileHover="hover"
                  sx={{ position: "relative", height: { xs: 190, lg: 240 }, borderRadius: 4, overflow: "hidden", boxShadow: 3 }}
                >
                  <MotionBox variants={{ hover: { scale: 1.1 } }} transition={{ duration: 0.5 }} sx={{ width: "100%", height: "100%" }}>
                    <ImageWithFallback
                      src={SQuad}
                      alt="S-Squad Concert"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </MotionBox>
                  <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)" }} />
                  <Box sx={{ position: "absolute", bottom: 0, left: 0, right: 0, p: 2 }}>
                    <Typography sx={{ color: "white", fontWeight: 600 }}>Concert Stage</Typography>
                    <Typography sx={{ color: "grey.300" }}>DTK hỗ trợ từ hình ảnh, lưu lượng đến ổn định vị thế</Typography>
                  </Box>
                </MotionBox>
              </Box>
            </Box>

            {/* Sub Stats Cards */}
            <MotionBox variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" }, gap: 3 }}>
              <MotionBox variants={itemVariants} sx={{ p: 3, bgcolor: "white", borderRadius: 3, border: "2px solid", borderColor: "grey.200", textAlign: "center" }}>
                <Award size={48} color="#C7364A" style={{ margin: "0 auto 12px" }} />
                <Typography sx={{ fontSize: "1.875rem", fontWeight: 700, color: "#2A2A2A", mb: 0.5 }}>500%</Typography>
                <Typography sx={{ color: "grey.600" }}>Tỷ lệ tăng trưởng hằng năm của công ty</Typography>
              </MotionBox>
              <MotionBox variants={itemVariants} sx={{ p: 3, bgcolor: "white", borderRadius: 3, border: "2px solid", borderColor: "grey.200", textAlign: "center" }}>
                <TrendingUp size={48} color="#C7364A" style={{ margin: "0 auto 12px" }} />
                <Typography sx={{ fontSize: "1.875rem", fontWeight: 700, color: "#2A2A2A", mb: 0.5 }}>30.000 USD</Typography>
                <Typography sx={{ color: "grey.600" }}>Thu nhập cao nhất của một nghệ sĩ</Typography>
              </MotionBox>
              <MotionBox variants={itemVariants} sx={{ p: 3, bgcolor: "#FEFCE8", borderRadius: 3, border: "2px solid #FEF08A", textAlign: "center" }}>
                <Trophy size={48} color="#CA8A04" style={{ margin: "0 auto 12px" }} />
                <Typography sx={{ fontSize: "1.875rem", fontWeight: 700, color: "#2A2A2A", mb: 0.5 }}>60.000 – 70.000 USD</Typography>
                <Typography sx={{ color: "grey.600" }}>Lượt donate cao nhất trong một buổi</Typography>
              </MotionBox>
            </MotionBox>
          </MotionBox>
        </Container>
      </Box>

      {/* --- Process Tree Section --- */}
      <Box component="section" sx={{ py: 10, bgcolor: "white" }}>
        <Container maxWidth="lg">
          <MotionBox initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} sx={{ textAlign: "center", mb: 8 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, color: "#2A2A2A", mb: 2, fontSize: { xs: "1.875rem", sm: "2.25rem" } }}>
              Khát vọng tỏa sáng ước mơ <br /> thần tượng của bạn sẽ thành hiện thực
            </Typography>
            <Typography sx={{ fontSize: "1.125rem", color: "grey.600" }}>Xây dựng hệ thống <br /> Kết hợp đội nhóm · Hỗ trợ lưu lượng <br /> Tăng trưởng thu nhập</Typography>
          </MotionBox>

          <Box sx={{ position: "relative", maxWidth: 1000, mx: "auto" }}>
            {/* Desktop Vertical Center Line */}
            <Box sx={{ display: { xs: "none", lg: "block" }, position: "absolute", left: "50%", top: 0, bottom: 0, width: 4, bgcolor: "grey.300", transform: "translateX(-50%)" }} />

            <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 4, lg: 8 } }}>
              {processSteps.map((step, index) => {
                const isEven = index % 2 === 0;

                return (
                  <MotionBox
                    key={index}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    sx={{ position: "relative" }}
                  >
                    {/* --- Desktop Layout --- */}
                    <Box sx={{ display: { xs: "none", lg: "flex" }, alignItems: "center", flexDirection: isEven ? "row" : "row-reverse" }}>
                      {/* Cột Nội dung */}
                      <Box sx={{ width: "50%", px: 6, display: "flex", justifyContent: isEven ? "flex-end" : "flex-start" }}>
                        <MotionBox whileHover={{ scale: 1.05 }} sx={{ display: "flex", flexDirection: "column", alignItems: isEven ? "flex-end" : "flex-start", maxWidth: 400 }}>
                          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2, flexDirection: isEven ? "row" : "row-reverse" }}>
                            <Box sx={{ width: 48, height: 2, background: isEven ? "linear-gradient(to left, #C7364A, transparent)" : "linear-gradient(to right, #C7364A, transparent)" }} />
                            <MotionBox
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                              sx={{ width: 48, height: 48, borderRadius: "50%", bgcolor: "#C7364A", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontSize: "1.25rem", boxShadow: 3 }}
                            >
                              {step.step}
                            </MotionBox>
                          </Box>
                          <Box sx={{ bgcolor: "white", p: 3, borderRadius: 3, boxShadow: 3, border: "2px solid", borderColor: "grey.200", transition: "all 0.3s", "&:hover": { borderColor: "#C7364A" }, textAlign: "left" }}>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
                              <step.icon size={24} color="#C7364A" />
                              <Typography variant="h6" sx={{ fontWeight: 700, color: "#2A2A2A" }}>{step.title}</Typography>
                            </Box>
                            <Typography sx={{ color: "grey.600" }}>{step.description}</Typography>
                          </Box>
                        </MotionBox>
                      </Box>

                      {/* Cột Điểm nút ở giữa - ĐÃ FIX */}
                      <MotionBox
                        initial={{ scale: 0, x: "-50%", y: "-50%" }} // Sử dụng x, y của Framer thay vì transform CSS
                        whileInView={{ scale: 1, x: "-50%", y: "-50%" }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                        sx={{
                          position: "absolute",
                          left: "50%",
                          top: "50%",
                          width: 24,
                          height: 24,
                          bgcolor: "white",
                          border: "4px solid #C7364A",
                          borderRadius: "50%",
                          boxShadow: 3,
                          zIndex: 1
                        }}
                      />
                    </Box>

                    {/* --- Mobile Layout --- */}
                    <MotionBox
                      whileHover={{ x: 5 }}
                      sx={{ display: { xs: "flex", lg: "none" }, alignItems: "flex-start", gap: 2 }}
                    >
                      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <MotionBox
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          sx={{ width: 48, height: 48, borderRadius: "50%", bgcolor: "#C7364A", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontSize: "1.25rem", boxShadow: 3, flexShrink: 0 }}
                        >
                          {step.step}
                        </MotionBox>
                        {index < processSteps.length - 1 && <Box sx={{ width: 4, height: 64, bgcolor: "grey.300", mt: 2 }} />}
                      </Box>
                      <Box sx={{ flex: 1, pt: 1, pb: index < processSteps.length - 1 ? 0 : 2 }}>
                        <Box sx={{ bgcolor: "white", p: 3, borderRadius: 3, boxShadow: 3, border: "2px solid", borderColor: "grey.200" }}>
                          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
                            <step.icon size={24} color="#C7364A" />
                            <Typography variant="subtitle1" sx={{ fontWeight: 700, color: "#2A2A2A" }}>{step.title}</Typography>
                          </Box>
                          <Typography sx={{ color: "grey.600", fontSize: "0.875rem" }}>{step.description}</Typography>
                        </Box>
                      </Box>
                    </MotionBox>
                  </MotionBox>
                );
              })}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* --- CTA Section --- */}
      {/* <Box component="section" sx={{ py: 10, bgcolor: "grey.50" }}>
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <MotionBox initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Typography variant="h4" sx={{ fontWeight: 700, color: "#2A2A2A", mb: 2, fontSize: { xs: "1.875rem", sm: "2.25rem" } }}>
              Sẵn sàng tham gia DTK Media?
            </Typography>
            <Typography sx={{ fontSize: "1.25rem", color: "grey.600", mb: 4 }}>
              Khám phá cơ hội phát triển sự nghiệp và trở thành ngôi sao livestream tiếp theo
            </Typography>
            <Button
              component={Link}
              to="/for-creator"
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
              Tìm hiểu cơ hội Creator
              <ArrowRight size={20} className="arrow-icon" style={{ transition: "transform 0.3s" }} />
            </Button>
          </MotionBox>
        </Container>
      </Box> */}
    </Box>
  );
}