"use client"
import React, { useEffect, useState } from 'react';

import Image from "next/image";
import logosvg from '../../public/logo.svg'
import Link from "next/link";


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
        >            <div className={'pt-[40px] flex md:flex-col z-50 w-fit lg:w-full flex-col gap-[50px] lg:flex-row justify-between items-center mx-[25px]'}>
                <Image width={317} height={43} src={logosvg} alt={'activ8earth'}/>
                <div className={'grid grid-cols-2 xl:grid-cols-4  sm:flex flex-wrap sm:flex-nowrap justify-center flex-row gap-[48px] items-center'}>

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
                <div className={'px-[33px]  cursor-pointer w-full text-center lg:w-fit py-[16px] bg1'}>
                    <h6 className={'rubik-medium text-[16px] text-white'}>
                        Entire The World!
                    </h6>
                </div>
            </div>
        </div>
    );
};

export default NavBar;