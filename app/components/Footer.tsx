import React from 'react';
import Image from "next/image";
import logosvg from "@/public/logo.svg";

const Footer = () => {
    return (
        <div className={'flex flex-col pb-[200px] lg:pb-[60px] gap-[30px]'}>
            <div className={'w-full flex mt-[100px] lg:flex-row flex-col items-center gap-8 lg:gap-2 justify-between'}>
                <div className={'flex flex-col items-center lg:items-start gap-[40px]'}>
                    <Image width={317} height={43} src={logosvg} alt={'activ8earth'}/>
                    <p className={'rubik-regular lg:max-w-[400px] xl:max-w-[516px]  text-white text-opacity-80 text-[20px]'}>
                        Activate Earth is a Web3 platform where you can create, join, and earn from activities. Turn your daily habits into rewards and be part of a dynamic ecosystem.                </p>
                    <div className="mt-[12px] items-center w-full justify-center lg:justify-start flex flex-row gap-[24px]">

                        <a
                            href={"https://t.me/activ8earth"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-[32px] h-[32px] rounded-[4px] flex justify-center items-center cursor-pointer border-[#696969] hover:bg-[#FF00CC] border-[1px]"
                        >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1_693)">
                                    <path d="M14.959 3.08806L12.847 13.0511C12.687 13.7541 12.272 13.9291 11.681 13.5981L8.46197 11.2261L6.90897 12.7201C6.73697 12.8921 6.59397 13.0351 6.26197 13.0351L6.49397 9.75706L12.459 4.36706C12.719 4.13606 12.403 4.00706 12.056 4.23906L4.68097 8.88306L1.50597 7.88906C0.815973 7.67306 0.802973 7.19806 1.64997 6.86706L14.069 2.08206C14.644 1.86706 15.147 2.20906 14.959 3.08806Z" fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_693">
                                        <rect width="16" height="16" fill="white" transform="translate(0 0.00708008)"/>
                                    </clipPath>
                                </defs>
                            </svg>

                        </a>
                        <a
                            href={"https://x.com/activ8earth"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-[32px] h-[32px] rounded-[4px] flex justify-center items-center cursor-pointer border-[#696969] hover:bg-[#FF00CC] border-[1px]"
                        >

                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1_700)">
                                    <g clipPath="url(#clip1_1_700)">
                                        <path d="M9.714 6.94608L15.945 0.54808H14.434L9.078 6.09808L4.879 0.50708L0.1 0.67108L6.414 8.85608L0 15.5021H1.378L7.049 9.68108L11.541 15.5021L16.016 15.3381L9.714 6.94608ZM7.761 8.95008L7.127 8.11908L2.119 1.55508L4.54 1.68608L8.408 6.79208L9.044 7.63308L14.233 14.4861L12.012 14.5191L7.761 8.95008Z" fill="white"/>
                                    </g>
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_700">
                                        <rect width="16" height="15" fill="white" transform="translate(0 0.50708)"/>
                                    </clipPath>
                                    <clipPath id="clip1_1_700">
                                        <rect width="16" height="15" fill="white" transform="translate(0 0.50708)"/>
                                    </clipPath>
                                </defs>
                            </svg>


                        </a>
                        <a
                            href={"https://x.com/activ8earth"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-[32px] h-[32px] rounded-[4px] flex justify-center items-center cursor-pointer border-[#696969] hover:bg-[#FF00CC] border-[1px]"
                        >


                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.20001 1.34033H10.8C12.9333 1.34033 14.6667 3.07367 14.6667 5.207V10.807C14.6667 11.8325 14.2593 12.816 13.5342 13.5411C12.809 14.2663 11.8255 14.6737 10.8 14.6737H5.20001C3.06668 14.6737 1.33334 12.9403 1.33334 10.807V5.207C1.33334 4.1815 1.74072 3.19799 2.46586 2.47285C3.191 1.74771 4.17451 1.34033 5.20001 1.34033ZM5.06668 2.67367C4.43016 2.67367 3.81971 2.92652 3.36962 3.37661C2.91953 3.8267 2.66668 4.43715 2.66668 5.07367V10.9403C2.66668 12.267 3.74001 13.3403 5.06668 13.3403H10.9333C11.5699 13.3403 12.1803 13.0875 12.6304 12.6374C13.0805 12.1873 13.3333 11.5769 13.3333 10.9403V5.07367C13.3333 3.747 12.26 2.67367 10.9333 2.67367H5.06668ZM11.5 3.67367C11.721 3.67367 11.933 3.76146 12.0893 3.91774C12.2455 4.07402 12.3333 4.28598 12.3333 4.507C12.3333 4.72801 12.2455 4.93997 12.0893 5.09625C11.933 5.25253 11.721 5.34033 11.5 5.34033C11.279 5.34033 11.067 5.25253 10.9108 5.09625C10.7545 4.93997 10.6667 4.72801 10.6667 4.507C10.6667 4.28598 10.7545 4.07402 10.9108 3.91774C11.067 3.76146 11.279 3.67367 11.5 3.67367ZM8.00001 4.67367C8.88407 4.67367 9.73191 5.02485 10.357 5.64998C10.9822 6.2751 11.3333 7.12294 11.3333 8.007C11.3333 8.89105 10.9822 9.7389 10.357 10.364C9.73191 10.9891 8.88407 11.3403 8.00001 11.3403C7.11596 11.3403 6.26811 10.9891 5.64299 10.364C5.01787 9.7389 4.66668 8.89105 4.66668 8.007C4.66668 7.12294 5.01787 6.2751 5.64299 5.64998C6.26811 5.02485 7.11596 4.67367 8.00001 4.67367ZM8.00001 6.007C7.46958 6.007 6.96087 6.21771 6.5858 6.59278C6.21072 6.96786 6.00001 7.47657 6.00001 8.007C6.00001 8.53743 6.21072 9.04614 6.5858 9.42121C6.96087 9.79629 7.46958 10.007 8.00001 10.007C8.53044 10.007 9.03915 9.79629 9.41422 9.42121C9.7893 9.04614 10 8.53743 10 8.007C10 7.47657 9.7893 6.96786 9.41422 6.59278C9.03915 6.21771 8.53044 6.007 8.00001 6.007Z" fill="white" fillOpacity="0.8"/>
                            </svg>
                        </a>
                        <a
                            href={"https://discord.gg/w8vQNqvmC5"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-[32px] h-[32px] rounded-[4px] flex justify-center items-center cursor-pointer border-[#696969] hover:bg-[#FF00CC] border-[1px]"
                        >


                            <svg className={'w-[20px] h-[20px]'} width="800px" height="800px" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="white"><path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" d="m68 138-8 16c-10.19-4.246-20.742-8.492-31.96-15.8-3.912-2.549-6.284-6.88-6.378-11.548-.488-23.964 5.134-48.056 19.369-73.528 1.863-3.334 4.967-5.778 8.567-7.056C58.186 43.02 64.016 40.664 74 39l6 11s6-2 16-2 16 2 16 2l6-11c9.984 1.664 15.814 4.02 24.402 7.068 3.6 1.278 6.704 3.722 8.567 7.056 14.235 25.472 19.857 49.564 19.37 73.528-.095 4.668-2.467 8.999-6.379 11.548-11.218 7.308-21.769 11.554-31.96 15.8l-8-16m-68-8s20 10 40 10 40-10 40-10"/><ellipse cx="71" cy="101" fill="#000000" rx="13" ry="15"/><ellipse cx="121" cy="101" fill="#000000" rx="13" ry="15"/></svg>
                        </a>
                        <a
                            href={"http://linkedin.com/company/activate-earth"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-[32px] h-[32px] rounded-[4px] flex justify-center items-center cursor-pointer border-[#696969] hover:bg-[#FF00CC] border-[1px]"
                        >


                            <svg className={'w-[15px] h-[15px]'} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_945_7796)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M32 32H25.6V20.8016C25.6 17.7296 24.2448 16.0156 21.8144 16.0156C19.1696 16.0156 17.6 17.8016 17.6 20.8016V32H11.2V11.2H17.6V13.5391C17.6 13.5391 19.608 10.0156 24.1328 10.0156C28.6592 10.0156 32 12.7778 32 18.493V32ZM3.9072 7.87344C1.7488 7.87344 0 6.11034 0 3.93594C0 1.76314 1.7488 0 3.9072 0C6.064 0 7.81279 1.76314 7.81279 3.93594C7.81439 6.11034 6.064 7.87344 3.9072 7.87344ZM0 32H8V11.2H0V32Z" fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_945_7796">
                                        <rect width="32" height="32" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>

                    </div>

                </div>
                <div className={'flex flex-col'}>
                    <h4 className={'jost-bold text-center z-20 text-[48px] text-white'}>
                        Join Our

                        <br className={'sm:hidden flex'}/>
                        <span className={'text-[#FF00CC] sm:ml-4'}>
                      Community
                    </span>
                    </h4>
                    <div className={'flex flex-col sm:flex-row gap-4'}>
                        <a href={"https://t.me/activ8earth"} target={"_blank"} className={'px-[40px] z-20 bg4 mt-[24px] cursor-pointer w-full text-center  sm:w-fit py-[12px] text-white rubik-medium lg:text-[16px] xl:text-[20px]'}>
                            Join us on Telegram
                        </a>
                        <a href={"https://discord.gg/w8vQNqvmC5"} target={"_blank"} className={'px-[40px] z-20 bg4 mt-[24px] cursor-pointer w-full text-center  sm:w-fit py-[12px] text-white rubik-medium lg:text-[16px] xl:text-[20px]'}>
                            Join on Discord
                        </a>
                    </div>
                </div>
            </div>
            <div className={'w-full flex lg:flex-row flex-col gap-4 justify-between items-center'}>
                <div className={'flex flex-col sm:flex-row items-center '}>
                    <h6 className={'font-light cursor-pointer text-white text-[20px]'}>
                        Privacy Policy
                    </h6>
                    <div className={'w-[1px] sm:flex hidden h-[10px] bg-white mx-8'}></div>
                    <h6 className={'font-light cursor-pointer text-white text-[20px]'}>
                       Terms of Service
                    </h6>
                    <div className={'w-[1px] sm:flex hidden h-[10px] bg-white mx-8'}></div>
                    <a href={"https://activate-whitepaper.gitbook.io/activate-whitepaper"} target={"_blank"} className={'font-light cursor-pointer text-white text-[20px]'}>
                        Whitepaper
                    </a>

                </div>
                <div className={'flex flex-row items-center '}>
                    <h6 className={'font-light cursor-pointer text-white text-[20px]'}>
                        ©2024 - All Rights Reserved by Activate Earth
                    </h6>

                </div>
            </div>
        </div>
    );
};

export default Footer;
