"use client";

import NavBar from "@/app/components/NavBar";
import gradientbro from "../public/gradientblur.svg";
import Image from "next/image";
import TurnLife from "@/app/components/TurnLife";
import CounterInfo from "@/app/components/CounterInfo";
import EarnFrom from "@/app/components/EarnFrom";
import Container from "@/app/components/Container";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ReachWorld from "@/app/components/ReachWorld";
import ExclusiveNFT from "@/app/components/ExclusiveNFT";
import FutureMilestones from "@/app/components/FutureMilestones";
import ExploreOurOffers from "@/app/components/ExploreOurOffers";
import FindYourAnswers from "@/app/components/FindYourAnswers";
import MeetTeam from "@/app/components/MeetTeam";
import Footer from "@/app/components/Footer";
import Head from "next/head";
const SectionWithAnimation = ({ children }: { children: React.ReactNode }) => {
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}} //
            transition={{ duration: 1, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};

export default function Home() {
    return (
        <div className="w-full relative z-10 h-full min-h-screen bg-violet3">
            <Head>
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
            </Head>
            <NavBar/>
            <div className="relative min-h-screen w-full">
                <Container>
                    <SectionWithAnimation>
                        <TurnLife />
                    </SectionWithAnimation>
                </Container>
                <div className="absolute right-0 -z-10 top-[-40vh]">
                    <Image
                        className="w-[400px] h-auto"
                        width={679}
                        height={679}
                        src={gradientbro}
                        alt=""
                    />
                </div>
            </div>


            <SectionWithAnimation>
                <CounterInfo />
            </SectionWithAnimation>


            <Container>
                <SectionWithAnimation>
                    <EarnFrom />
                </SectionWithAnimation>
                <SectionWithAnimation>
                    <ReachWorld/>
                </SectionWithAnimation>
                <SectionWithAnimation>
                    <ExclusiveNFT/>
                </SectionWithAnimation>
                <SectionWithAnimation>
                    <FutureMilestones/>
                </SectionWithAnimation>
                <SectionWithAnimation>
                    <ExploreOurOffers/>
                </SectionWithAnimation>
                <SectionWithAnimation>
                    <FindYourAnswers/>
                </SectionWithAnimation>
                <SectionWithAnimation>
                    <MeetTeam/>
                </SectionWithAnimation>
                <SectionWithAnimation>
                    <Footer/>
                </SectionWithAnimation>
            </Container>



        </div>
    );
}
