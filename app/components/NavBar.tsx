"use client"
import React, { useEffect, useState } from 'react';

import Image from "next/image";
import leftlogo from '@/public/leftlogo.svg'
import rightlogo from '@/public/rightlogo.svg'
import Link from "next/link";

import { motion } from "framer-motion";


const NavBar = () => {
    const [showBg, setShowBg] = useState<boolean>(false);
    useEffect(() => {
        const handleScroll = () => {
            // Sayfanın kaydırma yüksekliği (1080 piksel)
            const scrollThreshold = 500;

            if (window.scrollY > scrollThreshold) {
                setShowBg(true);
            } else {
                setShowBg(false);
            }
        };

        // Scroll eventini dinle
        window.addEventListener('scroll', handleScroll);

        // Cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className={`flex flex-row sticky ${
                showBg ? 'bg-violet3' : 'bg-transparent'
            } pb-4 top-0 left-0 w-full justify-center z-30 items-center lg:items-start lg:justify-start`}
        >            <div className={'flex md:flex-col  z-50 pt-[30px] px-4 sm:pt-[20px]  w-fit lg:w-full flex-col gap-[20px] sm:gap-[50px] lg:flex-row justify-between items-center mx-[25px]'}>
            <div className={'flex flex-row gap-1'}>
                <motion.div
                    animate={{
                        rotate: [0, 90, 180, 270, 360], // 90 derece aralıklarla döndürme
                        scale: [1, 1.1, 1], // Dönerken hafifçe büyüme

                    }}
                    transition={{
                        duration: 2, // Döngünün süresi
                        repeat: Infinity, // Sonsuz döngü
                        ease: "linear", // Sabit hız
                    }}

                >
                    <Image style={{ filter: "drop-shadow(0px 0px 20px white)" }} className="" width={69} height={43} src={leftlogo} alt="activ8earth" />
                </motion.div>
                <Image style={{ filter: "drop-shadow(0px 0px 4px white)" }} className={''} width={252} height={43} src={rightlogo} alt={'activ8earth'}/>

            </div>
                <div className={'grid grid-cols-2 xl:grid-cols-4  sm:flex flex-wrap sm:flex-nowrap justify-center justify-items-center flex-row gap-[20px] sm:gap-[48px] items-center'}>

                    <Link href={'#about'}>
                        <h6 className={'rubik-medium text-[20px] text-white'}>
                            About
                        </h6>
                    </Link>
                    <Link href={'#roadmap'}>
                        <h6 className={'rubik-medium cursor-pointer text-[20px] text-white'}>
                            Roadmap
                        </h6>
                    </Link>

                    <Link href={'#team'}>
                        <h6 className={'rubik-medium cursor-pointer text-[20px] text-white'}>
                            Team
                        </h6>
                    </Link>
                    <Link href={'#faq'}>
                        <h6 className={'rubik-medium text-[20px] text-white'}>
                            Faq
                        </h6>
                    </Link>

                </div>
                <div className={`${showBg && "hidden sm:flex"} lg:!flex sm:px-[33px] px-[24px]  cursor-pointer w-full text-center lg:w-fit py-[12px] sm:py-[16px] bg1`}>
                    <h6 className={'rubik-medium text-[14px] sm:text-[16px] text-white'}>
                        Entire The World!
                    </h6>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
