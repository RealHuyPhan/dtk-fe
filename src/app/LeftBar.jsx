import { Box, Button, Drawer, Typography, IconButton } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { LOCAL_STORAGE_NAME } from "../utils/constant";
import i18next from "i18next";
import { ROUTES } from "../router/routerConstants";
import logoNoText from "@/assets/logo/dtkLogoNoText.png";
import CloseIcon from '@mui/icons-material/Close';

export default function LeftBar({ open, onClose, drawerWidth }) {
    const navigate = useNavigate();
    const location = useLocation();
    const activeColor = "#C7364A";

    const [langSelect, setlangSelect] = useState(localStorage.getItem(LOCAL_STORAGE_NAME.LANGUAGE) || 'en');

    const changeLanguage = (lng) => {
        i18next.changeLanguage(lng);
        localStorage.setItem(LOCAL_STORAGE_NAME.LANGUAGE, lng);
        setlangSelect(lng);
    };

    const menuItems = [
        { label: "Home", path: ROUTES.HOME },
        { label: "Brand", path: ROUTES.BRAND },
        { label: "Creator", path: ROUTES.CREATOR },
        { label: "Library", path: ROUTES.LIBRARY },
        { label: "About", path: ROUTES.ABOUT },
        { label: "Contact Us", path: ROUTES.CONTACT },
    ];

    const handleNavigate = (path) => {
        navigate(path);
        onClose(); 
    };

    return (
        <Drawer
            anchor="left"
            open={open}
            onClose={onClose}
            sx={{
                width: drawerWidth,
                "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    boxSizing: "border-box",
                    borderRight: 'none',
                    backgroundColor: '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    paddingBottom: 4
                },
            }}
        >
            {/* --- PHẦN TRÊN: LOGO & LIST MENU --- */}
            <Box>
                <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between', 
                    p: 3, 
                    mb: 2 
                }}>
                     <img src={logoNoText} alt="DTK Logo" style={{ height: '40px' }} />
                     <IconButton onClick={onClose} size="small">
                        <CloseIcon />
                     </IconButton>
                </Box>

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    px: 2,
                    gap: 1
                }}>
                    {menuItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        
                        return (
                            <Button
                                onClick={() => handleNavigate(item?.path)}
                                key={item.label}
                                disableRipple // Tắt hiệu ứng sóng nước khi click
                                sx={{
                                    justifyContent: 'flex-start',
                                    textAlign: 'left',
                                    // LOGIC MÀU SẮC CHÍNH: Active -> Đỏ, Không -> Đen
                                    color: isActive ? activeColor : 'black',
                                    textTransform: 'none',
                                    fontSize: '1.1rem',
                                    fontWeight: isActive ? 600 : 400,
                                    padding: '10px 16px',
                                    backgroundColor: 'transparent',
                                    transition: 'all 0.3s ease',
                                    
                                    // LOGIC HOVER:
                                    '&:hover': {
                                        color: activeColor, // Hover -> Chữ đỏ
                                        backgroundColor: 'transparent', // Hover -> Không hiện nền xám
                                        paddingLeft: '24px', // Giữ animation trượt nhẹ cho đẹp
                                    }
                                }}
                            >
                                {item.label}
                            </Button>
                        );
                    })}
                </Box>
            </Box>

            {/* --- PHẦN DƯỚI: LANGUAGE SWITCHER ---
            <Box sx={{ px: 4, display: 'flex', gap: 2 }}>
                 <Typography 
                    onClick={() => changeLanguage('vi')}
                    sx={{ 
                        cursor: 'pointer', 
                        fontWeight: langSelect === 'vi' ? 'bold' : 'normal',
                        color: langSelect === 'vi' ? activeColor : '#888',
                        transition: 'color 0.2s',
                        '&:hover': { color: activeColor }
                    }} 
                >
                    VI
                </Typography>
                <Typography sx={{ color: '#ccc' }}>|</Typography>
                <Typography 
                    onClick={() => changeLanguage('en')}
                    sx={{ 
                        cursor: 'pointer', 
                        fontWeight: langSelect === 'en' ? 'bold' : 'normal',
                        color: langSelect === 'en' ? activeColor : '#888',
                        transition: 'color 0.2s',
                        '&:hover': { color: activeColor }
                    }}
                >
                    EN
                </Typography>
            </Box> */}
        </Drawer>
    );
}