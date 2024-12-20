import React from 'react';
import quartgem from '@/public/quartgem.svg';
import Image from 'next/image';
import rubygem from '@/public/rubygem.svg'
import ambergem from '@/public/ambergem.svg'
import emeraldgem from '@/public/emeraldgem.svg'

const cardData = [
    {
        title: 'QUART ACTIVATOR GEM',
        subtitle: '(1-500 User)',
        description: 'Create up to 1\npool/activity/ad\nper month',
        quantity: '5000pcs',
        mintInfo: 'Free mint',
        image: quartgem
    },
    {
        title: 'EMERALD ACTIVATOR GEM',
        subtitle: '(1-3000 user for each pool)',
        description: 'Create up to 4\npool/activity/ad\nper month',
        quantity: '25,000pcs',
        mintInfo: '33$',
        image: emeraldgem
    },
    {
        title: 'RUBY ACTIVATOR GEM',
        subtitle: '(1-10,000 user for each pool)',
        description: 'Create up to 8\npool/activity/ad\nper month',
        quantity: '15,000pcs',
        mintInfo: '66$',
        image: rubygem
    },
    {
        title: 'AMBER ACTIVATOR GEM',
        subtitle: '(1-15,000 user for each pool)',
        description: 'Create up to 16\npool/activity/ad\nper month',
        quantity: '10,000pcs',
        mintInfo: '99$',
        image: ambergem
    },
];


const ExclusiveNFT2 = () => {
    return (
        <div className="mt-[128px] mb-[198px] z-10 flex flex-col gap-[60px]">
            <div className="flex flex-col gap-[16px]">
                <div className="flex flex-col justify-center lg:text-start text-center items-center">
                    <h4 className="jost-bold text-[48px] text-white">
                        Exclusive NFT
                        <span className="text-[#FF00CC] sm:ml-4">Collection</span>
                    </h4>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-[40px] w-full">
                {cardData.map((card, index) => (
                    <div
                        key={index}
                        className="flex justify-center items-center flex-col rounded-[10px] bg-opacity-[17%] bg-[#1E1E26] pb-[20px] lg:rounded-0 lg:bg-transparent lg:pb-0 gap-[30px]"
                    >
                        <div className="w-full text-white pt-[49px] gap-[20px] flex flex-col pl-[29px] pb-[20px] pr-[10px] h-fit rounded-[10px] bg-opacity-[17%] bg-[#1E1E26]">
                            <h3 className="xl:text-[27px] lg:text-[25px] text-[18px] lg:text-start text-center 2xl:text-[29px] poppinsbold">{card.title}</h3>
                            <h4 className="lg:text-[20px] text-[16px] lg:text-start text-center 2xl:text-[21px] poppinsmedium">{card.subtitle}</h4>
                            <h4 className="xl:text-[27px] lg:text-[25px] text-[18px] lg:text-start text-center 2xl:text-[29px] poppinsmedium whitespace-pre-line">
                                {card.description}
                            </h4>
                            <div className="flex flex-col">
                                <h4 className="xl:text-[35px] lg:text-[28px] text-[23px] lg:text-start text-center 2xl:text-[39px] poppinssemibold">{card.quantity}</h4>
                                <h2 className="poppinsextrabold  lg:text-[35px] lg:text-[28px] text-[23px] lg:text-start text-center 2xl:text-[39px]">
                                    {card.mintInfo}
                                </h2>
                            </div>
                        </div>
                        <Image
                            className="w-[280px] h-[280px]"
                            src={card.image}
                            width={263}
                            height={263}
                            alt=""
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExclusiveNFT2;
