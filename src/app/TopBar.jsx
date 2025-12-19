import { AppBar, Toolbar, Box, Button } from "@mui/material";
import { ROUTES } from "../router/routerConstants";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useNavigate } from "react-router";

export default function TopBar({ onMenuClick, isMobile }) {
    const navigate = useNavigate();
    const menuItems = [
        { label: "Home", path: ROUTES.HOME },
        { label: "For Brand", path: ROUTES.BRAND },
        { label: "For Creator", path: ROUTES.CREATOR },
        { label: "Library", path: ROUTES.LIBRARY },
        { label: "Contact Us", path: ROUTES.CONTACT },
    ];

    return (
        <AppBar
            position="fixed"
            sx={(theme) => ({
                minHeight: '64px',
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

                    <Box sx={{ cursor: 'pointer', fontWeight: 'bold' }} >
                        LOGO
                    </Box>

                    <Box sx={{ display: 'flex', gap: 2 }}>
                        {menuItems.map((item) => (
                            <Button
                                onClick={() => navigate(item?.path)}
                                key={item.label}
                                sx={{
                                    color: 'black',
                                    textTransform: 'none',
                                    fontSize: '1rem',
                                    '&:hover': {
                                        color: 'primary.main',
                                    }
                                }}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </Box>

                </Box> : <Box
                    onClick={onMenuClick}
                    sx={{
                        cursor: 'pointer',
                        flexGrow: 1,
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center'
                    }}>
                    <MenuOutlinedIcon />
                </Box>}
            </Toolbar>
        </AppBar>
    );
}