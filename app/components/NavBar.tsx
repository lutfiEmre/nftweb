import React from 'react';
import Image from "next/image";
import logosvg from '../../public/logo.svg'


const NavBar = () => {
    return (
        <div className={'flex flex-row w-full justify-center items-center lg:items-start lg:justify-start'}>
            <div className={'pt-[40px] flex md:flex-col w-fit lg:w-full flex-col gap-[50px] lg:flex-row justify-between items-center mx-[25px]'}>
                <Image width={317} height={43} src={logosvg} alt={'activ8earth'}/>
                <div className={'grid grid-cols-2 xl:grid-cols-4  sm:flex flex-wrap sm:flex-nowrap justify-center flex-row gap-[48px] items-center'}>
                    <h6 className={'rubik-medium text-[20px] text-white'}>
                        About
                    </h6>
                    <h6 className={'rubik-medium text-[20px] text-white'}>
                        Roadmap
                    </h6>
                    <h6 className={'rubik-medium text-[20px] text-white'}>
                        Team
                    </h6>
                    <h6 className={'rubik-medium text-[20px] text-white'}>
                        Faq
                    </h6>
                </div>
                <div className={'px-[33px] w-full text-center lg:w-fit py-[16px] bg1'}>
                    <h6 className={'rubik-medium text-[16px] text-white'}>
                        Entire The World!
                    </h6>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
