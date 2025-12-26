import React, { useState, useMemo } from 'react';
import {
    Container,
    Typography,
    Box,
    Tabs,
    Tab,
    Grid,
    CircularProgress,
    Button
} from '@mui/material';
import { styled } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'; // Icon mũi tên cho nút xem thêm
import { motion, AnimatePresence } from 'framer-motion';

// Import hook từ store của bạn
import { useGetCategoryQuery, useGetCreatorQuery } from '@/store/helper/helperAction';

// --- CONFIG ---
const STRAPI_BASE_URL = 'http://localhost:1337';

// --- STYLED COMPONENTS ---
const GradientText = styled('span')({
    background: 'linear-gradient(to right, #9333ea, #db2777)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 'bold',
});

// --- HELPER FUNCTIONS ---

const getCategoryIcon = (name) => {
    const map = {
        'Fashion': '👗',
        'Beauty': '💄',
        'Food': '🍜',
        'Dance': '💃',
        'Other': '✨'
    };
    return map[name] || '🌟';
};

const getCreatorImage = (creator) => {
    if (!creator.image) {
        const placeholders = [
            'https://images.unsplash.com/photo-1516763296043-f676c1105999?auto=format&fit=crop&q=80&w=1080',
            'https://images.unsplash.com/photo-1522108098940-de49801b5b40?auto=format&fit=crop&q=80&w=1080',
            'https://images.unsplash.com/photo-1639059699363-041b0bf00ce7?auto=format&fit=crop&q=80&w=1080',
        ];
        return placeholders[creator.id % placeholders.length];
    }
    const formats = creator.image.formats;
    const imageUrl = formats?.medium?.url || formats?.small?.url || formats?.thumbnail?.url || creator.image.url;

    if (imageUrl && imageUrl.startsWith('/')) {
        return `${STRAPI_BASE_URL}${imageUrl}`;
    }
    return imageUrl;
};

// --- ANIMATION VARIANTS ---
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
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
    // 1. STATE QUẢN LÝ PAGE
    const [page, setPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState('all');

    // 2. GỌI API VỚI PAGINATION
    // Lấy thêm `isFetching` để hiện loading icon trên nút bấm
    const {
        data: listCreator,
        isLoading: isCreatorLoading,
        isFetching: isCreatorFetching
    } = useGetCreatorQuery({
        pagination: {
            page: page,
            pageSize: 25 // Số lượng item mỗi trang
        }
    });

    const { data: categoryData, isLoading: isCategoryLoading } = useGetCategoryQuery({});

    // Loading lần đầu tiên (khi chưa có dữ liệu nào)
    const isInitialLoading = (isCreatorLoading || isCategoryLoading) && page === 1;

    // 3. XỬ LÝ LOGIC TAB CATEGORY
    const handleCategoryChange = (event, newValue) => {
        setSelectedCategory(newValue);
    };

    const categoriesList = useMemo(() => {
        const defaultTab = [{ id: 'all', name: 'Tất cả', icon: '🌟' }];
        if (!categoryData?.data) return defaultTab;

        const apiCategories = categoryData.data.map(cat => ({
            id: cat.id,
            name: cat.categoryName,
            icon: getCategoryIcon(cat.categoryName)
        }));

        return [...defaultTab, ...apiCategories];
    }, [categoryData]);

    // 4. FILTER DỮ LIỆU TẠI CLIENT
    const filteredCreators = useMemo(() => {
        if (!listCreator?.data) return [];

        if (selectedCategory === 'all') {
            return listCreator.data;
        }

        return listCreator.data.filter(creator =>
            creator.categories &&
            Array.isArray(creator.categories) &&
            creator.categories.some(cat => cat.id === selectedCategory)
        );
    }, [listCreator, selectedCategory]);

    // 5. LOGIC LOAD MORE
    const handleLoadMore = () => {
        setPage(prev => prev + 1);
    };

    // Lấy thông tin meta từ response Strapi
    const meta = listCreator?.meta?.pagination;
    // Kiểm tra xem còn trang tiếp theo không
    const hasMore = meta ? meta.page < meta.pageCount : false;

    // --- RENDER ---

    if (isInitialLoading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 10, minHeight: '60vh', alignItems: 'center' }}>
                <CircularProgress color="secondary" size={60} thickness={4} />
            </Box>
        );
    }

    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            {/* Header Title */}
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

            {/* Category Tabs */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
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
                    {categoriesList.map((cat) => (
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
                                '&:hover': { borderColor: '#9333ea' }
                            }}
                        />
                    ))}
                </Tabs>
            </Box>

            {/* Main Creator Grid */}
            <AnimatePresence mode="popLayout">
                <Grid
                    container
                    spacing={3}
                    sx={{ justifyContent: 'center' }}
                    component={motion.div}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {filteredCreators.map((creator) => (
                        <Grid
                            item
                            key={creator.id}
                            component={motion.div}
                            layout
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            sx={{
                                flexBasis: { xs: '100%', sm: '50%', md: '33.33%', lg: '20%' },
                                maxWidth: { xs: '100%', sm: '50%', md: '33.33%', lg: '20%' }
                            }}
                        >
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
                                    padding: '0.5rem',
                                    cursor: 'pointer',
                                    height: '100%',
                                    position: 'relative',
                                    overflow: 'hidden' // Giữ layout gọn gàng
                                }}
                            >
                                <Box sx={{ overflow: 'hidden', borderRadius: '0.8rem' }}>
                                    <motion.img
                                        src={getCreatorImage(creator)}
                                        alt={creator.fullName}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                        style={{
                                            height: '15rem',
                                            width: '100%',
                                            objectFit: 'cover',
                                        }}
                                    />
                                </Box>
                                <Box sx={{ mt: 2, px: 1 }}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '1.1rem' }} noWrap>
                                        {creator.fullName}
                                    </Typography>
                                    <Typography sx={{ fontWeight: 400, fontSize: '0.9rem', color: 'text.secondary' }}>
                                        {creator.tagName || (creator.categories && creator.categories.length > 0
                                            ? `@${creator.categories[0].categoryName}`
                                            : '@Creator')}
                                    </Typography>
                                    <Typography variant="caption" sx={{ color: '#db2777', fontWeight: 600 }}>
                                        {creator.followers ? `${creator.followers.toLocaleString()} followers` : 'New Creator'}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </AnimatePresence>

            {/* Empty State */}
            {filteredCreators.length === 0 && !isCreatorFetching && (
                <Box
                    component={motion.div}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    textAlign="center"
                    py={10}
                >
                    <Typography variant="h6" color="text.secondary">
                        Chưa có creator nào trong danh mục này 😢
                    </Typography>
                </Box>
            )}

            {/* --- LOAD MORE BUTTON AREA --- */}
            {hasMore && (
                <Box
                    component={motion.div}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}
                >
                    <Button
                        variant="outlined"
                        onClick={handleLoadMore}
                        disabled={isCreatorFetching} // Disable khi đang gọi API
                        endIcon={
                            isCreatorFetching ?
                                <CircularProgress size={20} color="inherit" /> :
                                <KeyboardArrowDownIcon />
                        }
                        sx={{
                            borderRadius: '50px',
                            px: 5,
                            py: 1.5,
                            borderWidth: '2px',
                            borderColor: '#db2777',
                            color: '#db2777',
                            fontWeight: 'bold',
                            textTransform: 'none',
                            fontSize: '1rem',
                            transition: 'all 0.3s',
                            '&:hover': {
                                borderWidth: '2px', // Giữ viền dày khi hover
                                borderColor: '#9333ea',
                                color: '#9333ea',
                                background: 'rgba(147, 51, 234, 0.04)',
                                transform: 'translateY(-2px)'
                            },
                            '&:disabled': {
                                borderColor: '#e0e0e0',
                                color: '#9e9e9e'
                            }
                        }}
                    >
                        {isCreatorFetching ? 'Đang tải thêm...' : 'Xem thêm Creator'}
                    </Button>
                </Box>
            )}

            {/* Hết danh sách */}
            {!hasMore && listCreator?.data?.length > 0 && (
                <Box sx={{ textAlign: 'center', mt: 6, opacity: 0.5 }}>
                    {/* <Typography variant="caption">✨ Bạn đã xem hết danh sách ✨</Typography> */}
                </Box>
            )}
        </Container>
    );
}