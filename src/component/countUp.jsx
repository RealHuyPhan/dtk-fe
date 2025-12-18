import { useEffect, useRef } from "react";

const CountUp = ({
    to,
    from = 0,
    duration = 2,
    separator = ",",
    decimals = 0,
    decimal = ".",
    className = "",
    onEnd,
}) => {
    const nodeRef = useRef();
    const startTimeRef = useRef(null);
    const startValueRef = useRef(from);

    const easeOutExpo = (t) => {
        return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    };

    useEffect(() => {
        startValueRef.current = from;
    }, [from]);

    useEffect(() => {
        const node = nodeRef.current;
        if (!node) return;

        startTimeRef.current = null;
        const startValue = startValueRef.current;
        const endValue = Number(to);

        let animationFrameId;

        const update = (timestamp) => {
            if (!startTimeRef.current) startTimeRef.current = timestamp;

            const progress = timestamp - startTimeRef.current;
            const durationMs = duration * 1000;

            const timeFraction = Math.min(progress / durationMs, 1);

            const easedProgress = easeOutExpo(timeFraction);

            const currentVal = startValue + (endValue - startValue) * easedProgress;

            const formattedFixed = currentVal.toFixed(decimals);

            let [integerPart, decimalPart] = formattedFixed.split(".");

            if (separator) {
                integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
            }

            node.textContent = decimalPart
                ? `${integerPart}${decimal}${decimalPart}`
                : integerPart;

            if (timeFraction < 1) {
                animationFrameId = requestAnimationFrame(update);
            } else {
                startValueRef.current = endValue;
                if (onEnd) onEnd();
            }
        };

        animationFrameId = requestAnimationFrame(update);

        return () => cancelAnimationFrame(animationFrameId);
    }, [to, duration, separator, decimals, decimal, onEnd]);

    return <span ref={nodeRef} className={className} />;
};

export default CountUp;
// sample usage:
// <CountUp
//     key={balance?.balance}
//     from={0}
//     to={balance?.balance ?? 0}
//     separator=","
//     direction="up"
//     duration={1}
//     className="counter-animation"
// />