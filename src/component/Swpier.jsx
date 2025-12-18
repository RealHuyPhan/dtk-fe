import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

export default function ImageSwiper({
    images = [],
    autoPlayDelay = 4000,
    // 1. Tăng chiều cao mặc định lên để phù hợp với ảnh dọc
    height = 600,
}) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (!images.length) return;
        const timer = setInterval(next, autoPlayDelay);
        return () => clearInterval(timer);
    }, [index, autoPlayDelay, images.length]);

    const next = () => setIndex((prev) => (prev + 1) % images.length);

    const handleImageClick = (clickedIndex) => {
        if (clickedIndex !== index) {
            setIndex(clickedIndex);
        }
    };

    if (!images.length) return null;

    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                height,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                perspective: "1000px", // Giảm perspective để 3D rõ hơn với ảnh dọc
                overflow: "hidden",
                py: 4,
            }}
        >
            <Box sx={{ position: "relative", width: "100%", height: "100%", transformStyle: "preserve-3d" }}>
                {images.map((img, i) => {
                    let offset = i - index;
                    if (i === 0 && index === images.length - 1) offset = 1;
                    if (i === images.length - 1 && index === 0) offset = -1;

                    const isVisible = Math.abs(offset) <= 1;
                    if (!isVisible) return null;

                    return (
                        <Box
                            key={i}
                            component={motion.div}
                            initial={false}
                            onClick={() => handleImageClick(i)}
                            animate={{
                                // 2. Điều chỉnh khoảng cách (x)
                                // Vì ảnh hẹp đi nên khoảng cách giữa các ảnh (260px) cần giảm xuống (vd: 180px)
                                x: `calc(-50% + ${offset * 180}px)`,

                                // Có thể dùng scaleY nếu muốn kéo dài ảnh ra (nhưng dễ vỡ hình), 
                                // tốt nhất là giữ nguyên scale tỷ lệ đều.
                                scale: offset === 0 ? 1 : 0.85,
                                rotateY: offset * -45,
                                z: offset === 0 ? 0 : -100, // Đẩy ảnh phụ gần hơn một chút
                                opacity: offset === 0 ? 1 : 0.6,
                                filter: offset === 0 ? "blur(0px)" : "blur(2px)",
                            }}
                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                            sx={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                // 3. CHỈNH TỈ LỆ DỌC TẠI ĐÂY (QUAN TRỌNG NHẤT)
                                // Giảm width xuống để khung hình thành hình chữ nhật đứng
                                width: { xs: "60%", md: "30%" }, // Mobile: 60%, PC: 30%
                                height: "80%", // Chiều cao chiếm 80% container cha

                                cursor: "pointer",
                                zIndex: offset === 0 ? 10 : 5,
                                transformStyle: "preserve-3d",
                            }}
                        >
                            <Box
                                component="img"
                                src={img.src}
                                alt={img.alt}
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover", // Đảm bảo ảnh lấp đầy khung dọc
                                    borderRadius: "16px",
                                    boxShadow: offset === 0
                                        ? "0 25px 50px -12px rgba(0,0,0,0.5)" // Bóng đổ đậm hơn cho ảnh dọc
                                        : "0 10px 20px rgba(0,0,0,0.2)",
                                    transition: "0.3s",
                                    "&:hover": {
                                        filter: "brightness(0.9)",
                                    }
                                }}
                            />
                        </Box>
                    );
                })}
            </Box>
        </Box>
    );
}