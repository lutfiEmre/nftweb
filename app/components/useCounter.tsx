"use client"
import {useEffect, useState} from "react";


const useCounter = (endValue: number, duration: number) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = endValue / (duration * 60); // Frames per second (60fps)

        const counterInterval = setInterval(() => {
            start += increment;
            if (start >= endValue) {
                clearInterval(counterInterval);
                setCount(endValue);
            } else {
                setCount(Math.floor(start));
            }
        }, 1000 / 60); // 60fps

        return () => clearInterval(counterInterval);
    }, [endValue, duration]);

    return count;
};

export default useCounter