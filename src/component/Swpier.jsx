import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);
    return isMobile;
};

const transitionSpec = { type: "spring", stiffness: 180, damping: 25, mass: 1 };

const Poster3DSwiper = ({
    images = [],
    autoPlayDelay = 6000,
    height = 550,
    onActiveChange
}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const isMobile = useIsMobile();

    // Báo cho component cha biết khi activeIndex thay đổi
    useEffect(() => {
        if (onActiveChange) {
            onActiveChange(activeIndex);
        }
    }, [activeIndex, onActiveChange]);

    const cardWidth = isMobile ? "70vw" : height * 0.65;
    const cardHeight = isMobile ? "450px" : height * 0.9;
    const containerHeight = isMobile ? "500px" : height;

    const variants = useMemo(() => {
        const xOffset = isMobile ? "55%" : "60%";
        const scaleSide = isMobile ? 0.8 : 0.85;

        return {
            center: { x: 0, y: 0, z: 0, scale: 1.05, rotateY: 0, zIndex: 10, opacity: 1, filter: "brightness(100%) blur(0px)", boxShadow: "0px 25px 50px -12px rgba(0,0,0,0.35)", transition: transitionSpec },
            left: { x: `-${xOffset}`, y: 0, z: -100, scale: scaleSide, rotateY: 35, zIndex: 5, opacity: 0.8, filter: "brightness(85%) blur(2px)", boxShadow: "0px 15px 30px rgba(0,0,0,0.2)", transition: transitionSpec },
            right: { x: xOffset, y: 0, z: -100, scale: scaleSide, rotateY: -35, zIndex: 5, opacity: 0.8, filter: "brightness(85%) blur(2px)", boxShadow: "0px 15px 30px rgba(0,0,0,0.2)", transition: transitionSpec },
            hiddenLeft: { x: "-120%", y: 0, z: -200, scale: 0.5, rotateY: 60, zIndex: 1, opacity: 0, filter: "brightness(50%) blur(10px)", transition: transitionSpec },
            hiddenRight: { x: "120%", y: 0, z: -200, scale: 0.5, rotateY: -60, zIndex: 1, opacity: 0, filter: "brightness(50%) blur(10px)", transition: transitionSpec },
        };
    }, [isMobile]);

    // --- PHẦN ĐÃ SỬA ---
    useEffect(() => {
        if (images.length === 0) return;

        // Tạo timer mới
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % images.length);
        }, autoPlayDelay);

        // Hủy timer cũ mỗi khi activeIndex thay đổi
        return () => clearInterval(interval);

    }, [images.length, autoPlayDelay, activeIndex]); // <--- Đã thêm activeIndex vào đây
    // -------------------

    const handleImageClick = (index) => {
        if (index !== activeIndex) setActiveIndex(index);
        // Khi setActiveIndex chạy, useEffect bên trên sẽ tự động reset timer
    };

    const getPosition = (index) => {
        const len = images.length;
        let offset = (index - activeIndex + len) % len;
        if (offset > len / 2) offset -= len;
        if (offset === 0) return "center";
        if (offset === -1) return "left";
        if (offset === 1) return "right";
        return offset < 0 ? "hiddenLeft" : "hiddenRight";
    };

    return (
        <div style={{ height: containerHeight, width: "100%", position: "relative", display: "flex", justifyContent: "center", alignItems: "center", perspective: "1200px" }}>
            {images.map((src, index) => {
                const position = getPosition(index);
                return (
                    <motion.div
                        key={index}
                        initial="hiddenRight"
                        animate={position}
                        variants={variants}
                        onClick={() => handleImageClick(index)}
                        style={{
                            position: "absolute", width: cardWidth, height: cardHeight, borderRadius: "20px",
                            cursor: position === "center" ? "default" : "pointer",
                            pointerEvents: position.includes("hidden") ? "none" : "auto",
                            backgroundColor: "#fff", overflow: "hidden"
                        }}
                    >
                        <img src={src} alt={`Poster ${index}`} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", userSelect: "none", WebkitUserDrag: "none" }} />
                        <motion.div animate={{ opacity: position === 'center' ? 0 : 0.3 }} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: '#000', pointerEvents: 'none' }} />
                    </motion.div>
                );
            })}
        </div>
    );
};

export default Poster3DSwiper;