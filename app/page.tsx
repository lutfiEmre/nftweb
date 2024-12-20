"use client";

import NavBar from "@/app/components/NavBar";
import gradientbro from "../public/gradientblur.svg";
import Image from "next/image";
import TurnLife from "@/app/components/TurnLife";

import EarnFrom from "@/app/components/EarnFrom";
import Container from "@/app/components/Container";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ReachWorld from "@/app/components/ReachWorld";
import FutureMilestones from "@/app/components/FutureMilestones";
import ExploreOurOffers from "@/app/components/ExploreOurOffers";
import FindYourAnswers from "@/app/components/FindYourAnswers";
import Footer from "@/app/components/Footer";
import Interaction from "@/app/components/Interaction";
import ACTXToken from "@/app/components/ACTXToken";
import MeetTeam2 from "@/app/components/MeetTeam2";
import ExclusiveNFT2 from "@/app/components/ExclusiveNFT2";

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
        <div id={"home"} className="w-full relative z-10 h-full min-h-screen bg-violet3">

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
                <Interaction/>
            </SectionWithAnimation>


            <Container>
                <SectionWithAnimation>
                   <ACTXToken/>
                </SectionWithAnimation>

                <SectionWithAnimation>
                    <EarnFrom />
                </SectionWithAnimation>
                <SectionWithAnimation>
                    <ReachWorld/>
                </SectionWithAnimation>
                <SectionWithAnimation>
                    <ExclusiveNFT2/>
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
                    <MeetTeam2/>
                </SectionWithAnimation>
                <SectionWithAnimation>
                    <Footer/>
                </SectionWithAnimation>
            </Container>



        </div>
    );
}
