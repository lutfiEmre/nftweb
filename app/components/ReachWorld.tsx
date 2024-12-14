import React from 'react';
import Image from "next/image";
import worldsvg from '../../public/world.svg';
import { motion } from "framer-motion";
import Link from "next/link";

const ReachWorld: React.FC = () => {
    return (
        <div className="mt-[128px] flex flex-col lg:flex-row justify-center items-center gap-[80px]">
            <Image className={'w-[90vw] h-full  max-w-[250px] sm:max-w-[500px] rotate-animation md:w-[350px] lg:w-[765px] max-h-[500px] lg:h-[483px]'} width={765} height={483} src={worldsvg} alt={'world svg'}/>
            <div className={'flex flex-col gap-[16px]'}>
                <h3 className={'inter-semibold  text-center sm:text-start  text-[#FF00CC] text-[18px]'}>
                    Reach the Whole World
                </h3>
                <h2 className={'jost-semibold   text-center sm:text-start  text-white text-[36px]'}>
                    Reach Global Audiences with Innovative Advertising on Activate Earth
                </h2>
                <h5 className={'mt-[34px] text-center sm:text-start rubik-regular text-[20px] text-white text-opacity-80'}>
                    Activate Earth is an innovative platform where brands can create ads that reach a global audience. With an experience-based advertising approach, you can design interactive activities that directly engage users. This platform not only surpasses traditional advertising methods but also creates memorable brand experiences by offering interactive engagements. Supported by Web3 technology and NFTs, this ecosystem makes your campaigns more creative and measurable while allowing easy access to a global community.
                </h5>
                <motion.div
                    className="py-[12px] mt-[34px] text-center md:w-fit px-[30px] bg2 cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link href="https://app.activ8earth.com" className="rubik-medium text-[16px] text-white">Reach the World</Link>
                </motion.div>
            </div>
        </div>
    );
};

export default ReachWorld;
