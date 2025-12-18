import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

function AnimatedList({
    className,
    children,
    delay = 0.1,
    initial = { opacity: 0, y: 20 },
    animate = { opacity: 1, y: 0 },
    exit = { opacity: 0, y: 20 },
    transition = { type: 'spring', stiffness: 260, damping: 20 }
}) {
    const items = React.Children.toArray(children);

    return (
        <div className={className} style={{ width: '100%' }}>
            {items.map((child, index) => (
                <motion.div
                    key={child.key || index}
                    initial={initial}
                    animate={animate}
                    exit={exit}
                    transition={{
                        ...transition,
                        delay: index * delay,
                    }}
                    style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex'
                    }}
                >
                    {child}
                </motion.div>
            ))}
        </div>
    );
}

export default AnimatedList;