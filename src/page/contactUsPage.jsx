import React from 'react';
import { useForm } from 'react-hook-form';
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
    Grow,
    Fade,
    InputAdornment
} from '@mui/material';
import {
    Mail as MailIcon,
    Phone as PhoneIcon,
    LocationOn as MapPinIcon,
    Send as SendIcon,
    Forum as MessageCircleIcon,
    Person as PersonIcon,
    Work as WorkIcon,
    Category as CategoryIcon,
    Store as StoreIcon
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const GradientText = styled('span')({
    background: 'linear-gradient(to right, #9333ea, #db2777)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 800,
});

export default function ContactUsPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        reset
    } = useForm({
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
            tiktokId: '',
            brandName: '',
            businessType: '',
            category: ''
        }
    });

    const subjectValue = watch('subject');
    const isCreator = subjectValue === 'creator';
    const isBrand = subjectValue === 'brand';

    const onSubmit = (data) => {
        console.log(data);
        alert(`Đã gửi thông tin thành công!`);
        reset();
    };


    const customTextFieldStyle = {
        '& .MuiOutlinedInput-root': {
            borderRadius: '16px',
            backgroundColor: '#f8fafc',
            transition: 'all 0.3s ease',
            '& fieldset': {
                borderColor: '#e2e8f0',
                borderWidth: '1px',
            },
            '&:hover fieldset': {
                borderColor: '#9333ea',
            },
            '&.Mui-focused': {
                backgroundColor: '#ffffff',
                boxShadow: '0 4px 20px rgba(147, 51, 234, 0.1)',
                '& fieldset': {
                    borderWidth: '2px',
                    borderColor: '#db2777',
                }
            }
        },
        '& .MuiInputLabel-root': {
            color: '#64748b',
            fontWeight: 500,
            '&.Mui-focused': {
                color: '#db2777',
                fontWeight: 600
            }
        },
        '& .MuiInputBase-input': {
            padding: '16px 14px',
            fontSize: '1rem',
        }
    };

    const contactInfo = [
        { icon: <MailIcon />, title: 'Email', content: 'contact@mediahub.vn', link: 'mailto:contact@mediahub.vn' },
        { icon: <PhoneIcon />, title: 'Điện thoại', content: '(+84) 123 456 789', link: 'tel:+84123456789' },
        { icon: <MapPinIcon />, title: 'Địa chỉ', content: '123 Đường ABC, Quận 1, TP. HCM', link: null },
        { icon: <MessageCircleIcon />, title: 'Social Media', content: '@mediahub_vn', link: null },
    ];

    return (
        <Container maxWidth="xl" sx={{ py: 8 }}>
            <Fade in={true} timeout={800}>
                <Box textAlign="center" mb={6}>
                    <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 600 }}>
                        Liên hệ hợp tác
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto', lineHeight: 1.6 }}>
                        Kết nối với chúng tôi để hiện thực hóa ý tưởng của bạn.
                    </Typography>
                </Box>
            </Fade>

            <Box
                sx={{
                    display: 'flex',
                    gap: '2rem',
                    justifyContent: 'center',
                    alignItems: 'stretch',
                    width: '100%',
                    '@media (max-width: 900px)': {
                        flexDirection: 'column',
                    },
                }}
            >
                {/* ================= FORM COLUMN ================= */}
                <Box sx={{ flex: 2 }}>
                    <Grow in timeout={1000}>
                        <Paper
                            elevation={0}
                            sx={{
                                p: { xs: 3, md: 6 },
                                borderRadius: '32px',
                                boxShadow: '0 20px 60px -10px rgba(0,0,0,0.08)',
                                border: '1px solid rgba(0,0,0,0.05)',
                                height: '100%',
                            }}
                        >
                            <Box mb={4}>
                                <Typography variant="h4" fontWeight={800} gutterBottom>
                                    Gửi tin nhắn
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Vui lòng điền thông tin chi tiết để chúng tôi hỗ trợ tốt nhất.
                                </Typography>
                            </Box>

                            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                                <Stack spacing={3}>
                                    {/* SUBJECT */}
                                    <TextField
                                        fullWidth
                                        select
                                        label="Bạn là đối tượng nào? *"
                                        defaultValue=""
                                        {...register('subject', { required: 'Vui lòng chọn đối tượng' })}
                                        error={!!errors.subject}
                                        helperText={errors.subject?.message}
                                        sx={{
                                            ...customTextFieldStyle,
                                            '& .MuiOutlinedInput-root': {
                                                backgroundColor: '#fff0f7',
                                            },
                                        }}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <PersonIcon sx={{ color: '#db2777' }} />
                                                </InputAdornment>
                                            ),
                                        }}
                                    >
                                        <MenuItem value="">
                                            <em>Chọn đối tượng</em>
                                        </MenuItem>
                                        <MenuItem value="creator">Creator (KOC/KOL)</MenuItem>
                                        <MenuItem value="brand">Brand Partner</MenuItem>
                                        <MenuItem value="other">Khác</MenuItem>
                                    </TextField>

                                    {/* NAME + EMAIL */}
                                    <Box sx={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                                        <Box sx={{ flex: 1, minWidth: 260 }}>
                                            <TextField
                                                fullWidth
                                                label="Họ và tên *"
                                                {...register('name', { required: 'Nhập họ tên' })}
                                                error={!!errors.name}
                                                helperText={errors.name?.message}
                                                sx={customTextFieldStyle}
                                            />
                                        </Box>

                                        <Box sx={{ flex: 1, minWidth: 260 }}>
                                            <TextField
                                                fullWidth
                                                label="Email *"
                                                type="email"
                                                {...register('email', {
                                                    required: 'Nhập email',
                                                    pattern: {
                                                        value: /^\S+@\S+$/i,
                                                        message: 'Email không hợp lệ',
                                                    },
                                                })}
                                                error={!!errors.email}
                                                helperText={errors.email?.message}
                                                sx={customTextFieldStyle}
                                            />
                                        </Box>
                                    </Box>

                                    {/* PHONE */}
                                    <TextField
                                        fullWidth
                                        label="Số điện thoại *"
                                        {...register('phone', { required: 'Nhập số điện thoại' })}
                                        error={!!errors.phone}
                                        helperText={errors.phone?.message}
                                        sx={customTextFieldStyle}
                                    />

                                    {/* CREATOR */}
                                    {isCreator && (
                                        <Fade in={isCreator}>
                                            <Box sx={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                                                <Box sx={{ flex: 1, minWidth: 260 }}>
                                                    <TextField
                                                        fullWidth
                                                        label="TikTok ID *"
                                                        {...register('tiktokId', { required: 'Nhập ID kênh' })}
                                                        sx={customTextFieldStyle}
                                                    />
                                                </Box>
                                                <Box sx={{ flex: 1, minWidth: 260 }}>
                                                    <TextField
                                                        fullWidth
                                                        select
                                                        label="Lĩnh vực *"
                                                        defaultValue=""
                                                        {...register('category', { required: 'Chọn lĩnh vực' })}
                                                        sx={customTextFieldStyle}
                                                    >
                                                        <MenuItem value="beauty">Beauty</MenuItem>
                                                        <MenuItem value="fashion">Fashion</MenuItem>
                                                        <MenuItem value="tech">Tech</MenuItem>
                                                    </TextField>
                                                </Box>
                                            </Box>
                                        </Fade>
                                    )}

                                    {/* BRAND */}
                                    {isBrand && (
                                        <Fade in={isBrand}>
                                            <Box
                                                sx={{
                                                    p: 3,
                                                    bgcolor: '#fdf2f8',
                                                    borderRadius: '20px',
                                                    border: '1px dashed #db2777',
                                                }}
                                            >
                                                <Stack spacing={3}>
                                                    <TextField
                                                        fullWidth
                                                        label="Tên thương hiệu *"
                                                        {...register('brandName', { required: 'Nhập tên brand' })}
                                                        InputProps={{
                                                            startAdornment: (
                                                                <InputAdornment position="start">
                                                                    <StoreIcon />
                                                                </InputAdornment>
                                                            ),
                                                        }}
                                                        sx={customTextFieldStyle}
                                                    />

                                                    <Box sx={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                                                        <Box sx={{ flex: 1, minWidth: 260 }}>
                                                            <TextField
                                                                fullWidth
                                                                select
                                                                label="Loại hình *"
                                                                defaultValue=""
                                                                {...register('businessType')}
                                                                sx={customTextFieldStyle}
                                                            >
                                                                <MenuItem value="brand">Brand</MenuItem>
                                                                <MenuItem value="seller">Seller</MenuItem>
                                                            </TextField>
                                                        </Box>

                                                        <Box sx={{ flex: 1, minWidth: 260 }}>
                                                            <TextField
                                                                fullWidth
                                                                select
                                                                label="Ngành hàng *"
                                                                defaultValue=""
                                                                {...register('industry')}
                                                                sx={customTextFieldStyle}
                                                            >
                                                                <MenuItem value="fmcg">FMCG</MenuItem>
                                                                <MenuItem value="health">Health</MenuItem>
                                                            </TextField>
                                                        </Box>
                                                    </Box>
                                                </Stack>
                                            </Box>
                                        </Fade>
                                    )}

                                    {/* MESSAGE */}
                                    <TextField
                                        fullWidth
                                        label="Lời nhắn *"
                                        multiline
                                        rows={4}
                                        {...register('message', { required: 'Nhập nội dung' })}
                                        error={!!errors.message}
                                        helperText={errors.message?.message}
                                        sx={customTextFieldStyle}
                                    />

                                    <Button
                                        type="submit"
                                        size="large"
                                        variant="contained"
                                        endIcon={<SendIcon />}
                                        sx={{
                                            py: 2,
                                            borderRadius: '50px',
                                            background: 'linear-gradient(90deg, #9333ea, #db2777)',
                                            fontWeight: 700,
                                            fontSize: '1.1rem',
                                        }}
                                    >
                                        Gửi tin nhắn ngay
                                    </Button>
                                </Stack>
                            </form>
                        </Paper>
                    </Grow>
                </Box>

                {/* ================= INFO COLUMN ================= */}
                <Box sx={{ flex: 1 }}>
                    <Stack spacing={3} height="100%">
                        <Grow in timeout={1200}>
                            <Box
                                sx={{
                                    p: 4,
                                    borderRadius: '32px',
                                    color: 'white',
                                    background: 'linear-gradient(135deg,#1e1b4b,#701a75)',
                                }}
                            >
                                <Typography variant="h5" mb={3} fontWeight="bold">
                                    Thông tin liên hệ
                                </Typography>

                                <Stack spacing={3}>
                                    {contactInfo.map((info, i) => (
                                        <Box key={i} sx={{ display: 'flex', gap: 2 }}>
                                            {info.icon}
                                            <Typography fontWeight={600}>{info.content}</Typography>
                                        </Box>
                                    ))}
                                </Stack>
                            </Box>
                        </Grow>

                        <Grow in timeout={1400}>
                            <Paper
                                elevation={0}
                                sx={{
                                    flex: 1,
                                    minHeight: 250,
                                    borderRadius: '32px',
                                    bgcolor: '#f1f5f9',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '1px dashed #cbd5e1',
                                }}
                            >
                                <Stack alignItems="center" spacing={1} sx={{ opacity: 0.6 }}>
                                    <MapPinIcon sx={{ fontSize: 40 }} />
                                    <Typography fontWeight={600}>Google Maps</Typography>
                                </Stack>
                            </Paper>
                        </Grow>
                    </Stack>
                </Box>
            </Box>
        </Container>
    );
}