import { AppBar, Toolbar, Box, Button } from "@mui/material";
import { ROUTES } from "../router/routerConstants";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useNavigate, useLocation } from "react-router"; // 1. Thêm useLocation
import logo from "@/assets/logo/dtkLogo.png";
import logoNoText from "@/assets/logo/dtkLogoNoText.png";

export default function TopBar({ onMenuClick, isMobile }) {
    const navigate = useNavigate();
    const location = useLocation(); 
    const activeColor = "#C7364A";

    const menuItems = [
        { label: "Home", path: ROUTES.HOME },
        { label: "For Brand", path: ROUTES.BRAND },
        { label: "For Creator", path: ROUTES.CREATOR },
        { label: "Library", path: ROUTES.LIBRARY },
        { label: "About", path: ROUTES.ABOUT },
        { label: "Contact Us", path: ROUTES.CONTACT },
    ];

    return (
        <AppBar
            position="fixed"
            sx={(theme) => ({
                minHeight: '74px',
                justifyContent: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                boxShadow: 1,
                borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
            })}
        >
            <Toolbar sx={{ color: 'black' }}>
                {isMobile ? <Box sx={{
                    flexGrow: 1,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>

                    <Box sx={{ cursor: 'pointer', marginLeft: '1rem' }} onClick={() => navigate(ROUTES.HOME)}>
                        <img src={logo} alt="Logo" style={{ height: '3rem', width: '5rem' }} />
                    </Box>

                    <Box sx={{ display: 'flex', gap: 2 }}>
                        {menuItems.map((item) => {
                            const isActive = location.pathname === item.path;
                            
                            return (
                                <Button
                                    onClick={() => navigate(item?.path)}
                                    key={item.label}
                                    disableRipple 
                                    sx={{
                                        color: isActive ? activeColor : 'black',
                                        textTransform: 'none',
                                        fontSize: '1rem',
                                        fontWeight: isActive ? 600 : 400, 
                                        backgroundColor: 'transparent', 
                                        '&:hover': {
                                            color: activeColor, 
                                            backgroundColor: 'transparent', 
                                        }
                                    }}
                                >
                                    {item.label}
                                </Button>
                            )
                        })}
                    </Box>

                </Box> : <Box
                    onClick={onMenuClick}
                    sx={{
                        cursor: 'pointer',
                        flexGrow: 1,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                    <Box sx={{ cursor: 'pointer', }} onClick={() => navigate(ROUTES.HOME)}>
                        <img src={logoNoText} alt="Logo" style={{ height: '3rem', width: '4.4rem' }} />
                    </Box>
                    <MenuOutlinedIcon />
                </Box>}
            </Toolbar>
        </AppBar>
    );
}