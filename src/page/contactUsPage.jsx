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

// 1. Styled Component cho Text Gradient
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

    // --- 2. CSS "XỊN" CHO INPUT ---
    // Đây là phần làm đẹp chính: Bo góc, đổi màu nền, hiệu ứng focus
    const customTextFieldStyle = {
        '& .MuiOutlinedInput-root': {
            borderRadius: '16px', // Bo góc mạnh (tròn trịa hơn)
            backgroundColor: '#f8fafc', // Màu nền xám cực nhạt (sang hơn nền trắng tinh)
            transition: 'all 0.3s ease',
            '& fieldset': {
                borderColor: '#e2e8f0', // Viền mặc định màu nhạt
                borderWidth: '1px',
            },
            '&:hover fieldset': {
                borderColor: '#9333ea', // Hover vào hiện màu tím
            },
            '&.Mui-focused': {
                backgroundColor: '#ffffff', // Khi gõ chữ thì nền sáng lên
                boxShadow: '0 4px 20px rgba(147, 51, 234, 0.1)', // Đổ bóng nhẹ khi focus
                '& fieldset': {
                    borderWidth: '2px',
                    borderColor: '#db2777', // Focus vào hiện màu hồng
                }
            }
        },
        '& .MuiInputLabel-root': {
            color: '#64748b', // Màu chữ label xám trung tính
            fontWeight: 500,
            '&.Mui-focused': {
                color: '#db2777', // Label đổi màu hồng khi focus
                fontWeight: 600
            }
        },
        '& .MuiInputBase-input': {
            padding: '16px 14px', // Tăng padding để chữ thở
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
                    <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: '900', letterSpacing: '-0.02em' }}>
                        <GradientText>Liên hệ hợp tác</GradientText>
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto', lineHeight: 1.6 }}>
                        Kết nối với chúng tôi để hiện thực hóa ý tưởng của bạn.
                    </Typography>
                </Box>
            </Fade>

            <Grid container spacing={4} sx={{ justifyContent: 'center' }}>

                {/* --- CỘT FORM (65%) --- */}
                <Grid item xs={12} md={8}>
                    <Grow in={true} timeout={1000}>
                        <Paper
                            elevation={0} // Tắt shadow mặc định của MUI
                            sx={{
                                p: { xs: 3, md: 6 },
                                borderRadius: '32px', // Bo góc khung chứa cực lớn
                                boxShadow: '0 20px 60px -10px rgba(0, 0, 0, 0.08)', // Shadow custom: Mềm và sâu
                                border: '1px solid rgba(0,0,0,0.05)',
                                height: '100%'
                            }}
                        >
                            <Box mb={4}>
                                <Typography variant="h4" fontWeight="800" gutterBottom>
                                    Gửi tin nhắn
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Vui lòng điền thông tin chi tiết để chúng tôi hỗ trợ tốt nhất.
                                </Typography>
                            </Box>

                            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                                <Stack spacing={3}>

                                    {/* Select Subject - Highlight */}
                                    <TextField
                                        fullWidth
                                        select
                                        label="Bạn là đối tượng nào? *"
                                        defaultValue=""
                                        inputProps={register("subject", { required: "Vui lòng chọn đối tượng" })}
                                        error={!!errors.subject}
                                        helperText={errors.subject?.message}
                                        sx={{
                                            ...customTextFieldStyle,
                                            // Style riêng cho dropdown để nó nổi bật hơn
                                            '& .MuiOutlinedInput-root': {
                                                ...customTextFieldStyle['& .MuiOutlinedInput-root'],
                                                backgroundColor: '#fff0f7', // Nền màu hồng phấn nhẹ
                                                '&:hover fieldset': { borderColor: '#db2777' }
                                            }
                                        }}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <PersonIcon sx={{ color: '#db2777' }} />
                                                </InputAdornment>
                                            ),
                                        }}
                                    >
                                        <MenuItem value=""><em>Chọn đối tượng</em></MenuItem>
                                        <MenuItem value="creator">Creator (KOC/KOL)</MenuItem>
                                        <MenuItem value="brand">Brand Partner (Nhãn hàng)</MenuItem>
                                        <MenuItem value="other">Khác</MenuItem>
                                    </TextField>

                                    {/* Row 1 */}
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                fullWidth
                                                label="Họ và tên *"
                                                placeholder="Nguyễn Văn A"
                                                {...register("name", { required: "Vui lòng nhập họ tên" })}
                                                error={!!errors.name}
                                                helperText={errors.name?.message}
                                                sx={customTextFieldStyle}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                fullWidth
                                                label="Email liên hệ *"
                                                type="email"
                                                {...register("email", { required: "Vui lòng nhập email", pattern: { value: /^\S+@\S+$/i, message: "Email sai định dạng" } })}
                                                error={!!errors.email}
                                                helperText={errors.email?.message}
                                                sx={customTextFieldStyle}
                                            />
                                        </Grid>
                                    </Grid>

                                    {/* Phone (Full row or split) */}
                                    <TextField
                                        fullWidth
                                        label="Số điện thoại *"
                                        type="tel"
                                        {...register("phone", { required: "Nhập số điện thoại", pattern: { value: /^[0-9]{9,12}$/, message: "SĐT không hợp lệ" } })}
                                        error={!!errors.phone}
                                        helperText={errors.phone?.message}
                                        sx={customTextFieldStyle}
                                    />

                                    {/* --- DYNAMIC FIELDS: CREATOR --- */}
                                    {isCreator && (
                                        <Fade in={isCreator}>
                                            <Grid container spacing={3} sx={{ mt: 0 }}>
                                                <Grid item xs={12} sm={6}>
                                                    <TextField
                                                        fullWidth
                                                        label="TikTok ID / Social Link *"
                                                        placeholder="@username"
                                                        {...register("tiktokId", { required: "Nhập ID kênh" })}
                                                        error={!!errors.tiktokId}
                                                        helperText={errors.tiktokId?.message}
                                                        sx={customTextFieldStyle}
                                                        InputProps={{
                                                            startAdornment: <InputAdornment position="start">@</InputAdornment>,
                                                        }}
                                                    />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <TextField
                                                        fullWidth
                                                        select
                                                        label="Lĩnh vực hoạt động *"
                                                        defaultValue=""
                                                        inputProps={register("category", { required: "Chọn lĩnh vực" })}
                                                        error={!!errors.category}
                                                        helperText={errors.category?.message}
                                                        sx={customTextFieldStyle}
                                                    >
                                                        <MenuItem value="beauty">Làm đẹp (Beauty)</MenuItem>
                                                        <MenuItem value="fashion">Thời trang (Fashion)</MenuItem>
                                                        <MenuItem value="tech">Công nghệ (Tech)</MenuItem>
                                                        <MenuItem value="lifestyle">Đời sống (Lifestyle)</MenuItem>
                                                    </TextField>
                                                </Grid>
                                            </Grid>
                                        </Fade>
                                    )}

                                    {/* --- DYNAMIC FIELDS: BRAND --- */}
                                    {isBrand && (
                                        <Fade in={isBrand}>
                                            <Box sx={{ p: 3, bgcolor: '#fdf2f8', borderRadius: '20px', border: '1px dashed #db2777' }}>
                                                <Typography variant="subtitle2" sx={{ color: '#db2777', mb: 2, fontWeight: 'bold' }}>
                                                    THÔNG TIN DOANH NGHIỆP
                                                </Typography>
                                                <Grid container spacing={3}>
                                                    <Grid item xs={12}>
                                                        <TextField
                                                            fullWidth
                                                            label="Tên Thương hiệu / Shop *"
                                                            {...register("brandName", { required: "Nhập tên Brand" })}
                                                            error={!!errors.brandName}
                                                            sx={customTextFieldStyle}
                                                            InputProps={{
                                                                startAdornment: <InputAdornment position="start"><StoreIcon fontSize="small" /></InputAdornment>,
                                                            }}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            fullWidth
                                                            select
                                                            label="Loại hình *"
                                                            defaultValue=""
                                                            inputProps={register("businessType", { required: "Chọn loại hình" })}
                                                            error={!!errors.businessType}
                                                            sx={customTextFieldStyle}
                                                        >
                                                            <MenuItem value="brand">Brand</MenuItem>
                                                            <MenuItem value="seller">Seller</MenuItem>
                                                        </TextField>
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            fullWidth
                                                            select
                                                            label="Ngành hàng *"
                                                            defaultValue=""
                                                            inputProps={register("category", { required: "Chọn ngành hàng" })}
                                                            error={!!errors.category}
                                                            sx={customTextFieldStyle}
                                                        >
                                                            <MenuItem value="fmcg">Tiêu dùng (FMCG)</MenuItem>
                                                            <MenuItem value="health">Sức khỏe</MenuItem>
                                                            <MenuItem value="electronic">Điện tử</MenuItem>
                                                        </TextField>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </Fade>
                                    )}

                                    {/* Message */}
                                    <TextField
                                        fullWidth
                                        label="Lời nhắn *"
                                        multiline
                                        rows={4}
                                        placeholder={isCreator ? "Giới thiệu ngắn gọn về kênh và định hướng..." : "Mô tả nhu cầu booking/hợp tác..."}
                                        {...register("message", { required: "Nhập nội dung" })}
                                        error={!!errors.message}
                                        helperText={errors.message?.message}
                                        sx={customTextFieldStyle}
                                    />

                                    <Button
                                        type="submit"
                                        variant="contained"
                                        size="large"
                                        endIcon={<SendIcon />}
                                        sx={{
                                            py: 2,
                                            borderRadius: '50px', // Nút bo tròn hình viên thuốc (Pill shape)
                                            background: 'linear-gradient(90deg, #9333ea 0%, #db2777 100%)',
                                            fontSize: '1.1rem',
                                            fontWeight: '700',
                                            textTransform: 'none',
                                            boxShadow: '0 10px 25px -5px rgba(219, 39, 119, 0.5)', // Bóng màu hồng
                                            transition: 'transform 0.2s',
                                            '&:hover': {
                                                transform: 'translateY(-2px)', // Hiệu ứng nhấc lên khi hover
                                                boxShadow: '0 15px 30px -5px rgba(219, 39, 119, 0.6)',
                                            }
                                        }}
                                    >
                                        Gửi tin nhắn ngay
                                    </Button>
                                </Stack>
                            </form>
                        </Paper>
                    </Grow>
                </Grid>

                {/* --- CỘT INFO (35%) --- */}
                <Grid item xs={12} md={4}>
                    <Stack spacing={3} sx={{ height: '100%' }}>
                        <Grow in={true} timeout={1200}>
                            <Box sx={{
                                p: 4,
                                borderRadius: '32px', // Bo đồng bộ với Form
                                color: 'white',
                                background: 'linear-gradient(135deg, #1e1b4b 0%, #701a75 100%)', // Màu nền tối sang trọng hơn
                                boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                {/* Decorate circle */}
                                <Box sx={{ position: 'absolute', top: -20, right: -20, width: 100, height: 100, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.1)' }} />

                                <Typography variant="h5" mb={4} fontWeight="bold">Thông tin liên hệ</Typography>
                                <Stack spacing={3}>
                                    {contactInfo.map((info, index) => (
                                        <Box key={index} sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                                            <Box sx={{
                                                minWidth: 48, height: 48,
                                                borderRadius: '16px',
                                                bgcolor: 'rgba(255,255,255,0.15)',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                backdropFilter: 'blur(5px)'
                                            }}>
                                                {info.icon}
                                            </Box>
                                            <Box>
                                                <Typography variant="caption" sx={{ opacity: 0.7, textTransform: 'uppercase', letterSpacing: '1px' }}>
                                                    {info.title}
                                                </Typography>
                                                {info.link ? (
                                                    <Typography component="a" href={info.link} display="block" sx={{ color: 'white', textDecoration: 'none', fontWeight: 600, '&:hover': { textDecoration: 'underline' } }}>
                                                        {info.content}
                                                    </Typography>
                                                ) : (
                                                    <Typography variant="body1" fontWeight={600}>{info.content}</Typography>
                                                )}
                                            </Box>
                                        </Box>
                                    ))}
                                </Stack>
                            </Box>
                        </Grow>

                        <Grow in={true} timeout={1400}>
                            <Paper elevation={0} sx={{
                                flex: 1,
                                minHeight: 250,
                                borderRadius: '32px',
                                bgcolor: '#f1f5f9',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                border: '1px dashed #cbd5e1'
                            }}>
                                <Stack alignItems="center" spacing={1} sx={{ opacity: 0.5 }}>
                                    <MapPinIcon sx={{ fontSize: 40 }} />
                                    <Typography fontWeight="600">Google Maps</Typography>
                                </Stack>
                            </Paper>
                        </Grow>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    );
}