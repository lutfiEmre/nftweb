"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";


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

const CounterInfo = () => {
    const counters = [
        { value: 98, label: "Access Rate", suffix: "%" },
        { value: 1207, label: "Conversion Rate (CVR)", suffix: "%" },
        { value: 557000, label: "Users", suffix: "" },
        { value: 1.04, label: "Advertisement Volume", suffix: "B", prefix: "$" },
    ];


    const counts = [
        useCounter(98, 2),
        useCounter(1207, 2),
        useCounter(557000, 2),
        useCounter(1.04, 2),
    ];

    return (
        <div className="lg:px-[80px] 2xl:px-[160px] bg3 to-[#162447] grid justify-items-center gap-y-[50px] grid-cols-2 lg:flex justify-between lg:gap-[50px] 2xl:gap-[143px] flex-row py-[60px]">
            {counters.map((counter, index) => (
                <motion.div
                    key={index}
                    className="flex flex-row gap-[60px]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex flex-col items-center gap-[10px]">
                        <h4 className="jost-semibold md:text-[48px] text-[36px] 3xl:text-[64px] text-white">
                            {counter.prefix}
                            {counts[index].toLocaleString()}
                            {counter.suffix}
                        </h4>
                        <h6 className="rubik-regular text-opacity-80 md:text-[16px] text-[14px] 3xl:text-[20px] text-white">
                            {counter.label}
                        </h6>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default CounterInfo;
