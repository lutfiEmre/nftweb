"use client"
import React from "react";
import { motion } from "framer-motion";
import circular from "../../public/circular.svg";
import container from "../../public/container.svg";
import Image from "next/image";

const TurnLife = () => {
    return (
        <div className={" ml-[10vw] 3xl:ml-0 pb-[150px] xl:ml-[15vw] flex flex-col-reverse lg:flex-row 3xl:justify-center justify-start items-center gap-[0px] xl:gap-[50px] 3xl:gap-[100px] 2xl:gap-[100px] mt-[7vw]"}>
            <div className={"flex flex-col gap-[40px]"}>
                <h4 className={"jost-bold leading-[1.2em] text-white sm:text-start text-center 3xl:text-[96px] text-[64px] lg:text-[50px] 2xl:text-[72px]"}>
                    TURN LIFE
                    <br />
                    INTO THE <span className={"text-[#FF00CC]"}>GAME</span>
                </h4>
                <h6 className={"rubik-regular text-[20px] lg:text-[20px] 3xl:text-[35px]  2xl:text-[24px] text-white lg:w-[450px] 3xl:w-[900px] 2xl:w-[685px]"}>
                    Welcome to Activate Earth—a groundbreaking platform for brands,
                    businesses, and creatives! As pioneers in experience-based
                    advertising, we help you tell your story interactively and
                    immersively. Make your campaigns unforgettable with Activate Earth.
                </h6>
                <div className={"py-[22px] w-fit px-[20.5px] bg2"}>
                    <h6 className={"rubik-medium text-[16px] text-white"}>
                        Join to Activ8earth
                    </h6>
                </div>
            </div>
            <div className={"relative 3xl:scale-[90%] w-full sm:w-fit overflow-hidden sm:overflow-visible justify-center flex items-center lg:scale-75 lg:-mt-[125px]"}>
                {/* Ana animasyon */}
                <motion.div
                    className={" w-[150px] lg:w-[347px] relative"}
                    animate={{
                        y: [0, -20, 0, 20, 0], // Dalgalı hareket yukarı-aşağı
                        rotate: [0, -5, 5, -5, 0], // Hafif dönme
                        scale: [1, 1.05, 1], // Hafif büyüme ve küçülme
                        opacity: [1, 0.9, 1], // Yumuşak opaklık değişimi
                    }}
                    transition={{
                        duration: 6, // 6 saniyede tamamlanır
                        repeat: Infinity, // Sonsuz döngü
                        ease: "easeInOut",
                    }}
                >
                    {/* Ekstra efektler için ikinci animasyon katmanı */}
                    <motion.div
                        className={"absolute inset-0 blur-sm"}
                        animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 360], // Tam 360 derece döngü
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        <Image
                            className={
                                " w-[350px] lg:w-[600px]  h -[350px] lg:h-[500px] object-cover opacity-90 absolute left-[-50px] top-[15%]"
                            }
                            width={286}
                            height={334}
                            src={circular}
                            alt={""}
                        />
                    </motion.div>

                    {/* Ana görüntü */}
                    <Image
                        className={"w-[347px]"}
                        width={347}
                        height={715}
                        src={container}
                        alt={""}
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default TurnLife;
