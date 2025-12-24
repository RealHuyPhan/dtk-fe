import React, { useState } from 'react';
import {
    Container,
    Typography,
    Box,
    Grid,
    TextField,
    MenuItem,
    Button,
    Paper,
    Stack,
    IconButton,
    Grow,
    Fade
} from '@mui/material';
import {
    Mail as MailIcon,
    Phone as PhoneIcon,
    LocationOn as MapPinIcon,
    Send as SendIcon,
    Forum as MessageCircleIcon
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

// Styled component cho tiêu đề gradient
const GradientText = styled('span')({
    background: 'linear-gradient(to right, #9333ea, #db2777)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 800,
});

export default function ContactUsPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const contactInfo = [
        {
            icon: <MailIcon />,
            title: 'Email',
            content: 'contact@mediahub.vn',
            link: 'mailto:contact@mediahub.vn',
        },
        {
            icon: <PhoneIcon />,
            title: 'Điện thoại',
            content: '(+84) 123 456 789',
            link: 'tel:+84123456789',
        },
        {
            icon: <MapPinIcon />,
            title: 'Địa chỉ',
            content: '123 Đường ABC, Quận 1, TP. HCM',
            link: null,
        },
        {
            icon: <MessageCircleIcon />,
            title: 'Social Media',
            content: '@mediahub_vn',
            link: null,
        },
    ];

    return (
        <Container maxWidth="lg" sx={{ py: 10 }}>
            {/* Header */}
            <Fade in={true} timeout={800}>
                <Box textAlign="center" mb={8}>
                    <Typography variant="h2" component="h1" gutterBottom>
                        <GradientText>Liên hệ với chúng tôi</GradientText>
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn
                    </Typography>
                </Box>
            </Fade>

            <Grid container spacing={6}>
                {/* Contact Form */}
                <Grid item xs={12} md={7}>
                    <Grow in={true} timeout={1000}>
                        <Paper elevation={4} sx={{ p: { xs: 3, md: 5 }, borderRadius: 4 }}>
                            <Typography variant="h4" mb={4} fontWeight="bold">
                                Gửi tin nhắn
                            </Typography>
                            <form onSubmit={handleSubmit}>
                                <Stack spacing={3}>
                                    <TextField
                                        fullWidth
                                        label="Họ và tên *"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Nguyễn Văn A"
                                        variant="outlined"
                                        required
                                    />

                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                fullWidth
                                                label="Email *"
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="email@example.com"
                                                required
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                fullWidth
                                                label="Số điện thoại"
                                                name="phone"
                                                type="tel"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="0123456789"
                                            />
                                        </Grid>
                                    </Grid>

                                    <TextField
                                        fullWidth
                                        select
                                        label="Chủ đề *"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    >
                                        <MenuItem value="">Chọn chủ đề</MenuItem>
                                        <MenuItem value="brand">Tôi là Brand</MenuItem>
                                        <MenuItem value="creator">Tôi là Creator</MenuItem>
                                        <MenuItem value="partnership">Hợp tác</MenuItem>
                                        <MenuItem value="other">Khác</MenuItem>
                                    </TextField>

                                    <TextField
                                        fullWidth
                                        label="Nội dung *"
                                        name="message"
                                        multiline
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Nhập nội dung tin nhắn của bạn..."
                                        required
                                    />

                                    <Button
                                        type="submit"
                                        variant="contained"
                                        size="large"
                                        startIcon={<SendIcon />}
                                        sx={{
                                            py: 2,
                                            borderRadius: 2,
                                            background: 'linear-gradient(to right, #9333ea, #db2777)',
                                            fontSize: '1.1rem',
                                            textTransform: 'none',
                                            boxShadow: '0 4px 15px rgba(147, 51, 234, 0.4)',
                                            '&:hover': {
                                                boxShadow: '0 6px 20px rgba(147, 51, 234, 0.6)',
                                            }
                                        }}
                                    >
                                        Gửi tin nhắn
                                    </Button>
                                </Stack>
                            </form>
                        </Paper>
                    </Grow>
                </Grid>

                {/* Contact Information Side */}
                <Grid item xs={12} md={5}>
                    <Stack spacing={4}>
                        <Grow in={true} timeout={1200}>
                            <Box
                                sx={{
                                    p: 5,
                                    borderRadius: 4,
                                    color: 'white',
                                    background: 'linear-gradient(135deg, #9333ea 0%, #db2777 100%)',
                                    boxShadow: '0 10px 30px rgba(147, 51, 234, 0.3)',
                                }}
                            >
                                <Typography variant="h4" mb={3} fontWeight="bold">
                                    Thông tin liên hệ
                                </Typography>
                                <Typography variant="body1" mb={5} sx={{ opacity: 0.9 }}>
                                    Hãy liên hệ với chúng tôi qua các kênh sau đây. Chúng tôi sẵn sàng hỗ trợ bạn!
                                </Typography>

                                <Stack spacing={4}>
                                    {contactInfo.map((info, index) => (
                                        <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                                            <Box
                                                sx={{
                                                    p: 1.5,
                                                    borderRadius: 2,
                                                    bgcolor: 'rgba(255, 255, 255, 0.2)',
                                                    display: 'flex'
                                                }}
                                            >
                                                {info.icon}
                                            </Box>
                                            <Box>
                                                <Typography variant="subtitle1" fontWeight="bold">
                                                    {info.title}
                                                </Typography>
                                                {info.link ? (
                                                    <Typography
                                                        component="a"
                                                        href={info.link}
                                                        sx={{
                                                            color: 'white',
                                                            textDecoration: 'none',
                                                            opacity: 0.9,
                                                            '&:hover': { opacity: 1, textDecoration: 'underline' }
                                                        }}
                                                    >
                                                        {info.content}
                                                    </Typography>
                                                ) : (
                                                    <Typography sx={{ opacity: 0.9 }}>
                                                        {info.content}
                                                    </Typography>
                                                )}
                                            </Box>
                                        </Box>
                                    ))}
                                </Stack>
                            </Box>
                        </Grow>

                        {/* Google Maps Placeholder */}
                        <Grow in={true} timeout={1400}>
                            <Paper
                                elevation={2}
                                sx={{
                                    height: 250,
                                    borderRadius: 4,
                                    bgcolor: '#f3f4f6',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '1px solid #e5e7eb'
                                }}
                            >
                                <Stack alignItems="center" spacing={1}>
                                    <MapPinIcon color="disabled" sx={{ fontSize: 40 }} />
                                    <Typography color="text.secondary">Google Maps Placeholder</Typography>
                                </Stack>
                            </Paper>
                        </Grow>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    );
}