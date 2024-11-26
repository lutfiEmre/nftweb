import React from 'react';

const CounterInfo = () => {
    return (
        <div className="lg:px-[80px] 2xl:px-[160px] bg3 grid justify-items-center gap-y-[50px] grid-cols-2 lg:flex justify-between lg:gap-[50px] 2xl:gap-[143px] flex-row py-[60px]">
            <div className={'flex flex-row gap-[60px]'}>
                <div className={'flex flex-col items-center gap-[0px]'}>
                    <h4 className={'jost-semibold  md:text-[48px] text-[36px] 3xl:text-[64px] text-white'}>
                        98%
                    </h4>
                    <h6 className={'rubik-regular text-opacity-60 md:text-[16px] text-[14px] 3xl:text-[20px] text-white'}>
                        Access Rate
                    </h6>
                </div>
                <div className={'w-[1px] lg:flex hidden h-full bg-opacity-60 bg-[#FF00CC]'}></div>
            </div>
            <div className={'flex flex-row gap-[60px]'}>
                <div className={'flex flex-col items-center gap-[0px]'}>
                    <h4 className={'jost-semibold md:text-[48px] text-[36px] 3xl:text-[64px] text-white'}>
                        1207%
                    </h4>
                    <h6 className={'rubik-regular text-opacity-60 md:text-[16px] text-[14px] 3xl:text-[20px] text-white'}>
                        Conversion Rate (CVR)
                    </h6>
                </div>
                <div className={'w-[1px] lg:flex hidden h-full bg-opacity-60 bg-[#FF00CC]'}></div>
            </div>
            <div className={'flex flex-row gap-[60px]'}>
                <div className={'flex flex-col items-center gap-[0px]'}>
                    <h4 className={'jost-semibold md:text-[48px] text-[36px] 3xl:text-[64px] text-white'}>
                       557.000
                    </h4>
                    <h6 className={'rubik-regular text-opacity-60 md:text-[16px] text-[14px] 3xl:text-[20px] text-white'}>
                        Users
                    </h6>
                </div>
                <div className={'w-[1px] lg:flex hidden h-full bg-opacity-60 bg-[#FF00CC]'}></div>
            </div>
            <div className={'flex flex-row gap-[60px]'}>
                <div className={'flex flex-col items-center gap-[0px]'}>
                    <h4 className={'jost-semibold md:text-[48px] text-[36px] 3xl:text-[64px] text-white'}>
                        $1.04B
                    </h4>
                    <h6 className={'rubik-regular text-opacity-60 md:text-[16px] text-[14px] 3xl:text-[20px] text-white'}>
                        Advertisement Volume
                    </h6>
                </div>

            </div>

        </div>
    );
};

export default CounterInfo;
