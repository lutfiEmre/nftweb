import React from 'react';
import questmark from '../../public/questmark.svg'
import gradientradial from '../../public/gradientradial.svg'
import Image from "next/image";
import FAQAccordion from "@/app/components/FAQAccordion";


const FindYourAnswers = () => {
    return (
        <div id={"faq"} className={'w-full flex md:flex-row pb-16 relative flex-col text-white mt-[100px] justify-between '}>
            <div className="absolute w-full flex overflow-hidden items-center bottom-0 -z-10 top-0">
                <Image
                    className="w-[900px] mx-auto mt-[250px] h-[400px]"
                    width={679}
                    height={679}
                    src={gradientradial}
                    alt=""
                />
            </div>
            <div className={'md:w-[350px] w-full relative'}>
                <Image className={'lg:w-[250px] md:w-fit w-[150px]  right-0 top-[-150px] md:top-0 absolute md:left-0 2xl:w-[350px]'} width={317} height={348} src={questmark} alt={''}/>

            </div>
            <div className={'flex flex-col md:w-[60%]'}>
                <div className={'flex flex-col w-full'}>
                    <h4 className={'jost-bold z-20 text-[48px] text-white'}>
                        FIND YOUR

                        <br className={'sm:hidden flex'}/>
                        <span className={'text-[#FF00CC] ml-4'}>
                       ANSWERS
                    </span>
                    </h4>
                    <h5 className={'mt-[34px] w-full md:max-w-[715px] text-center sm:text-start rubik-regular text-[20px] text-white text-opacity-80'}>
                        Got questions? Our FAQ (Frequently Asked Questions) section provides quick and clear answers to the most common questions about Activate Earth. Explore now to learn how to use the platform, ways to earn, and more!
                    </h5>
                </div>
                <FAQAccordion/>
            </div>

        </div>
    );
};

export default FindYourAnswers;
