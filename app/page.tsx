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

const SectionWithAnimation = ({ children }: { children: React.ReactNode }) => {
    const [ref, inView] = useInView({
        threshold: 0.12, // Görünürlük yüzdesi
        triggerOnce: true, // Sadece bir kez tetikler
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }} // İlk durum
            animate={inView ? { opacity: 1, y: 0 } : {}} // Görünürse animasyon
            transition={{ duration: 1, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};

export default function Home() {
    return (
        <div className="w-full relative z-10 h-full min-h-screen bg-violet3">
            {/* Üst kısım */}
            <div className="relative min-h-screen w-full">
                <NavBar />
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

            {/* CounterInfo animasyonlu */}
            <SectionWithAnimation>
                <CounterInfo />
            </SectionWithAnimation>

            {/* EarnFrom animasyonlu */}
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
            </Container>

            {/* Ek boş alan */}
            <div className="w-full h-[500px]"></div>
        </div>
    );
}
