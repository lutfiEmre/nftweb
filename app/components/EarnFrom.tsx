import React from 'react';

const EarnFrom = () => {
    return (
        <div className={'text-white flex flex-col gap-[80px] mt-[128px]'}>
            <div className={'flex flex-col gap-[16px]'}>
                <div className={'flex flex-col justify-center text-center items-center'}>
                    <h4 className={'jost-bold text-[48px] text-white'}>
                        Earn from Everyday
                        <br/>
                        <span className={'text-[#FF00CC]'}>
                        Activities
                    </span>
                    </h4>
                </div>
                <p className={'rubik-regular text-center text-white text-opacity-80 text-[20px]'}>
                    On the Activate Earth platform, turning your daily habits into an earning experience has never been easier. Whether you watch, read, or write, every interaction rewards you. Here are six different ways you can earn:
                </p>
            </div>
            <div className={'mt-[111px] gap-x-[64px] gap-y-[120px] grid md:grid-cols-2 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3'}>
                <div className={'flex flex-col gap-[16px]'}>
                    <h4 className={'jost-semibold uppercase text-white text-[36px]'}>
                        ACT TO EARN
                    </h4>
                    <h6 className={'rubik-regular   text-white text-[18px]'}>
                        Create your own world and earn rewards by completing tasks! Turn your daily routines into fun challenges, and with each step you complete, boost your wallet. Just take action and claim your rewards!
                    </h6>
                </div>
                <div className={'flex flex-col gap-[16px]'}>
                    <h4 className={'jost-semibold uppercase text-white text-[36px]'}>
                        WATCH TO EARN
                    </h4>
                    <h6 className={'rubik-regular   text-white text-[18px]'}>
                        How about earning while watching? Enjoy your favorite videos and live streams, while every moment brings you closer to earning. Spend time in the world of entertainment and gain passive income – the more you watch, the more you earn!
                    </h6>
                </div>
                <div className={'flex flex-col gap-[16px]'}>
                    <h4 className={'jost-semibold uppercase text-white text-[36px]'}>
                        LEARN TO EARN
                    </h4>
                    <h6 className={'rubik-regular   text-white text-[18px]'}>
                        Imagine a world where learning makes you money! Discover Web3, blockchain, and more, while each new piece of knowledge rewards you. This is the most exciting way to grow both your skills and your earnings!                    </h6>
                </div>
                <div className={'flex flex-col gap-[16px]'}>
                    <h4 className={'jost-semibold uppercase text-white text-[36px]'}>
                        READ TO EARN
                    </h4>
                    <h6 className={'rubik-regular   text-white text-[18px]'}>
                        How does earning as you read sound? Dive into engaging articles, blogs, and news while growing both your knowledge and your income. Every page offers you a new opportunity!
                    </h6>
                </div>
                <div className={'flex flex-col gap-[16px]'}>
                    <h4 className={'jost-semibold uppercase text-white text-[36px]'}>
                        LISTEN TO EARN
                    </h4>
                    <h6 className={'rubik-regular   text-white text-[18px]'}>
                        Earn while you listen! Whether its music, podcasts, or audiobooks, theres a world of content waiting for you. Plug in, relax, and watch your wallet grow with every listen.
                    </h6>
                </div>
                <div className={'flex flex-col gap-[16px]'}>
                    <h4 className={'jost-semibold uppercase text-white text-[36px]'}>
                        WRITE TO EARN
                    </h4>
                    <h6 className={'rubik-regular   text-white text-[18px]'}>
                        Share your ideas and earn while you write! From blog posts to articles and short texts, unleash your creativity. With every word, contribute to the community and receive rewards in return.
                    </h6>
                    </div>
            </div>
        </div>
    );
};

export default EarnFrom;
