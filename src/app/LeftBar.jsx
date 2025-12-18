import { Box, Button, Drawer } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { LOCAL_STORAGE_NAME } from "../utils/constant";
import i18next from "i18next";
import { ROUTES } from "../router/routerConstants";


export default function LeftBar({ open, onClose, drawerWidth }) {
    const navigate = useNavigate();
    const [langSelect, setlangSelect] = useState(localStorage.getItem(LOCAL_STORAGE_NAME.LANGUAGE))
    const changeLanguage = (lng) => {
        i18next.changeLanguage(lng);
        localStorage.setItem(LOCAL_STORAGE_NAME.LANGUAGE, lng)
        setlangSelect(lng)
    };

    const menuItems = [
        { label: "Home", path: ROUTES.HOME },
        { label: "Brand", path: ROUTES.BRAND },
        { label: "Creator", path: ROUTES.CREATOR },
        { label: "Library", path: ROUTES.LIBRARY },
        { label: "Contact Us", path: ROUTES.CONTACT },
    ];


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
                },
            }}
        >
            <Box sx={{
                display: 'flex',
                gap: 2,
                flexDirection: 'column',
                padding: 2
            }}>
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
        </Drawer>
    );
}
