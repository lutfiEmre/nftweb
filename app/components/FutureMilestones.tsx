import React from 'react';
import Image from "next/image";

import gradientbro2 from '@/public/gradientblur2.svg'

const FutureMilestones = () => {
    return (
        <div id={"roadmap"} className={'pt-[128px] relative flex flex-col gap-[60px]'}>
            <div className="absolute left-[-250px] -z-10 top-0">
                <Image
                    className="w-[400px] h-auto"
                    width={679}
                    height={679}
                    src={gradientbro2}
                    alt=""
                />
            </div>
            <div className={'flex flex-col gap-[16px]'}>
                <div className={'flex flex-col justify-center text-center items-center'}>
                    <h4 className={'jost-bold text-[48px] text-white'}>
                        Future
                        <br className={'sm:hidden flex'}/>
                        <span className={'text-[#FF00CC] sm:ml-4'}>
                       Milestones
                    </span>
                    </h4>
                </div>
                <p className={'rubik-regular text-center text-white text-opacity-80 text-[20px]'}>Our Roadmap highlights key milestones, from platform launch and Web3 integration to ACT8 tokens and Activator Gems NFTs. Stay tuned for exciting updates!
                </p>
            </div>
            <div className={'flex flex-col gap-[50vw] sm:gap-[90px]  sm:gap-0  mt-[50px]'}>
                <div className={'  gap-[30px] sm:gap-[64px]  flex flex-row '}>
                    <div className={'w-[552px] mt-1 hidden sm:flex flex-col h-4'}></div>
                    <div className={'flex flex-col items-center'}>
                        <h6 className={'jost-semibold    text-white text-[48px]'}>
                            01

                        </h6>
                         <div  style={{
                            boxShadow: '0 0 15px 5px #FF00CC',
                            borderRadius: '2px',
                        }} className={'w-[4px] h-[169px] bg-[#FF00CC]'}></div>
                    </div>
                    <div className={'w-[552px] mt-1 flex flex-col h-4'}>
                        <h3 className={'jost-semibold text-white text-[36px]'}>
                            2023 H2
                        </h3>
                        <h6 className={'inter-semibold text-[18px] text-[#FF00CC]'}>
                            The birth & transformation of the idea

                        </h6>
                        <p className={'rubik-regular text-[16px]  text-white text-opacity-90'}>
                            Business plan development

                        </p>
                    </div>
                </div>
                <div className={'  gap-[30px] sm:gap-[64px]  flex flex-row-reverse '}>
                    <div className={'w-[552px] mt-1 hidden sm:flex flex-col h-4'}></div>
                    <div className={'flex flex-col items-center'}>
                        <h6 className={'jost-semibold text-white text-[48px]'}>
                            02

                        </h6>
                         <div  style={{
                            boxShadow: '0 0 15px 5px #FF00CC',
                            borderRadius: '2px',
                        }} className={'w-[4px] h-[169px] bg-[#FF00CC]'}></div>
                    </div>
                    <div className={'w-[552px] mt-1 flex flex-col h-4'}>
                        <h3 className={'jost-semibold text-end   text-white text-[36px]'}>
                            2024 H1

                        </h3>
                        <h6 className={'inter-semibold text-end   text-[18px] text-[#FF00CC]'}>
                            Research and Strategic Planning

                        </h6>
                        <p className={'rubik-regular text-[16px] text-end  text-white text-opacity-90'}>
                            Detailed market research on Web3 technology, gamification, and NFT integration has been conducted.

                            User segmentation and target audience analysis have been completed.
                            Competitive analysis has been carried out to identify differentiating features.

                        </p>
                    </div>
                </div>
                <div className={'  gap-[30px] sm:gap-[64px]  flex flex-row '}>
                    <div className={'w-[552px] mt-1 hidden sm:flex flex-col h-4'}></div>
                    <div className={'flex flex-col items-center'}>
                        <h6 className={'jost-semibold text-white text-[48px]'}>
                            03

                        </h6>
                         <div  style={{
                            boxShadow: '0 0 15px 5px #FF00CC',
                            borderRadius: '2px',
                        }} className={'w-[4px] h-[169px] bg-[#FF00CC]'}></div>
                    </div>
                    <div className={'w-[552px] mt-1 flex flex-col h-4'}>
                        <h3 className={'jost-semibold text-white text-[36px]'}>
                            2024 H2

                        </h3>
                        <h6 className={'inter-semibold text-[18px] text-[#FF00CC]'}>
                            V0 Launch and Initial User Experience

                        </h6>
                        <p className={'rubik-regular text-[16px]  text-white text-opacity-90'}>
                            Activity-based NFT rewards have been designed.
                            Preparation of a free NFT collection for early users.
                            <br/>
                            <br/>
                            Mini activities: Clicking logos/buttons, watching videos, listening to podcasts, reading articles, etc.
                            A system where users earn rewards by participating in activities.

                        </p>
                    </div>
                </div>
                <div className={'  gap-[30px] sm:gap-[64px]  flex flex-row-reverse '}>
                    <div className={'w-[552px] mt-1 hidden sm:flex flex-col h-4'}></div>
                    <div className={'flex flex-col items-center'}>
                        <h6 className={'jost-semibold text-white text-[48px]'}>
                            04

                        </h6>
                       
                         <div  style={{
                            boxShadow: '0 0 15px 5px #FF00CC',
                            borderRadius: '2px',
                        }} className={'w-[4px] h-[169px] bg-[#FF00CC]'}></div>
                    </div>
                    <div className={'w-[552px] mt-1 flex flex-col h-4'}>
                        <h3 className={'jost-semibold text-end   text-white text-[36px]'}>
                            2025 Q1-Q2
                        </h3>
                        <h6 className={'inter-semibold text-end   text-[18px] text-[#FF00CC]'}>
                            User Growth and New Features

                        </h6>
                        <p className={'rubik-regular text-end text-[16px]  text-white text-opacity-90'}>
                            Global Launch
                            <br/>
                            Partnership Agreements
                            <br/>
                            Expanding the international user base with multi-language support.
                            <br/>
                            Regional reward pools and local community events.

                        </p>
                    </div>
                </div>
                <div className={'  gap-[30px] sm:gap-[64px]  flex flex-row '}>
                    <div className={'w-[552px] mt-1 hidden sm:flex flex-col h-4'}></div>
                    <div className={'flex flex-col items-center'}>
                        <h6 className={'jost-semibold text-white text-[48px]'}>
                            05

                        </h6>
                         <div  style={{
                            boxShadow: '0 0 15px 5px #FF00CC',
                            borderRadius: '2px',
                        }} className={'w-[4px] h-[169px] bg-[#FF00CC]'}></div>
                    </div>
                    <div className={'w-[552px] mt-1 flex flex-col h-4'}>
                        <h3 className={'jost-semibold text-white text-[36px]'}>
                            2025 Q3
                        </h3>
                        <h6 className={'inter-semibold text-[18px] text-[#FF00CC]'}>
                            Ecosystem Strengthening and Monetization

                        </h6>
                        <p className={'rubik-regular text-[16px]  text-white text-opacity-90'}>
                            Enabling brands to create tasks on the platform.
                            <br/>
                            Contributing to advertiser/user reward pools from ad revenues.
                            <br/>
                            Platform updates through community votes.
                            <br/>
                            Sponsorships for user-organized events.

                        </p>
                    </div>
                </div>
                <div className={'  gap-[30px] sm:gap-[64px]  flex flex-row-reverse '}>
                    <div className={'w-[552px] mt-1 hidden sm:flex flex-col h-4'}></div>
                    <div className={'flex flex-col items-center'}>
                        <h6 className={'jost-semibold text-white text-[48px]'}>
                            06

                        </h6>
                         <div  style={{
                            boxShadow: '0 0 15px 5px #FF00CC',
                            borderRadius: '2px',
                        }} className={'w-[4px] h-[169px] bg-[#FF00CC]'}></div>
                    </div>
                    <div className={'w-[552px] mt-1 flex flex-col h-4'}>
                        <h3 className={'jost-semibold text-end   text-white text-[36px]'}>
                            2025 Q4
                        </h3>
                        <h6 className={'inter-semibold text-end   text-[18px] text-[#FF00CC]'}>
                            Integration Partnerships
                        </h6>
                        <p className={'rubik-regular text-[16px] text-end  text-white text-opacity-90'}>
                            Define metadata standards for NFTs to store relevant
                            information such as title, description, image, and
                            creator details.
                        </p>
                    </div>
                </div>




            </div>


        </div>
    );
};

export default FutureMilestones;
