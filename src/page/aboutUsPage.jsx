import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Star, Crown, Mic2, TargetIcon, EyeIcon } from 'lucide-react';
import {
    Box,
    Container,
    Typography,
    Stack,
    useTheme,
    Button,
    Card,
    CardContent
} from '@mui/material';
import CardInfoSquare from '@/component/CardInfoSquare';
import CardInfoRectangle from '@/component/CardInfoRectangle';
import bgBrand from '../assets/globalBG.png'

const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }
};

const values = [
    {
        icon: <Star />,
        title: 'Dream (Ước mơ)',
        description: 'Giá trị của sân khấu bắt nguồn từ ước mơ. DTK là nơi thuộc về tất cả những ai dám mơ ước và dám tỏa sáng.',
    },
    {
        icon: <Mic2 />,
        title: 'Talent (Tài năng)',
        description: 'Tập trung phân khúc cao cấp. Hệ thống huấn luyện bài bản đảm bảo mỗi tài năng đều được tỏa sáng.',
    },
    {
        icon: <Crown />,
        title: 'Kingdom (Vương quốc)',
        description: 'Không chỉ là công ty quản lý, mà là vương quốc sân khấu của những tinh anh. Mỗi thành viên là người kiến tạo.',
    }
];

// Mapping: DTK Media có gì?
const features = [
    { label: 'Tiên phong', content: 'Định hướng phát triển chuyên sâu và khác biệt trong lĩnh vực giải trí livestream tại Việt Nam.' },
    { label: 'Khép kín', content: 'Chuỗi sản xuất toàn diện: trang điểm, vũ đạo, quay dựng, biên tập - đảm bảo đậm bản sắc riêng.' },
    { label: 'Xu hướng', content: 'Bản địa hóa mô hình thành công từ Trung Quốc, kết hợp Nghệ thuật - Công nghệ - TMĐT.' },
];

// Team Data
const team = [
    {
        name: 'Producer A',
        role: 'Giám đốc Sáng tạo',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=1080',
    },
    {
        name: 'Trainer B',
        role: 'Huấn luyện viên Biểu diễn',
        image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&q=80&w=1080',
    },
    {
        name: 'Manager C',
        role: 'Quản lý Vận hành',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=1080',
    },
    {
        name: 'Stylist D',
        role: 'Định hình Phong cách',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1080',
    },
];

const CARDS = [
    {
        id: 'mission',
        icon: <TargetIcon size={32} />,
        title: 'Sứ mệnh',
        gradient: 'linear-gradient(to right, #db2777, #9333ea)',
        highlight: 'Trao quyền cho giới trẻ – Kiến tạo giấc mơ',
        content: (
            <Typography color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                Huấn luyện chuyên nghiệp, cơ hội biểu diễn. Xây dựng mô hình thần tượng/nhóm livestream chất lượng cao.
            </Typography>
        ),
    },
    {
        id: 'vision',
        icon: <EyeIcon size={32} />,
        title: 'Tầm nhìn',
        gradient: 'linear-gradient(to right, #9333ea, #db2777)',
        content: (
            <Typography sx={{ color: 'text.secondary', fontSize: '1.1rem' }}>
                Nơi ươm mầm thần tượng, công ty quản lý livestream giải trí tiêu chuẩn, Vương quốc sân khấu cho giới trẻ
            </Typography>
        ),
    },
];


export function AboutUsPage() {
    const theme = useTheme();

    return (
        <Box sx={{ bgcolor: '#fff', overflowX: 'hidden' }}>

            {/* 1. HERO SECTION */}
            <Box sx={{
                position: 'relative',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, #fdf2f8 0%, #faf5ff 50%, #eff6ff 100%)',
            }}>
                <Box sx={{
                    py: "3rem",
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    width: '100%',
                }}>
                    <Box sx={{
                        width: '80%',
                        display: 'grid',
                        gridTemplateColumns: '1.4fr 1fr',
                        gap: '8rem',
                        alignItems: 'start',
                        mt: 6,
                        "@media (max-width: 1080px)": {
                            gridTemplateColumns: '1fr',
                            gap: '1.6rem',
                        },
                    }}>
                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}>
                            <Box
                                component="img"
                                src={bgBrand}
                                alt="Content Creator"
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: '16px',
                                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                                    display: 'block'
                                }}
                            />
                        </Box>
                        <Box width={'100%'}>
                            <Box component={motion.div}
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <Typography variant="h1" sx={{
                                    fontWeight: 'bold',
                                    mb: 3,
                                    fontSize: { xs: '2.5rem', md: '3.75rem' },
                                    lineHeight: 1.2
                                }}>
                                    DTK Media
                                    <Box component="span" sx={{
                                        display: 'block',
                                        background: 'linear-gradient(to right, #db2777, #9333ea)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                    }}>
                                        Define The Kingdom
                                    </Box>
                                </Typography>

                                <Typography variant="h6" sx={{ color: 'text.secondary', mb: 4, fontWeight: 400 }}>
                                    Chúng tôi cam kết xây dựng hệ sinh thái nam thần tượng cao cấp đầu tiên tại Việt Nam, với thẩm mỹ quốc tế và hệ thống đào tạo chuyên nghiệp.
                                </Typography>
                                <Button
                                    component={motion.button}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    variant="contained"
                                    size="large"
                                    sx={{
                                        background: 'linear-gradient(to right, #db2777, #9333ea)',
                                        color: 'white',
                                        borderRadius: '12px',
                                        px: 4,
                                        py: 1.5,
                                        fontSize: '1.1rem',
                                        fontWeight: 600,
                                        textTransform: 'none',
                                        boxShadow: '0 4px 14px 0 rgba(219, 39, 119, 0.39)',
                                        '&:hover': {
                                            background: 'linear-gradient(to right, #be185d, #7e22ce)',
                                        }
                                    }}
                                >
                                    Liên Hệ Ngay
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* 2. MISSION & VISION - SCROLL STACK STYLE */}
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', py: '8rem' }}>
                <Box sx={{
                    width: '80%',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '1.6rem',
                    justifyContent: 'center',
                    alignItems: 'center',
                    "@media (max-width: 1080px)": {
                        gridTemplateColumns: '1fr',
                        gap: '1rem',
                    },
                }}>
                    {CARDS.map((card, index) => (
                        <Box component={motion.div} variants={fadeInUp}
                            key={index}
                            sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <CardInfoRectangle
                                title={card.title}
                                description={card.content}
                                icon={card.icon}
                                isMiddle={false}
                            />
                        </Box>

                    ))}
                </Box>
            </Box>

            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', py: '4rem', bgcolor: '#f9fafb' }}>
                <Container maxWidth="lg">
                    <Box
                        component={motion.div}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        sx={{ textAlign: 'center', mb: 8 }}
                    >
                        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', fontSize: { xs: '2rem', md: '2.5rem' } }}>
                            Giá trị cốt lõi
                        </Typography>
                        <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400 }}>
                            Nền tảng của Vương quốc DTK
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            width: '100%',
                            maxWidth: '1200px',
                            display: 'flex',
                            gap: '1.6rem',
                            justifyContent: 'space-around',
                            '@media (max-width: 1080px)': {
                                display: 'flex',
                                flexDirection: 'column  '
                            },
                        }}
                    >
                        {values.map((value, index) => (
                            <Box
                                component={motion.div}
                                variants={fadeInUp}
                                key={index}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}>
                                <CardInfoSquare
                                    title={value.title}
                                    description={value.description}
                                    icon={value.icon}
                                    isMiddle={false}
                                />
                            </Box>
                        ))}
                    </Box>
                </Container>
            </Box>

            {/* 4. TEAM SECTION */}
            <Box sx={{ py: '4rem', bgcolor: 'white' }}>
                <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    sx={{ textAlign: 'center', mb: 8 }}
                >
                    <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', fontSize: { xs: '2rem', md: '2.5rem' } }}>
                        Đội ngũ tinh anh
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400 }}>
                        Những người kiến tạo vương quốc
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '2rem',
                        width: '100%',
                    }}>
                    {team.map((member, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <Card
                                component={motion.div}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                sx={{
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                                    width: '20rem',
                                    border: 'none',
                                    '&:hover': {
                                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        height: 320,
                                        position: 'relative',
                                        bgcolor: '#f3f4f6',
                                    }}
                                >
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                        }}
                                    />
                                </Box>

                                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                                    <Typography
                                        variant="h6"
                                        gutterBottom
                                        sx={{ fontWeight: 'bold' }}
                                    >
                                        {member.name}
                                    </Typography>

                                    <Typography
                                        variant="body2"
                                        sx={{
                                            background: 'linear-gradient(to right, #db2777, #9333ea)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            fontWeight: 700,
                                            textTransform: 'uppercase',
                                            fontSize: '0.875rem',
                                        }}
                                    >
                                        {member.role}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>
                    ))}
                </Box>

            </Box>

            {/* 5. ECOSYSTEM / FEATURES */}
            <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#f9fafb' }}>
                <Container maxWidth="md">
                    <Box
                        component={motion.div}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        sx={{ textAlign: 'center', mb: 8 }}
                    >
                        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', fontSize: { xs: '2rem', md: '2.5rem' } }}>
                            DTK Media có gì?
                        </Typography>
                        <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400 }}>
                            Hệ sinh thái giải trí khác biệt
                        </Typography>
                    </Box>

                    <Stack spacing={4}>
                        {features.map((item, index) => (
                            <Box
                                component={motion.div}
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 4,
                                    flexDirection: { xs: 'column', sm: 'row' }
                                }}
                            >
                                <Box
                                    sx={{
                                        background: 'linear-gradient(to right, #db2777, #9333ea)',
                                        color: 'white',
                                        px: 4,
                                        py: 2,
                                        borderRadius: '999px',
                                        minWidth: '200px',
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        boxShadow: '0 4px 14px 0 rgba(219, 39, 119, 0.39)',
                                        fontSize: '1.1rem'
                                    }}>
                                    {item.label}
                                </Box>
                                <Box
                                    sx={{
                                        bgcolor: 'white',
                                        p: 3,
                                        borderRadius: '16px',
                                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                                        flex: 1,
                                        width: '100%',
                                        borderLeft: '4px solid #db2777'
                                    }}
                                >
                                    <Typography variant="h6" sx={{ fontSize: '1.125rem', lineHeight: 1.6, color: '#374151' }}>
                                        {item.content}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Stack>
                </Container>
            </Box>
        </Box >
    );
}