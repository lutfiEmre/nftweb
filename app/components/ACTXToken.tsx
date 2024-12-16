"use client"
import React from 'react';
import activintro from '@/public/activintro.svg'
import Image from "next/image";
import linaerbg from '@/public/linearbg.svg'

const ACTXToken = () => {
    return (
        <div className="mt-[150px] gap-[100px] xl:gap-[50px] justify-between items-center flex flex-col-reverse xl:flex-row">
            <div className={'flex flex-col w-full xl:max-w-[50%] gap-16'}>
                <div
                    className={'w-full relative flex gap-[15px]  flex-col px-[50px] py-[40px] bg5 h-fit bg-opacity-[13%] bg-[#1E1E26] rounded-[26px]'}>
                    <h4 className={'poppinsbold text-[36px] text-white'}>
                        ACTX Token
                    </h4>
                    <h6 className={'poppinsmedium text-[16px] text-white'}>
                        Functions as an advertising credit and reward system.
                    </h6>
                    <Image className={'absolute top-0 rounded-[26px] opacity-50 left-[0px] w-full h-full'} src={linaerbg} width={866} height={400} alt={''}/>
                </div>
                <div
                    className={'w-full relative flex gap-[15px] flex-col px-[50px] py-[40px] bg5 h-fit bg-opacity-[13%] bg-[#1E1E26] rounded-[26px]'}>
                    <h4 className={'poppinsbold text-[36px] text-white'}>
                        Use of NFT and Crypto
                    </h4>
                    <h6 className={'poppinsmedium text-[16px] text-white'}>
                        Enables value sharing between advertisers, community members and users.
                    </h6>
                    <Image className={'absolute top-0 rounded-[26px] opacity-50 left-[0px] w-full h-full'} src={linaerbg} width={866} height={400} alt={''}/>

                </div>
                <div
                    className={'w-full relative flex gap-[21px] flex-col px-[50px] py-[40px] bg5 h-fit bg-opacity-[13%] bg-[#1E1E26] rounded-[26px]'}>
                    <h4 className={'poppinsbold text-[36px] text-white'}>
                        Impact
                    </h4>
                    <h6 className={'poppinsmedium text-[24px] text-white'}>
                        Combines active advertising with sustainability and social responsibility.
                    </h6>
                    <Image className={'absolute top-0 rounded-[26px] opacity-50 right-[0px] w-full h-full'} src={linaerbg} width={866} height={400} alt={''}/>

                </div>
            </div>
            <div className={'relative'}>
                <div className={'w-[300px] sm:w-[450px]  rounded-[30px] h-[300px] sm:h-[450px] flex justify-center items-center'}>
                    <Image className={'rounded-[30px] absolute top-0 left-0'} src={activintro} width={586} height={586}
                           alt={''}/>
                </div>
                <div
                    className={'absolute w-full  bg-[#4A4F53] bg-opacity-[6%] rounded-[30px] h-full -bottom-6 -right-6'}>

                </div>
                <div
                    className={'absolute w-full  bg-[#4A4F53] bg-opacity-[5%] rounded-[30px] h-full -bottom-12 -right-12'}>

                </div>
            </div>
        </div>
    );
};

export default ACTXToken;
