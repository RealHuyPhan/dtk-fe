import React from "react";
import {
  Building2,
  TrendingUp,
  Globe,
  Award,
  Target,
  Users,
  Sparkles,
  Camera,
  Briefcase,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { Box, Typography, Container, Button } from "@mui/material";
import { ImageWithFallback } from "../component/ImageWithFallback";
import NamDauTien from "../assets/NamDauTien.png";
import NamThu2 from "../assets/NamThu2.png";
import HienTai from "../assets/HienTai.png";
import CacVITri from "../assets/CacVITri.png";
import DoiTac from "../assets/DoiTac.png";
import SoLieu1 from "../assets/SoLieu1.png";
import SoLieu2 from "../assets/SoLieu2.png";
import AboutUsPic from "../assets/AboutUs.jpg";
// Khởi tạo các component kết hợp giữa MUI và Framer Motion
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

export default function AboutUs() {
  const activities = ["Xây dựng", "Thương mại", "Nhà hàng", "Truyền thông"];

  const mediaHighlights = [
    {
      icon: Sparkles,
      title: "Lộ trình nghề nghiệp dài hạn",
      description: "Tiên phong lĩnh vực livestream giải trí",
    },
    {
      icon: Users,
      title: "Cơ chế thu nhập ổn định",
      description: "Mô hình livestream nhóm đầu tiên tại Việt Nam",
    },
    {
      icon: Target,
      title: "Hệ thống đào tạo bài bản",
      description: "Tập trung đào tạo tài năng biểu diễn chuyên nghiệp",
    },
    {
      icon: Award,
      title: "Văn hóa hợp tác đội nhóm",
      description: "Hợp tác chiến lược phát triển nền tảng livestream",
    },
  ];

  const longTermGoals = [
    {
      icon: Building2,
      title: "Nền tảng hóa hệ sinh thái giải trí",
      description: "Xây dựng hệ thống toàn diện từ đào tạo đến phát triển",
    },
    {
      icon: Globe,
      title: "Mở rộng quốc tế",
      description: "Đưa idol Việt ra thị trường TikTok toàn cầu",
    },
  ];

  const companyGallery = [
    {
      url: NamDauTien,
      title: "",
      description:
        "Năm đầu tiên (11/2023) khởi động đã có hơn 5000 người theo dõi",
    },
    {
      url: NamThu2,
      title: "",
      description:
        "Năm thứ hai (12/2025) tăng trưởng lưu lượng và doanh thu hơn 5 lần",
    },
    {
      url: HienTai,
      title: "",
      description: "Hiện tại có 8 nhóm Idol, 43 Idol trực thuộc công ty",
    },
  ];

  const workingEnvironment = [
    {
      url: CacVITri,
      title:
        "Các vị trí : Trợ lý, Hành chính, Tuyển dụng, Media, Vận hành, MC, Make Up, Dạy nhảy,… tiếp tục được nhân rộng và phát triển",
      icon: Briefcase,
    },
    {
      url: DoiTac,
      title: "Đối tác và khách hàng triển vọng của Tiktok",
      icon: Camera,
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
      <Box
        component="section"
        sx={{
          position: "relative",
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          backgroundImage: `url(${AboutUsPic})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Màu đen với độ mờ 50%
            zIndex: 1, // Đặt lớp phủ nằm trên ảnh
          }}
        />

        <Container
          maxWidth="lg"
          sx={{
            textAlign: "center",
            py: 10,
            position: "relative",
            zIndex: 2, // Đặt nội dung nằm trên lớp phủ
          }}
        >
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
            <Building2 size={16} color="#C7364A" />
            <Typography
              variant="body2"
              sx={{ color: "#2A2A2A", fontWeight: 500 }}
            >
              15 năm kinh nghiệm
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
              color: "white",
              lineHeight: 1.2,
            }}
          >
            Nền tảng tập đoàn
          </MotionTypography>
          <MotionTypography
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            sx={{
              fontSize: { xs: "1.5rem", sm: "1.875rem" },
              fontWeight: 600,
              color: "#C7364A", // Giữ nguyên màu đỏ nổi bật
              mb: 4,
            }}
          >
            DTK Group
          </MotionTypography>
          <MotionTypography
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            sx={{
              fontSize: "1.25rem",
              // Đổi màu chữ thành xám nhẹ hoặc trắng để dễ đọc
              color: "grey.200",
              maxWidth: 768,
              mx: "auto",
            }}
          >
            15 năm phát triển tại Việt Nam, hoạt động đa lĩnh vực với năng lực
            tài chính và quản trị vững chắc
          </MotionTypography>
        </Container>
      </Box>

      {/* --- Company Gallery Section --- */}
      <Box component="section" sx={{ py: 10, bgcolor: "grey.50" }}>
        <Container maxWidth="lg">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            sx={{ textAlign: "center", mb: 6 }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                mb: 2,
                color: "#2A2A2A",
                fontSize: { xs: "1.875rem", sm: "2.25rem" },
              }}
            >
              Cơ sở & Đội ngũ DTK Group
            </Typography>
            <Typography sx={{ fontSize: "1.25rem", color: "grey.600" }}>
              Môi trường làm việc chuyên nghiệp, hiện đại
            </Typography>
          </MotionBox>

          {/* Main Gallery Grid */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", lg: "repeat(3, 1fr)" },
              gap: 3,
              mb: 3,
            }}
          >
            {companyGallery.map((image, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover="hover"
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: 4,
                  boxShadow: 3,
                  transition: "box-shadow 0.3s",
                  "&:hover": { boxShadow: 6 },
                }}
              >
                <MotionBox
                  sx={{ position: "relative", height: 320, overflow: "hidden" }}
                >
                  <MotionBox
                    variants={{ hover: { scale: 1.1 } }}
                    transition={{ duration: 0.7 }}
                    sx={{ width: "100%", height: "100%" }}
                  >
                    <ImageWithFallback
                      src={image.url}
                      alt={image.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </MotionBox>
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.4), transparent)",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      p: 3,
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: 700, color: "white", mb: 1 }}
                    >
                      {image.title}
                    </Typography>
                    <Typography sx={{ color: "grey.200" }}>
                      {image.description}
                    </Typography>
                  </Box>
                  {/* Corner Badge */}
                  <Box sx={{ position: "absolute", top: 16, right: 16 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        bgcolor: "#C7364A",
                        borderRadius: 3,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: 3,
                      }}
                    >
                      <Building2 size={24} color="white" />
                    </Box>
                  </Box>
                </MotionBox>
              </MotionBox>
            ))}
          </Box>

          {/* Bottom Row - 2 Images */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
              gap: 3,
            }}
          >
            {workingEnvironment.map((item, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover="hover"
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: 4,
                  boxShadow: 3,
                  transition: "box-shadow 0.3s",
                  "&:hover": { boxShadow: 6 },
                }}
              >
                <MotionBox
                  sx={{ position: "relative", height: 288, overflow: "hidden" }}
                >
                  <MotionBox
                    variants={{ hover: { scale: 1.1 } }}
                    transition={{ duration: 0.7 }}
                    sx={{ width: "100%", height: "100%" }}
                  >
                    <ImageWithFallback
                      src={item.url}
                      alt={item.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </MotionBox>
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3), transparent)",
                    }}
                  />
                  {/* Center Title */}
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "flex-end",
                      mb: "24px",
                      justifyContent: "center",
                    }}
                  >
                    <Box sx={{ textAlign: "center" }}>
                      <Typography sx={{ color: "grey.200" }}>
                        {item.title}
                      </Typography>
                    </Box>
                  </Box>
                </MotionBox>
              </MotionBox>
            ))}
          </Box>
        </Container>
      </Box>

      {/* --- Overview Section --- */}
      <Box component="section" sx={{ py: 10, bgcolor: "white" }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", lg: "repeat(2, 1fr)" },
              gap: 6,
              alignItems: "center",
            }}
          >
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: 4,
                  color: "#2A2A2A",
                  fontSize: { xs: "1.875rem", sm: "2.25rem" },
                }}
              >
                Hoạt động đa lĩnh vực
              </Typography>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: 2,
                }}
              >
                {activities.map((activity, index) => (
                  <MotionBox
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    sx={{
                      p: 3,
                      bgcolor: "grey.50",
                      borderRadius: 3,
                      border: "2px solid",
                      borderColor: "grey.200",
                      textAlign: "center",
                      transition: "all 0.3s",
                      "&:hover": { borderColor: "#C7364A", boxShadow: 3 },
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: "1.125rem",
                        color: "grey.800",
                      }}
                    >
                      {activity}
                    </Typography>
                  </MotionBox>
                ))}
              </Box>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              sx={{
                bgcolor: "grey.50",
                borderRadius: 4,
                p: 4,
                border: "2px solid",
                borderColor: "grey.200",
                boxShadow: 3,
              }}
            >
              <TrendingUp
                size={48}
                color="#C7364A"
                style={{ marginBottom: 16 }}
              />
              <Typography
                variant="h5"
                sx={{ fontWeight: 700, mb: 2, color: "#2A2A2A" }}
              >
                Năng lực vững mạnh
              </Typography>
              <Typography
                sx={{ color: "grey.700", fontSize: "1.125rem", mb: 3 }}
              >
                Tài chính vững mạnh và hệ thống quản trị chuyên nghiệp
              </Typography>
              <Box
                component="ul"
                sx={{
                  listStyle: "none",
                  p: 0,
                  m: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 1.5,
                }}
              >
                {[
                  "Kinh nghiệm 15 năm tại thị trường Việt Nam",
                  "Đa dạng hóa lĩnh vực kinh doanh",
                  "Quản trị chuyên nghiệp và minh bạch",
                ].map((item, idx) => (
                  <Box
                    component="li"
                    key={idx}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      color: "grey.700",
                    }}
                  >
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        bgcolor: "#C7364A",
                        borderRadius: "50%",
                        flexShrink: 0,
                      }}
                    />
                    <Typography>{item}</Typography>
                  </Box>
                ))}
              </Box>
            </MotionBox>
          </Box>
        </Container>

        {/* --- Dữ Liệu Thống Kê (Trên/Dưới) --- */}
        <Container maxWidth="lg" sx={{ mt: 10 }}>
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 5,
                color: "#2A2A2A",
                fontSize: { xs: "1.875rem", sm: "2.25rem" },
                textAlign: "center",
              }}
            >
              Dữ liệu thống kê
            </Typography>

            {/* Grid 1 cột để ảnh xếp dọc */}
            <Box sx={{ display: "grid", gridTemplateColumns: "1fr", gap: 6 }}>
              {/* Ảnh 1 - Nằm trên */}
              <MotionBox
                whileHover="hover"
                sx={{
                  position: "relative",
                  width: "100%",
                  borderRadius: 4,
                  overflow: "hidden",
                  boxShadow: 4,
                }}
              >
                <MotionBox
                  variants={{ hover: { scale: 1.03 } }}
                  transition={{ duration: 0.5 }}
                >
                  <ImageWithFallback
                    src={SoLieu1}
                    alt="Thống kê 1"
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </MotionBox>
              </MotionBox>

              {/* Ảnh 2 - Nằm dưới */}
              <MotionBox
                whileHover="hover"
                sx={{
                  position: "relative",
                  width: "100%",
                  borderRadius: 4,
                  overflow: "hidden",
                  boxShadow: 4,
                }}
              >
                <MotionBox
                  variants={{ hover: { scale: 1.03 } }}
                  transition={{ duration: 0.5 }}
                >
                  <ImageWithFallback
                    src={SoLieu2}
                    alt="Thống kê 2"
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </MotionBox>
              </MotionBox>
            </Box>
          </MotionBox>
        </Container>
      </Box>

      {/* --- Media & Entertainment Section --- */}
      <Box component="section" sx={{ py: 10, bgcolor: "grey.50" }}>
        <Container maxWidth="lg">
          <MotionTypography
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            sx={{
              fontSize: { xs: "1.875rem", sm: "2.25rem" },
              fontWeight: 700,
              textAlign: "center",
              mb: 8,
              color: "#2A2A2A",
            }}
          >
            Quyền lợi Streamer đạt được khi hợp tác với DTK Media
          </MotionTypography>

          <MotionBox
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(2, 1fr)",
                lg: "repeat(4, 1fr)",
              },
              gap: 4,
            }}
          >
            {mediaHighlights.map((highlight, index) => (
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
                    boxShadow: 3,
                  }}
                >
                  <highlight.icon size={28} color="white" />
                </MotionBox>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, mb: 1.5, color: "#2A2A2A" }}
                >
                  {highlight.title}
                </Typography>
                <Typography sx={{ color: "grey.600" }}>
                  {highlight.description}
                </Typography>
              </MotionBox>
            ))}
          </MotionBox>
        </Container>
      </Box>

      {/* --- Long-term Direction Section --- */}
      <Box component="section" sx={{ py: 10, bgcolor: "white" }}>
        <Container maxWidth="lg">
          <MotionTypography
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            sx={{
              fontSize: { xs: "1.875rem", sm: "2.25rem" },
              fontWeight: 700,
              textAlign: "center",
              mb: 8,
              color: "#2A2A2A",
            }}
          >
            Định hướng dài hạn
          </MotionTypography>

          <MotionBox
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
              gap: 4,
            }}
          >
            {longTermGoals.map((goal, index) => (
              <MotionBox
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                sx={{
                  p: 4,
                  bgcolor: "grey.50",
                  borderRadius: 4,
                  border: "2px solid",
                  borderColor: "grey.200",
                  transition: "all 0.3s",
                  "&:hover": { borderColor: "#C7364A", boxShadow: 4 },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 3 }}>
                  <MotionBox
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    sx={{
                      width: 64,
                      height: 64,
                      bgcolor: "#C7364A",
                      borderRadius: 3,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      boxShadow: 3,
                    }}
                  >
                    <goal.icon size={32} color="white" />
                  </MotionBox>
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: 700, mb: 1.5, color: "#2A2A2A" }}
                    >
                      {goal.title}
                    </Typography>
                    <Typography
                      sx={{ color: "grey.700", fontSize: "1.125rem" }}
                    >
                      {goal.description}
                    </Typography>
                  </Box>
                </Box>
              </MotionBox>
            ))}
          </MotionBox>
        </Container>
      </Box>

      {/* --- Stats Overview --- */}
      <Box component="section" sx={{ py: 10, bgcolor: "grey.50" }}>
        <Container maxWidth="lg">
          <MotionTypography
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            sx={{
              fontSize: { xs: "1.875rem", sm: "2.25rem" },
              fontWeight: 700,
              textAlign: "center",
              mb: 8,
              color: "#2A2A2A",
            }}
          >
            DTK Group trong số liệu
          </MotionTypography>

          <MotionBox
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                lg: "repeat(4, 1fr)",
              },
              gap: 4,
            }}
          >
            {[
              { value: "15+", label: "Năm kinh nghiệm", icon: Building2 },
              { value: "4+", label: "Lĩnh vực hoạt động", icon: TrendingUp },
              { value: "#1", label: "Livestream nhóm VN", icon: Award },
              { value: "1200+", label: "Người xem/phiên", icon: Users },
            ].map((stat, index) => (
              <MotionBox
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                sx={{
                  textAlign: "center",
                  p: 4,
                  bgcolor: "white",
                  borderRadius: 4,
                  border: "2px solid",
                  borderColor: "grey.200",
                  transition: "all 0.3s",
                  "&:hover": { borderColor: "#C7364A", boxShadow: 3 },
                }}
              >
                <MotionBox
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon
                    size={48}
                    color="#C7364A"
                    style={{ margin: "0 auto 16px" }}
                  />
                </MotionBox>
                <Typography
                  sx={{
                    fontSize: { xs: "2.25rem", sm: "3rem" },
                    fontWeight: 700,
                    color: "#C7364A",
                    mb: 1,
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography sx={{ color: "grey.700", fontWeight: 500 }}>
                  {stat.label}
                </Typography>
              </MotionBox>
            ))}
          </MotionBox>
        </Container>
      </Box>

      {/* --- Partnership Banner --- */}
      <Box component="section" sx={{ py: 10, bgcolor: "white" }}>
        <Container maxWidth="lg">
          <MotionBox
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            sx={{
              bgcolor: "grey.50",
              borderRadius: 4,
              p: { xs: 4, sm: 6 },
              border: "2px solid",
              borderColor: "grey.200",
              boxShadow: 4,
            }}
          >
            <Box sx={{ textAlign: "center" }}>
              <MotionBox
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
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
                <Award size={20} color="#CA8A04" />
                <Typography sx={{ fontWeight: 600, color: "#A16207" }}>
                  Đối tác chính thức TikTok
                </Typography>
              </MotionBox>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  color: "#2A2A2A",
                  fontSize: { xs: "1.875rem", sm: "2.25rem" },
                }}
              >
                Đối tác tin cậy
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.25rem",
                  color: "grey.600",
                  maxWidth: 672,
                  mx: "auto",
                  mb: 4,
                }}
              >
                DTK Media được TikTok lựa chọn làm đối tác chiến lược trong phát
                triển và quảng bá mô hình livestream nhóm tại Việt Nam
              </Typography>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
                  gap: 3,
                  maxWidth: 768,
                  mx: "auto",
                }}
              >
                <Box
                  sx={{
                    p: 3,
                    bgcolor: "white",
                    borderRadius: 3,
                    border: "2px solid",
                    borderColor: "grey.200",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "1.875rem",
                      fontWeight: 700,
                      color: "#C7364A",
                      mb: 1,
                    }}
                  >
                    100%
                  </Typography>
                  <Typography sx={{ color: "grey.600" }}>
                    Hỗ trợ từ TikTok
                  </Typography>
                </Box>
                <Box
                  sx={{
                    p: 3,
                    bgcolor: "white",
                    borderRadius: 3,
                    border: "2px solid",
                    borderColor: "grey.200",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "1.875rem",
                      fontWeight: 700,
                      color: "#C7364A",
                      mb: 1,
                    }}
                  >
                    Dài hạn
                  </Typography>
                  <Typography sx={{ color: "grey.600" }}>
                    Quan hệ đối tác
                  </Typography>
                </Box>
              </Box>
            </Box>
          </MotionBox>
        </Container>
      </Box>

      {/* --- CTA Section --- */}
      <Box component="section" sx={{ py: 10, bgcolor: "grey.50" }}>
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 3,
                color: "#2A2A2A",
                fontSize: { xs: "1.875rem", sm: "2.25rem" },
              }}
            >
              Tham gia hành trình cùng DTK Media
            </Typography>
            <Typography sx={{ fontSize: "1.25rem", color: "grey.600", mb: 4 }}>
              Hãy là một phần của câu chuyện thành công tiếp theo
            </Typography>
            <Button
              component={Link}
              to="/contact"
              sx={{
                px: 4,
                py: 2,
                bgcolor: "#C7364A",
                color: "white",
                borderRadius: 50,
                fontWeight: 600,
                textTransform: "none",
                fontSize: "1rem",
                transition: "all 0.3s",
                "&:hover": { bgcolor: "#ad4452", boxShadow: 4 },
              }}
            >
              Liên hệ với chúng tôi
            </Button>
          </MotionBox>
        </Container>
      </Box>
    </Box>
  );
}
