import React, { useState } from 'react';
import {
    Container,
    Typography,
    Box,
    Tabs,
    Tab,
    Grid,
    Fade
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion, AnimatePresence } from 'framer-motion';

// Styled component cho tiêu đề gradient
const GradientText = styled('span')({
    background: 'linear-gradient(to right, #9333ea, #db2777)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 'bold',
});

// --- Dữ liệu (Giữ nguyên) ---
const creators = [
    {
        id: 1,
        name: 'Nguyễn Minh Anh',
        category: 'fashion',
        followers: '500K',
        engagement: '4.2%',
        image: 'https://images.unsplash.com/photo-1516763296043-f676c1105999?auto=format&fit=crop&q=80&w=1080',
        specialties: ['Thời trang cao cấp', 'Street style', 'Phụ kiện'],
    },
    {
        id: 2,
        name: 'Lê Thu Hà',
        category: 'beauty',
        followers: '350K',
        engagement: '5.1%',
        image: 'https://images.unsplash.com/photo-1522108098940-de49801b5b40?auto=format&fit=crop&q=80&w=1080',
        specialties: ['Skincare', 'Makeup tutorial', 'Product review'],
    },
    {
        id: 3,
        name: 'Trần Văn Nam',
        category: 'food',
        followers: '420K',
        engagement: '6.8%',
        image: 'https://images.unsplash.com/photo-1639059699363-041b0bf00ce7?auto=format&fit=crop&q=80&w=1080',
        specialties: ['Ẩm thực Việt', 'Công thức độc đáo', 'Food vlog'],
    },
    {
        id: 4,
        name: 'Phạm Thị Lan',
        category: 'fashion',
        followers: '280K',
        engagement: '3.9%',
        image: 'https://images.unsplash.com/photo-1516763296043-f676c1105999?auto=format&fit=crop&q=80&w=1080',
        specialties: ['Fashion trend', 'Outfit ideas', 'Shopping haul'],
    },
    {
        id: 5,
        name: 'Hoàng Minh Tuấn',
        category: 'other',
        followers: '380K',
        engagement: '4.5%',
        image: 'https://images.unsplash.com/photo-1640725804478-ebf80960a3f4?auto=format&fit=crop&q=80&w=1080',
        specialties: ['Lifestyle', 'Travel', 'Photography'],
    },
    {
        id: 6,
        name: 'Vũ Ngọc Mai',
        category: 'beauty',
        followers: '310K',
        engagement: '5.5%',
        image: 'https://images.unsplash.com/photo-1522108098940-de49801b5b40?auto=format&fit=crop&q=80&w=1080',
        specialties: ['Nails art', 'Hair care', 'Beauty tips'],
    },
    {
        id: 7,
        name: 'Đỗ Quang Huy',
        category: 'food',
        followers: '295K',
        engagement: '5.8%',
        image: 'https://images.unsplash.com/photo-1639059699363-041b0bf00ce7?auto=format&fit=crop&q=80&w=1080',
        specialties: ['Baking', 'Dessert', 'Food styling'],
    },
    {
        id: 8,
        name: 'Ngô Thị Hương',
        category: 'other',
        followers: '260K',
        engagement: '4.1%',
        image: 'https://images.unsplash.com/photo-1640725804478-ebf80960a3f4?auto=format&fit=crop&q=80&w=1080',
        specialties: ['Fitness', 'Yoga', 'Wellness'],
    },
];

const categories = [
    { id: 'all', name: 'Tất cả', icon: '🌟' },
    { id: 'fashion', name: 'Fashion', icon: '👗' },
    { id: 'beauty', name: 'Beauty', icon: '💄' },
    { id: 'food', name: 'Food', icon: '🍜' },
    { id: 'other', name: 'Khác', icon: '✨' },
];

// --- Animation Variants ---
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1 // Mỗi phần tử con sẽ hiện cách nhau 0.1s
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: 'spring', stiffness: 100 }
    },
    exit: { opacity: 0, scale: 0.9 }
};

export default function LibraryPage() {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const handleCategoryChange = (event, newValue) => {
        setSelectedCategory(newValue);
    };

    const filteredCreators =
        selectedCategory === 'all'
            ? creators
            : creators.filter((creator) => creator.category === selectedCategory);

    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            {/* Header Animation */}
            <Box
                component={motion.div}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                textAlign="center"
                mb={6}
            >
                <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 800 }}>
                    <GradientText>Creator Library</GradientText>
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    Khám phá những creator tài năng trong mạng lưới của chúng tôi
                </Typography>
            </Box>

            {/* Category Filters */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6, }}>
                <Tabs
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    sx={{
                        '& .MuiTabs-indicator': { display: 'none' },
                        '& .Mui-selected': {
                            background: 'linear-gradient(to right, #9333ea, #db2777) !important',
                            color: 'white !important',
                            boxShadow: '0 4px 14px 0 rgba(147, 51, 234, 0.39)',
                        },
                    }}
                >
                    {categories.map((cat) => (
                        <Tab
                            key={cat.id}
                            value={cat.id}
                            label={`${cat.icon} ${cat.name}`}
                            sx={{
                                mx: 1,
                                borderRadius: '50px',
                                border: '1px solid',
                                borderColor: 'divider',
                                minHeight: '48px',
                                textTransform: 'none',
                                fontSize: '1rem',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    borderColor: '#9333ea',
                                }
                            }}
                        />
                    ))}
                </Tabs>
            </Box>

            {/* Creators Grid with Animation */}
            {/* AnimatePresence cho phép animate khi component unmount (lọc data) */}
            <AnimatePresence mode="popLayout">
                <Grid
                    container
                    spacing={3}
                    sx={{ justifyContent: 'center' }}
                    component={motion.div} // Biến Grid thành motion component
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                // Key quan trọng để reset animation khi đổi category nếu muốn
                // key={selectedCategory} 
                >
                    {filteredCreators.map((creator) => (
                        <Grid
                            item
                            key={creator.id}
                            // Component motion.div trực tiếp trên Grid Item để xử lý layout
                            component={motion.div}
                            layout // Magic prop: Tự động animate vị trí khi danh sách thay đổi
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            sx={{
                                flexBasis: { xs: '100%', sm: '50%', md: '33.33%', lg: '20%' },
                                maxWidth: { xs: '100%', sm: '50%', md: '33.33%', lg: '20%' }
                            }}
                        >
                            {/* Card Content với Hover Effect */}
                            <Box
                                component={motion.div}
                                whileHover={{
                                    y: -8,
                                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                                }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-start',
                                    bgcolor: 'background.paper',
                                    borderRadius: '1rem',
                                    padding: '0.5rem', // Thêm chút padding cho đẹp
                                    cursor: 'pointer'
                                }}
                            >
                                <Box sx={{ overflow: 'hidden', borderRadius: '0.8rem' }}>
                                    <motion.img
                                        src={creator.image}
                                        alt={creator.name}
                                        whileHover={{ scale: 1.05 }} // Zoom nhẹ ảnh khi hover
                                        transition={{ duration: 0.3 }}
                                        style={{
                                            height: '15rem',
                                            width: '100%',
                                            objectFit: 'cover',
                                        }}
                                    />
                                </Box>
                                <Box sx={{ mt: 2, px: 1 }}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
                                        {creator.name}
                                    </Typography>
                                    <Typography sx={{ fontWeight: 400, fontSize: '0.9rem', color: 'text.secondary' }}>
                                        @{creator.category} • {creator.followers} followers
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </AnimatePresence>

            {/* Empty State Animation */}
            {filteredCreators.length === 0 && (
                <Box
                    component={motion.div}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    textAlign="center"
                    py={10}
                >
                    <Typography variant="h6" color="text.secondary">
                        Không tìm thấy creator nào trong danh mục này 😢
                    </Typography>
                </Box>
            )}
        </Container>
    );
}