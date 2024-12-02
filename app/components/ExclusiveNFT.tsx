import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";
import nft1 from '../../public/nft1.svg'
import nft2 from '../../public/nft2.svg'
import nft3 from '../../public/nft3.svg'
import nft4 from '../../public/nft4.svg'

const ExclusiveNFT = () => {
    return (
        <div className={'mt-[128px] mb-[198px] flex flex-col gap-[60px]'}>
            <div className={'flex flex-col gap-[16px]'}>
                <div className={'flex flex-col justify-center text-center items-center'}>
                    <h4 className={'jost-bold text-[48px] text-white'}>
                        Exclusive NFT

                        <span className={'text-[#FF00CC] sm:ml-4'}>
                        Collection
                    </span>
                    </h4>
                </div>
                <p className={'rubik-regular text-center text-white text-opacity-80 text-[20px]'}>
                    XYCoin is creating a one-of-a-kind way to experience NFTs.
                </p>
            </div>
            <div className={'w-full text-white'}>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    breakpoints={{

                        640: {
                            slidesPerView: 1.5,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2.5,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3.3,
                            spaceBetween: 40,
                        },
                    }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <div className={'flex flex-col gap-[24px]'}>
                            <Image className={'rounded-[12px] w-full h-full'} width={346} height={347} src={nft1} alt={"activ8earth"}/>
                            <div className={'flex flex-col justify-center items-center gap-[15.4px]'}>
                                <h4 className={'xrubik-medium text-[24px] text-white text-center'}>
                                    The Pepe World
                                </h4>
                                <h5 className={'inter-regular text-opacity-80 opacity-80 text-[16px]'}>
                                    #1234
                                </h5>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={'flex flex-col gap-[24px]'}>
                            <Image className={'rounded-[12px] w-full h-full'} width={346} height={347} src={nft2} alt={"activ8earth"}/>
                            <div className={'flex flex-col justify-center items-center gap-[15.4px]'}>
                                <h4 className={'xrubik-medium text-[24px] text-white text-center'}>
                                    Slippery Worms
                                </h4>
                                <h5 className={'inter-regular text-opacity-80 opacity-80 text-[16px]'}>
                                    #1234
                                </h5>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={'flex flex-col gap-[24px]'}>
                            <Image className={'rounded-[12px] w-full h-full'} width={346} height={347} src={nft3} alt={"activ8earth"}/>
                            <div className={'flex flex-col justify-center items-center gap-[15.4px]'}>
                                <h4 className={'xrubik-medium text-[24px] text-white text-center'}>
                                    ARB AXOLOTL
                                </h4>
                                <h5 className={'inter-regular text-opacity-80 opacity-80 text-[16px]'}>
                                    #1234
                                </h5>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={'flex flex-col gap-[24px]'}>
                            <Image className={'rounded-[12px] w-full h-full'} width={346} height={347} src={nft4} alt={"activ8earth"}/>
                            <div className={'flex flex-col justify-center items-center gap-[15.4px]'}>
                                <h4 className={'xrubik-medium text-[24px] text-white text-center'}>

                                    ASDX PRIME
                                </h4>
                                <h5 className={'inter-regular text-opacity-80 opacity-80 text-[16px]'}>
                                    #1234
                                </h5>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={'flex flex-col gap-[24px]'}>
                            <Image className={'rounded-[12px] w-full h-full'} width={346} height={347} src={nft1} alt={"activ8earth"}/>
                            <div className={'flex flex-col justify-center items-center gap-[15.4px]'}>
                                <h4 className={'xrubik-medium text-[24px] text-white text-center'}>
                                    EmreLutfi NFT :)
                                </h4>
                                <h5 className={'inter-regular text-opacity-80 opacity-80 text-[16px]'}>
                                    #1234
                                </h5>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>

        </div>
    );
};

export default ExclusiveNFT;
