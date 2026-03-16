import React from "react";
import {
  Target,
  Heart,
  Crown,
  TrendingUp,
  Users,
  Lightbulb,
  CheckCircle,
  X,
  Sparkles,
  Zap,
  Award,
  Building2,
} from "lucide-react";
import { motion } from "framer-motion";
import { Box, Typography, Container } from "@mui/material";
import { ImageWithFallback } from "../component/ImageWithFallback";
import TrungTamSangTao from "../assets/TrungTamSangTao.png";
import VanHanh from "../assets/VanHanh.png";
import DaoTaoBoiDuong from "../assets/DaoTaoBoiDuong.png";
import DTKBrand from "../assets/DTKBrand.png";
import BrandPage from "../assets/Brand.png";

// Khởi tạo các component kết hợp giữa MUI và Framer Motion
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

export default function ForBrand() {
  const missions = [
    "Để tài năng được khai thác, để phát triển có lộ trình.",
    "Cung cấp đào tạo hệ thống và cơ hội sân khấu chuyên nghiệp cho những bạn trẻ tiềm năng.",
    "Xây dựng hệ thống hỗ trợ phát triển dài hạn, ổn định và bền vững cho streamer.",
    "Mang đến cho người dùng trải nghiệm livestream có chất lượng và giá trị nội dung cao hơn.",
    "Chúng tôi không chỉ xây dựng sân khấu, mà còn đồng hành trong hành trình trưởng thành.",
  ];

  const goals = [
    "Define · The · Kingdom",
    "Quy tụ lực lượng boygroup có hình ảnh và thực lực hàng đầu tại Việt Nam.",
    "Với hệ thống ươm tạo tiêu chuẩn cao, xây dựng đội hình sân khấu chất lượng thực sự.",
    "Trên hành trình theo đuổi sự xuất sắc, luôn giữ sự đoàn kết và thúc đẩy đội nhóm.",
  ];

  const coreValues = [
    {
      title: "Dream (Giấc mơ)",
      description:
        "Tôn trọng mọi lựa chọn theo đuổi ước mơ một cách nghiêm túc.Sân khấu dành cho những người kiên trì.",
      icon: Heart,
    },
    {
      title: "Talent (Tài năng)",
      description:
        "Sàng lọc tiêu chuẩn cao, đào tạo hệ thống hóa.Biến thực lực thành năng lực cạnh tranh thực sự.",
      icon: Sparkles,
    },
    {
      title: "Kingdom (Vương quốc)",
      description:
        "Một tập đoàn lớn không nằm ở quy mô, mà ở tiêu chuẩn và sự cộng sinh.Streamer, đội ngũ và người dùng cùng nhau đạt thành tựu, đồng hành dài lâu.",
      icon: Crown,
    },
  ];

  const traditionalModel = [
    "Ưu tiên kiểm soát chi phí, đầu tư trang phục và sân khấu hạn chế",
    "Lấy mục tiêu hoàn vốn nhanh, chu kỳ ngắn",
    "Bố trí đa quốc gia phân tán, nguồn lực phân bổ rải rác",
    "Cơ cấu phân chia lợi nhuận nghiêng về nền tảng và công ty",
    "Mô hình vận hành theo dự án, tính ổn định phụ thuộc biến động thị trường",
  ];

  const dtkModel = [
    "Liên tục đầu tư mạnh vào trang phục, tạo hình, sân khấu và nội dung",
    "Lấy giá trị thương hiệu và nghệ sĩ dài hạn làm trung tâm",
    "Cơ chế chia sẻ lợi nhuận cạnh tranh hơn, để nỗ lực được ghi nhận xứng đáng",
    "Hơn 10 năm tập trung tại thị trường Việt Nam, xây dựng nền tảng niềm tin bản địa",
    "Công ty duy trì lợi nhuận ổn định, bảo đảm phát triển lâu dài cho streamer",
    "Tập trung một thị trường, dồn nguồn lực xây dựng tiêu chuẩn ngành",
  ];

  const partners = [
    {
      name: "TikTok",
      description:
        "Đối tác chính thức trong phát triển và quảng bá mô hình livestream nhóm",
    },
    {
      name: "DTK Group",
      description:
        "Tập đoàn mẹ với 15 năm kinh nghiệm kinh doanh đa ngành tại Việt Nam",
    },
  ];

  const companyImages = [
    {
      url: TrungTamSangTao,
      title: " Trung tâm điều hành DTK",
      description:
        "Trung tâm lõi vận hành hệ sinh thái livestream, đầu mối quản lý thống nhất và hoạch định chiến lược.",
    },
    {
      url: VanHanh,
      title: "Đội ngũ vận hành chuyên nghiệp",
      description:
        "Hơn 50 nhân sự đào tạo và vận hành giàu kinh nghiệm, bao phủ hoạch định nội dung, tăng trưởng lưu lượng và thương mại hóa",
    },
    {
      url: DTKBrand,
      title: "Không gian sáng tạo",
      description:
        "Xây dựng môi trường sáng tạo và ươm tạo nội dung, hỗ trợ streamer phát triển bền vững.",
    },
    {
      url: DaoTaoBoiDuong,
      title: "Đào tạo và bồi dưỡng",
      description:
        "Hệ thống đào tạo streamer tiêu chuẩn hóa, xây dựng lộ trình phát triển nghề nghiệp dài hạn.",
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
    <Box sx={{ bgcolor: "#FAFAFA", minHeight: "100vh" }}>
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
          backgroundImage: `url(${BrandPage})`,
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
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Độ mờ 50%
            zIndex: 1,
          }}
        />

        <Container
          maxWidth="lg"
          sx={{
            textAlign: "center",
            py: 10,
            position: "relative",
            zIndex: 2, // Đảm bảo nội dung nổi lên trên overlay
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
              Về DTK Media
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
              color: "white", // Đổi màu chữ chính thành trắng
              lineHeight: 1.2,
            }}
          >
            Công ty quản lý livestream
            <br />
            <Box component="span" sx={{ color: "#C7364A" }}>
              hệ sinh thái toàn diện
            </Box>
          </MotionTypography>

          <MotionTypography
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            sx={{
              fontSize: "1.25rem",
              color: "grey.200", // Đổi màu mô tả thành xám sáng
              maxWidth: 768,
              mx: "auto",
              mb: 6,
            }}
          >
            Tiên phong phát triển mô hình livestream nhóm chuyên nghiệp tại Việt
            Nam
          </MotionTypography>
        </Container>
      </Box>

      {/* --- Company Images Gallery --- */}
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
              Cơ sở & Đội ngũ
            </Typography>
            <Typography sx={{ fontSize: "1.25rem", color: "grey.600" }}>
              Quản lý hệ thống hóa · Vận hành chuyên nghiệp hóa · Đào tạo tiêu
              chuẩn hóa
            </Typography>
          </MotionBox>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
              gap: 4,
            }}
          >
            {companyImages.map((image, index) => (
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

                  {/* Accent Badge */}
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
        </Container>
      </Box>

      {/* --- Mission & Vision --- */}
      <Box component="section" sx={{ py: 10, bgcolor: "white" }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", lg: "repeat(2, 1fr)" },
              gap: 6,
            }}
          >
            {/* Mission */}
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              sx={{
                bgcolor: "grey.50",
                borderRadius: 4,
                p: 4,
                border: "2px solid",
                borderColor: "grey.200",
              }}
            >
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}
              >
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
                  <Target size={28} color="white" />
                </Box>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 700, color: "#2A2A2A" }}
                >
                  Sứ mệnh thương hiệu (Mission)
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {missions.map((mission, index) => (
                  <MotionBox
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}
                  >
                    <CheckCircle
                      size={24}
                      color="#C7364A"
                      style={{ flexShrink: 0, marginTop: 2 }}
                    />
                    <Typography sx={{ color: "grey.700" }}>
                      {mission}
                    </Typography>
                  </MotionBox>
                ))}
              </Box>
            </MotionBox>

            {/* Vision */}
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
              }}
            >
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}
              >
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
                  <Lightbulb size={28} color="white" />
                </Box>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 700, color: "#2A2A2A" }}
                >
                  Tầm nhìn thương hiệu (Vision)
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {goals.map((goal, index) => (
                  <MotionBox
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}
                  >
                    <Zap
                      size={24}
                      color="#C7364A"
                      style={{ flexShrink: 0, marginTop: 2 }}
                    />
                    <Typography sx={{ color: "grey.700" }}>{goal}</Typography>
                  </MotionBox>
                ))}
              </Box>
            </MotionBox>
          </Box>
        </Container>
      </Box>

      {/* --- Core Values --- */}
      <Box component="section" sx={{ py: 10, bgcolor: "grey.50" }}>
        <Container maxWidth="lg">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            sx={{ textAlign: "center", mb: 8 }}
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
              Giá trị cốt lõi
            </Typography>
            <Typography sx={{ fontSize: "1.25rem", color: "grey.600" }}>
              DTK - Dream · Talent · Kingdom
            </Typography>
          </MotionBox>

          <MotionBox
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
              gap: 4,
            }}
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
                  textAlign: "center",
                  transition: "all 0.3s",
                  "&:hover": { borderColor: "#C7364A", boxShadow: 4 },
                }}
              >
                <MotionBox
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  sx={{
                    width: 64,
                    height: 64,
                    bgcolor: "#C7364A",
                    borderRadius: 4,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 3,
                    boxShadow: 3,
                  }}
                >
                  <value.icon size={32} color="white" />
                </MotionBox>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 700, mb: 1.5, color: "#2A2A2A" }}
                >
                  {value.title}
                </Typography>
                <Typography sx={{ color: "grey.600" }}>
                  {value.description}
                </Typography>
              </MotionBox>
            ))}
          </MotionBox>
        </Container>
      </Box>

      {/* --- Model Comparison --- */}
      <Box component="section" sx={{ py: 10, bgcolor: "white" }}>
        <Container maxWidth="lg">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            sx={{ textAlign: "center", mb: 8 }}
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
              Vì sao DTK khác biệt so với các công ty livestream nhóm thông
              thường?
            </Typography>
            <Typography sx={{ fontSize: "1.25rem", color: "grey.600" }}>
              Chúng tôi không chỉ làm livestream nhóm, mà đang xây dựng một nền
              tảng sự nghiệp dài hạn
            </Typography>
          </MotionBox>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", lg: "repeat(2, 1fr)" },
              gap: 4,
            }}
          >
            {/* Traditional Model */}
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              sx={{
                bgcolor: "grey.50",
                borderRadius: 4,
                p: 4,
                border: "2px solid",
                borderColor: "grey.300",
              }}
            >
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    bgcolor: "grey.400",
                    borderRadius: 3,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <X size={28} color="white" />
                </Box>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 700, color: "grey.700" }}
                >
                  Công ty livestream nhóm thông thường
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                {traditionalModel.map((item, index) => (
                  <MotionBox
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      p: 1.5,
                      bgcolor: "rgba(255, 255, 255, 0.5)",
                      borderRadius: 2,
                    }}
                  >
                    <X size={20} color="#9CA3AF" style={{ flexShrink: 0 }} />
                    <Typography sx={{ color: "grey.600" }}>{item}</Typography>
                  </MotionBox>
                ))}
              </Box>
            </MotionBox>

            {/* DTK Model */}
            <MotionBox
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              sx={{
                bgcolor: "white",
                borderRadius: 4,
                p: 4,
                border: "2px solid",
                borderColor: "#C7364A",
                boxShadow: 4,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Box sx={{ position: "absolute", top: 16, right: 16 }}>
                <Box
                  sx={{
                    bgcolor: "#FEF08A",
                    color: "#A16207",
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 50,
                    fontSize: "0.875rem",
                    fontWeight: 600,
                  }}
                >
                  Được khuyến nghị
                </Box>
              </Box>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}
              >
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
                  <CheckCircle size={28} color="white" />
                </Box>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 700, color: "#2A2A2A" }}
                >
                  Mô hình DTK
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                {dtkModel.map((item, index) => (
                  <MotionBox
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      p: 1.5,
                      bgcolor: "grey.50",
                      borderRadius: 2,
                    }}
                  >
                    <CheckCircle
                      size={20}
                      color="#C7364A"
                      style={{ flexShrink: 0 }}
                    />
                    <Typography sx={{ color: "grey.700", fontWeight: 500 }}>
                      {item}
                    </Typography>
                  </MotionBox>
                ))}
              </Box>
            </MotionBox>
          </Box>
          <Box>
            <Typography
              variant="caption"
              sx={{
                fontSize: "1.25rem",
                display: "block",
                textAlign: "center",
                mt: 2,
                color: "grey.500",
              }}
            >
              DTK không theo đuổi tối đa hóa lợi nhuận ngắn hạn, mà cam kết xây
              dựng hệ thống phát triển Idol ổn định, dài hạn và bền vững.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* --- Partners --- */}
      <Box component="section" sx={{ py: 10, bgcolor: "grey.50" }}>
        <Container maxWidth="lg">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            sx={{ textAlign: "center", mb: 8 }}
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
              Đối tác chiến lược
            </Typography>
            <Typography sx={{ fontSize: "1.25rem", color: "grey.600" }}>
              Được hỗ trợ bởi các đối tác hàng đầu
            </Typography>
          </MotionBox>

          <MotionBox
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
              gap: 4,
              maxWidth: 1024,
              mx: "auto",
            }}
          >
            {partners.map((partner, index) => (
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
                  transition: "all 0.3s",
                  "&:hover": { borderColor: "#C7364A" },
                  boxShadow: 3,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    mb: 2,
                  }}
                >
                  <Award size={32} color="#C7364A" />
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 700, color: "#2A2A2A" }}
                  >
                    {partner.name}
                  </Typography>
                </Box>
                <Typography sx={{ color: "grey.600" }}>
                  {partner.description}
                </Typography>
              </MotionBox>
            ))}
          </MotionBox>
        </Container>
      </Box>

      {/* --- Stats Section --- */}
      <Box component="section" sx={{ py: 10, bgcolor: "white" }}>
        <Container maxWidth="lg">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            sx={{ textAlign: "center", mb: 8 }}
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
              DTK Media trong số liệu
            </Typography>
          </MotionBox>

          <MotionBox
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
              },
              gap: 3,
            }}
          >
            {[
              { number: "50+", label: "Nhân sự chuyên nghiệp", icon: Users },
              { number: "15", label: "Năm kinh nghiệm DTK Group", icon: Award },
              {
                number: "1200+",
                label: "Người xem cùng lúc",
                icon: TrendingUp,
              },
              { number: "#1", label: "Livestream nhóm VN", icon: Crown },
            ].map((stat, index) => (
              <MotionBox
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                sx={{
                  textAlign: "center",
                  p: 3,
                  bgcolor: "grey.50",
                  borderRadius: 4,
                  border: "2px solid",
                  borderColor: "grey.200",
                  transition: "all 0.3s",
                  "&:hover": { borderColor: "#C7364A" },
                }}
              >
                <stat.icon
                  size={48}
                  color="#C7364A"
                  style={{ margin: "0 auto 16px" }}
                />
                <Typography
                  sx={{
                    fontSize: "2.25rem",
                    fontWeight: 700,
                    color: "#2A2A2A",
                    mb: 1,
                  }}
                >
                  {stat.number}
                </Typography>
                <Typography sx={{ color: "grey.600", fontSize: "0.875rem" }}>
                  {stat.label}
                </Typography>
              </MotionBox>
            ))}
          </MotionBox>
        </Container>
      </Box>
    </Box>
  );
}
