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

                        <span className={'text-[#FF00CC] sm:ml-4'}>
                       Milestones
                    </span>
                    </h4>
                </div>
                <p className={'rubik-regular text-center text-white text-opacity-80 text-[20px]'}>Our Roadmap highlights key milestones, from platform launch and Web3 integration to ACT8 tokens and Activator Gems NFTs. Stay tuned for exciting updates!
                </p>
            </div>
            <div className={'flex flex-col gap-8 sm:gap-0  mt-[50px]'}>
                <div className={'  gap-[64px] flex flex-row '}>
                    <div className={'w-[552px] mt-1 hidden sm:flex flex-col h-4'}></div>
                    <div className={'flex flex-col items-center'}>
                        <h6 className={'jost-semibold text-white text-[48px]'}>
                            01

                        </h6>
                         <div  style={{
                            boxShadow: '0 0 15px 5px #FF00CC',
                            borderRadius: '2px',
                        }} className={'w-[4px] h-[169px] bg-[#FF00CC]'}></div>
                    </div>
                    <div className={'w-[552px] mt-1 flex flex-col h-4'}>
                        <h3 className={'jost-semibold text-white text-[36px]'}>
                            Feb 03, 2025
                        </h3>
                        <h6 className={'inter-semibold text-[18px] text-[#FF00CC]'}>
                            Platform Launch
                        </h6>
                        <p className={'rubik-regular text-[16px]  text-white text-opacity-90'}>
                            Research the existing NFT platforms and blockchains to
                            choose the most suitable one for your project (e.g.,
                            Ethereum, Binance Smart Chain, Flow, etc.).
                        </p>
                    </div>
                </div>
                <div className={'  gap-[64px] flex flex-row-reverse '}>
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
                        <h3 className={'jost-semibold text-white text-[36px]'}>
                            June 12, 2025
                        </h3>
                        <h6 className={'inter-semibold text-[18px] text-[#FF00CC]'}>
                            Community Growth
                        </h6>
                        <p className={'rubik-regular text-[16px] text-end  text-white text-opacity-90'}>
                            Hire or collaborate with blockchain developers to create
                            the smart contract that governs your NFT coin. This
                            smart contract will define the NFTs properties.
                        </p>
                    </div>
                </div>
                <div className={'  gap-[64px] flex flex-row '}>
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
                            Aug 17, 2025
                        </h3>
                        <h6 className={'inter-semibold text-[18px] text-[#FF00CC]'}>
                            Enhanced Security
                        </h6>
                        <p className={'rubik-regular text-[16px]  text-white text-opacity-90'}>
                            Hire or collaborate with blockchain developers to create
                            the smart contract that governs your NFT coin. This
                            smart contract will define the NFTs properties.
                        </p>
                    </div>
                </div>
                <div className={'  gap-[64px] flex flex-row-reverse '}>
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
                        <h3 className={'jost-semibold text-white text-[36px]'}>
                            Jan 01, 2026
                        </h3>
                        <h6 className={'inter-semibold text-[18px] text-[#FF00CC]'}>
                            Scalability Solutions
                        </h6>
                        <p className={'rubik-regular text-end text-[16px]  text-white text-opacity-90'}>
                            Determine the total supply of your NFT coins and
                            whether there will be any limited editions.
                        </p>
                    </div>
                </div>
                <div className={'  gap-[64px] flex flex-row '}>
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
                            Mar 15, 2026
                        </h3>
                        <h6 className={'inter-semibold text-[18px] text-[#FF00CC]'}>
                            Governance Implementation
                        </h6>
                        <p className={'rubik-regular text-[16px]  text-white text-opacity-90'}>
                            Deploy your NFT smart contract on the chosen
                            blockchain, ensuring it complies with security
                            standards.
                        </p>
                    </div>
                </div>
                <div className={'  gap-[64px] flex flex-row-reverse '}>
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
                        <h3 className={'jost-semibold text-white text-[36px]'}>
                            Dec 13, 2027
                        </h3>
                        <h6 className={'inter-semibold text-[18px] text-[#FF00CC]'}>
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
