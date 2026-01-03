import React, { useState, useEffect, useMemo } from 'react';
import {
    Container, Typography, Box, Tabs, Tab,
    Grid, CircularProgress, Button, Card, CardContent,
    Skeleton, Chip
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import VerifiedIcon from '@mui/icons-material/Verified';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { motion, AnimatePresence } from 'framer-motion';

import {
    useGetCategoryQuery,
    useGetCreatorQuery
} from '@/store/helper/helperAction';
import { handleUrlImage } from '@/utils/Util';

/* ------------------ STYLED COMPONENTS ------------------ */

const PRIMARY_GRADIENT = 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)';

const GradientText = styled('span')({
    background: PRIMARY_GRADIENT,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 800,
    letterSpacing: '-0.5px'
});

// Card Style
const CreatorCard = styled(motion.create(Card))(({ theme }) => ({
    height: '100%',
    borderRadius: 24,
    border: '1px solid rgba(255, 255, 255, 0.6)',
    background: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(12px)',
    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
    overflow: 'hidden',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: '0 20px 40px rgba(139, 92, 246, 0.15)',
        '& .card-image': {
            transform: 'scale(1.1)',
        }
    }
}));

const ImageWrapper = styled(Box)({
    width: '100%',
    height: 280,
    overflow: 'hidden',
    position: 'relative',
});

const StyledImage = styled('img')({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.6s ease',
});

// --- UPDATED TAB STYLE ---
const StyledTab = styled(Tab)(({ theme }) => ({
    textTransform: 'none',
    fontWeight: 600,
    fontSize: '0.95rem',
    borderRadius: 50,
    margin: '0 6px',
    padding: '10px 24px',
    minHeight: 44,
    transition: 'all 0.3s ease',
    
    // MÀU MẶC ĐỊNH (Theo yêu cầu: #16223A)
    backgroundColor: '#16223A',
    color: 'rgba(255, 255, 255, 0.7)', // Chữ trắng mờ cho dễ đọc trên nền tối
    border: '1px solid transparent',

    // TRẠNG THÁI ACTIVE (Theo yêu cầu: #C7364A)
    '&.Mui-selected': {
        color: '#fff',
        backgroundColor: '#C7364A', 
        boxShadow: '0 4px 15px rgba(199, 54, 74, 0.4)', // Shadow màu đỏ tương ứng
        borderColor: '#C7364A'
    },

    // TRẠNG THÁI HOVER (Khi chưa chọn)
    '&:not(.Mui-selected):hover': {
        backgroundColor: '#233253', // Sáng hơn #16223A một chút
        color: '#fff',
        transform: 'translateY(-2px)'
    }
}));

/* ------------------ ANIMATION VARIANTS ------------------ */
const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: { y: 0, opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100 } }
};

/* ------------------ HELPERS ------------------ */
const getCategoryIcon = (name) => ({
    Fashion: '👗', Beauty: '💄', Food: '🍜', Dance: '💃', 
    Travel: '✈️', Tech: '💻', Art: '🎨', Music: '🎵'
}[name] || '✨');

/* ------------------ COMPONENT ------------------ */
export default function LibraryPage() {
    const [page, setPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [creators, setCreators] = useState([]);

    /* ---------- API ---------- */
    const { data: creatorRes, isLoading: creatorLoading, isFetching: creatorFetching } = useGetCreatorQuery({
        pagination: { page, pageSize: 25 }
    });
    const { data: categoryRes, isLoading: categoryLoading } = useGetCategoryQuery({});

    /* ---------- Logic ---------- */
    useEffect(() => {
        if (creatorRes?.data) {
            setCreators(prev => {
                const newItems = creatorRes.data.filter(c => !prev.some(p => p.id === c.id));
                return [...prev, ...newItems];
            });
        }
    }, [creatorRes]);

    const categories = useMemo(() => {
        const base = [{ id: 'all', name: 'Khám phá', icon: '🌟' }];
        if (!categoryRes?.data) return base;
        return [...base, ...categoryRes.data.map(c => ({
            id: c.id, name: c.name, icon: getCategoryIcon(c.name)
        }))];
    }, [categoryRes]);

    const filteredCreators = useMemo(() => {
        if (selectedCategory === 'all') return creators;
        return creators.filter(c => c.categories?.some(cat => cat.id === selectedCategory));
    }, [creators, selectedCategory]);

    const meta = creatorRes?.meta?.pagination;
    const hasMore = meta ? meta.page < meta.pageCount : false;
    const isInitialLoading = (creatorLoading || categoryLoading) && page === 1;

    /* ------------------ RENDER ------------------ */
    return (
        <Box sx={{ minHeight: '100vh', bgcolor: '#f8f9fa', overflowX: 'hidden' }}>
            <Box sx={{
                position: 'fixed', top: -100, left: -100, width: 400, height: 400,
                background: 'radial-gradient(circle, rgba(236,72,153,0.1) 0%, rgba(255,255,255,0) 70%)',
                zIndex: 0, pointerEvents: 'none'
            }} />
            
            <Container maxWidth="xl" sx={{ py: 8, position: 'relative', zIndex: 1 }}>
                
                {/* HEADER */}
                <Box textAlign="center" mb={8} component={motion.div} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
                    <Chip label="Community" size="small" sx={{ mb: 2, bgcolor: alpha('#9333ea', 0.1), color: '#9333ea', fontWeight: 700 }} />
                    <Typography variant="h2" sx={{ fontWeight: 900, mb: 1 }}>
                        <GradientText>Creator Library</GradientText>
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400, maxWidth: 600, mx: 'auto' }}>
                        Khám phá phong cách, học hỏi xu hướng từ những Creator hàng đầu.
                    </Typography>
                </Box>

                {/* TABS / CATEGORIES - ĐÃ CẬP NHẬT MÀU */}
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
                    <Tabs
                        value={selectedCategory}
                        onChange={(_, v) => setSelectedCategory(v)}
                        // variant="scrollable"
                        // scrollButtons="auto"
                        allowScrollButtonsMobile
                        sx={{
                            '& .MuiTabs-indicator': { display: 'none' },
                            '& .MuiTabs-flexContainer': { gap: 1.5 }
                        }}
                    >
                        {categories.map(cat => (
                            <StyledTab
                                key={cat.id}
                                value={cat.id}
                                label={
                                    <Box display="flex" alignItems="center" gap={1}>
                                        <span>{cat.icon}</span>
                                        <span>{cat.name}</span>
                                    </Box>
                                }
                            />
                        ))}
                    </Tabs>
                </Box>

                {/* CONTENT AREA */}
                {isInitialLoading ? (
                     <Grid container spacing={3}>
                        {[...Array(8)].map((_, index) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                                <Card sx={{ borderRadius: 6, boxShadow: 'none', border: '1px solid #eee' }}>
                                    <Skeleton variant="rectangular" height={280} />
                                    <Box p={2}>
                                        <Skeleton width="60%" height={30} sx={{ mb: 1 }} />
                                        <Skeleton width="40%" />
                                    </Box>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                ) : (
                    <>
                        <AnimatePresence mode="popLayout">
                            <Grid container spacing={4} component={motion.div} layout variants={containerVariants} initial="hidden" animate="visible">
                                {filteredCreators.map(c => (
                                    <Grid item xs={12} sm={6} md={4} lg={3} key={c.id} component={motion.div} variants={itemVariants} layout>
                                        <CreatorCard>
                                            <ImageWrapper>
                                                <StyledImage
                                                    className="card-image"
                                                    src={handleUrlImage(c?.image?.url || c?.url)}
                                                    alt={c.fullName}
                                                />
                                                <Box sx={{ position: 'absolute', top: 12, right: 12 }}>
                                                    <Box sx={{ 
                                                        bgcolor: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(4px)',
                                                        borderRadius: '20px', px: 1.5, py: 0.5,
                                                        fontSize: '0.75rem', fontWeight: 'bold',
                                                        display: 'flex', alignItems: 'center', gap: 0.5
                                                    }}>
                                                        {/* <FavoriteIcon sx={{ fontSize: 14, color: '#db2777' }} />
                                                        {c.likes || 'New'} */}
                                                    </Box>
                                                </Box>
                                            </ImageWrapper>

                                            <CardContent sx={{ p: 3 }}>
                                                <Box display="flex" justifyContent="space-between" alignItems="center" mb={0.5}>
                                                    <Typography variant="h6" fontWeight="800" noWrap sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                                        {c.fullName}
                                                        <VerifiedIcon sx={{ fontSize: 18, color: '#3b82f6' }} />
                                                    </Typography>
                                                </Box>

                                                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, opacity: 0.8 }}>
                                                    @{c.tagName || 'creator'}
                                                </Typography>

                                                <Box sx={{ p: 1.5, bgcolor: alpha('#9333ea', 0.05), borderRadius: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <Typography variant="caption" fontWeight="bold" color="text.secondary">Followers</Typography>
                                                    <Typography variant="body2" fontWeight="800" sx={{ color: '#db2777' }}>
                                                        {c.followers ? c.followers.toLocaleString() : '0'}
                                                    </Typography>
                                                </Box>
                                            </CardContent>
                                        </CreatorCard>
                                    </Grid>
                                ))}
                            </Grid>
                        </AnimatePresence>

                        {/* EMPTY & LOAD MORE */}
                        {!filteredCreators.length && !creatorFetching && (
                            <Box textAlign="center" py={10}>
                                <Typography variant="h6" color="text.secondary">Không tìm thấy Creator nào.</Typography>
                            </Box>
                        )}

                        {hasMore && (
                            <Box textAlign="center" mt={8} pb={4}>
                                <Button
                                    onClick={() => setPage(p => p + 1)}
                                    disabled={creatorFetching}
                                    sx={{
                                        borderRadius: 50, px: 6, py: 1.5,
                                        background: '#fff', color: '#333',
                                        border: '1px solid #ddd',
                                        boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                                        '&:hover': { background: '#f5f5f5' }
                                    }}
                                    endIcon={creatorFetching ? <CircularProgress size={20} /> : <KeyboardArrowDownIcon />}
                                >
                                    {creatorFetching ? 'Đang tải thêm...' : 'Xem thêm'}
                                </Button>
                            </Box>
                        )}
                    </>
                )}
            </Container>
        </Box>
    );
}