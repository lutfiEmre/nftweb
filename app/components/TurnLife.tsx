"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import circular from "../../public/circular.svg";
import container from "../../public/container.svg";

const TurnLife = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    const containerStyle = {
        y: scrollY / 5,
        opacity: 1 - scrollY / 650,
    };

    const explosionVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: (custom: number) => ({
            scale: [0, 1.5, 1],
            opacity: [0, 1, 0],
            transition: {
                delay: custom * 0.2,
                duration: 1,
            },
        }),
    };

    return (
        <div className="min-h-[70vh] flex flex-col-reverse  mb-[100px] lg:flex-row justify-center items-center gap-[100px] xl:gap-[150px]   lg:mt-[1vw] 2xl:mt-[2vw]">
            <div className="flex flex-col gap-[40px]">
                <motion.h4
                    className="jost-bold leading-[1.2em] text-white sm:text-start text-center text-[64px] lg:text-[50px]"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    TURN LIFE
                    <br />
                    INTO THE <span className="text-[#FF00CC]">GAME</span>
                </motion.h4>
                <motion.h6
                    className="rubik-regular text-[20px] lg:text-[20px] text-white lg:w-[450px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    Welcome to Activate Earth—a groundbreaking platform for brands,
                    businesses, and creatives! Make your campaigns unforgettable with
                    Activate Earth.
                </motion.h6>
                <motion.div
                    className="py-[22px] w-full text-center md:w-fit px-[20.5px] bg2 cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <h6 className="rubik-medium text-[16px] text-white">Join to Activ8earth</h6>
                </motion.div>
            </div>


            <div className="relative  w-fit flex justify-center items-center">

                <motion.div
                    className="absolute z-20 w-[150px] lg:w-[400px] lg:h-[400px] 2xl:w-[600px] h-[250px] 2xl:h-[500px] object-cover"
                    animate={{
                        rotate: [0, 360],
                        x: [-100, -50, 0, -50, -100],
                        y: [-100, -50, 0, -50, -100],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    <Image
                        src={circular}
                        alt="Circular"
                        width={350}
                        height={350}
                        className="opacity-90 "
                    />
                </motion.div>


                <motion.div
                    className="relative w-[200px] lg:w-[347px]"
                    style={containerStyle}
                >
                    <Image
                        src={container}
                        alt="Container"
                        width={347}
                        height={715}
                    />
                </motion.div>


                {[...Array(5)].map((_, index) => (
                    <motion.div
                        key={index}
                        className="absolute mt-[500px] bg-[#FF00CC] rounded-full"
                        style={{
                            width: `${30 + index * 10}px`,
                            height: `${30 + index * 10}px`,
                            top: `${50 + index * 20}px`,
                            left: `${50 + index * 30}px`,
                        }}
                        custom={index}
                        variants={explosionVariants}
                        initial="hidden"
                        animate={scrollY > 300 ? "visible" : "hidden"}
                    />
                ))}
            </div>
        </div>
    );
};

export default TurnLife;
