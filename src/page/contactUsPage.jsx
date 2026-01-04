import React from 'react';
import { useForm } from 'react-hook-form';
import {
    Container,
    Typography,
    Box,
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
    Store as StoreIcon
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { useAddContactMutation } from '@/store/helper/helperAction';

/* ================= STYLES ================= */
const GradientText = styled('span')({
    background: 'linear-gradient(to right, #9333ea, #db2777)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 800,
});

const customTextFieldStyle = {
    '& .MuiOutlinedInput-root': {
        borderRadius: '16px',
        backgroundColor: '#f8fafc',
        transition: 'all 0.3s ease',
        '& fieldset': {
            borderColor: '#e2e8f0',
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

/* ================= PAGE ================= */
export default function ContactUsPage() {
    const [addContact] = useAddContactMutation();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            phoneNumber: '',
            tiktokId: '',
            category: '',
            brandName: '',
            message: ''
        }
    });

    const onSubmit = async (data) => {
        try {
            await addContact(data).unwrap();
            alert('Đã gửi thông tin thành công!');
            reset();
        } catch (error) {
            console.error('Add contact failed:', error);
            alert('Gửi thông tin thất bại, vui lòng thử lại!');
        }
    };


    const contactInfo = [
        { icon: <MailIcon />, content: 'contact@mediahub.vn' },
        { icon: <PhoneIcon />, content: '(+84) 123 456 789' },
        { icon: <MapPinIcon />, content: '123 Đường ABC, Quận 1, TP. HCM' },
        { icon: <MessageCircleIcon />, content: '@mediahub_vn' },
    ];

    return (
        <Container maxWidth="xl" sx={{ py: 8 }}>
            {/* ===== HEADER ===== */}
            <Fade in timeout={800}>
                <Box textAlign="center" mb={6}>
                    <Typography variant="h2" fontWeight={700} gutterBottom>
                        Liên hệ hợp tác
                    </Typography>
                    <Typography
                        variant="h6"
                        color="text.secondary"
                        sx={{ maxWidth: 600, mx: 'auto', lineHeight: 1.6 }}
                    >
                        Kết nối với chúng tôi để hiện thực hóa ý tưởng của bạn
                    </Typography>
                </Box>
            </Fade>

            <Box
                sx={{
                    display: 'flex',
                    gap: '2rem',
                    alignItems: 'stretch',
                    '@media (max-width: 900px)': {
                        flexDirection: 'column',
                    },
                }}
            >
                {/* ===== FORM ===== */}
                <Box sx={{ flex: 2 }}>
                    <Grow in timeout={1000}>
                        <Paper
                            elevation={0}
                            sx={{
                                p: { xs: 3, md: 6 },
                                borderRadius: '32px',
                                boxShadow: '0 20px 60px -10px rgba(0,0,0,0.08)',
                                border: '1px solid rgba(0,0,0,0.05)',
                            }}
                        >
                            <Typography variant="h4" fontWeight={800} mb={1}>
                                Gửi tin nhắn
                            </Typography>
                            <Typography variant="body2" color="text.secondary" mb={4}>
                                Vui lòng điền thông tin chi tiết để chúng tôi hỗ trợ tốt nhất
                            </Typography>

                            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                                <Stack spacing={3}>
                                    {/* Full name */}
                                    <TextField
                                        fullWidth
                                        label="Họ và tên *"
                                        {...register('fullName', { required: 'Nhập họ tên' })}
                                        error={!!errors.fullName}
                                        helperText={errors.fullName?.message}
                                        sx={customTextFieldStyle}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <PersonIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />

                                    {/* Email */}
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

                                    {/* Phone */}
                                    <TextField
                                        fullWidth
                                        label="Số điện thoại *"
                                        {...register('phoneNumber', {
                                            required: 'Nhập số điện thoại',
                                        })}
                                        error={!!errors.phoneNumber}
                                        helperText={errors.phoneNumber?.message}
                                        sx={customTextFieldStyle}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <PhoneIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />

                                    {/* TikTok ID */}
                                    <TextField
                                        fullWidth
                                        label="TikTok ID *"
                                        {...register('tiktokId', {
                                            required: 'Nhập TikTok ID',
                                        })}
                                        error={!!errors.tiktokId}
                                        helperText={errors.tiktokId?.message}
                                        sx={customTextFieldStyle}
                                    />

                                    {/* Category */}
                                    <TextField
                                        fullWidth
                                        select
                                        label="Lĩnh vực"
                                        defaultValue=""
                                        {...register('category')}
                                        sx={customTextFieldStyle}
                                    >
                                        <MenuItem value="">Không chọn</MenuItem>
                                        <MenuItem value="beauty">Beauty</MenuItem>
                                        <MenuItem value="fashion">Fashion</MenuItem>
                                        <MenuItem value="tech">Tech</MenuItem>
                                    </TextField>

                                    {/* Brand name */}
                                    <TextField
                                        fullWidth
                                        label="Tên thương hiệu"
                                        {...register('brandName')}
                                        sx={customTextFieldStyle}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <StoreIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />

                                    {/* Message */}
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
                                        Gửi tin nhắn
                                    </Button>
                                </Stack>
                            </form>
                        </Paper>
                    </Grow>
                </Box>

                {/* ===== INFO ===== */}
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
                                <Typography variant="h5" fontWeight="bold" mb={3}>
                                    Thông tin liên hệ
                                </Typography>

                                <Stack spacing={3}>
                                    {contactInfo.map((item, idx) => (
                                        <Box key={idx} sx={{ display: 'flex', gap: 2 }}>
                                            {item.icon}
                                            <Typography fontWeight={600}>{item.content}</Typography>
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
