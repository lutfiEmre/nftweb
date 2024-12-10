import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

const ProfileCard = () => {
    const teamMembers = [
        {
            img: { src: "/kemal.svg", width: 290, height: 116, alt: "Kemal" },
            name: "Kemal Konuklar",
            jobTitle: "Founder & Team Lead",
            socialMedia: [
                { platform: "Telegram", icon: "/telegram-icon.svg", link: "https://t.me/username" },
                { platform: "Twitter", icon: "/twitter-icon.svg", link: "https://twitter.com/username" },
                { platform: "Instagram", icon: "/instagram-icon.svg", link: "https://instagram.com/username" },
            ],
        },
        {
            img: { src: "/rifat.svg", width: 290, height: 116, alt: "Rıfat" },
            name: "Rıfat Sezgin",
            jobTitle: "Project Manager",
            socialMedia: [
                { platform: "Telegram", icon: "/telegram-icon.svg", link: "https://t.me/username" },
                { platform: "Twitter", icon: "/twitter-icon.svg", link: "https://twitter.com/username" },
                { platform: "Instagram", icon: "/instagram-icon.svg", link: "https://instagram.com/username" },
            ],
        },
        {
            img: { src: "/sinan.svg", width: 290, height: 116, alt: "Sinan" },
            name: "Sinan Artun",
            jobTitle: "Lead Developer",
            socialMedia: [
                { platform: "Telegram", icon: "/telegram-icon.svg", link: "https://t.me/username" },
                { platform: "Twitter", icon: "/twitter-icon.svg", link: "https://twitter.com/username" },
                { platform: "Instagram", icon: "/instagram-icon.svg", link: "https://instagram.com/username" },
            ],
        },
        {
            img: { src: "/emre.svg", width: 290, height: 116, alt: "Emre" },
            name: "Emre Lütfi",
            jobTitle: "Senior Developer",
            socialMedia: [
                { platform: "Telegram", icon: "/telegram-icon.svg", link: "https://t.me/username" },
                { platform: "Twitter", icon: "/twitter-icon.svg", link: "https://twitter.com/username" },
                { platform: "Instagram", icon: "/instagram-icon.svg", link: "https://instagram.com/username" },
            ],
        },
        {
            img: { src: "/okta.svg", width: 290, height: 116, alt: "Deniz" },
            name: "Deniz Bugatov",
            jobTitle: "Data Scientist",
            socialMedia: [
                { platform: "Telegram", icon: "/telegram-icon.svg", link: "https://t.me/username" },
                { platform: "Twitter", icon: "/twitter-icon.svg", link: "https://twitter.com/username" },
                { platform: "Instagram", icon: "/instagram-icon.svg", link: "https://instagram.com/username" },
            ],
        },
        {
            img: { src: "/kemal.svg", width: 290, height: 116, alt: "Oktay" },
            name: "Oktay Çavuşoğlu",
            jobTitle: "Marketing Lead",
            socialMedia: [
                { platform: "Telegram", icon: "/telegram-icon.svg", link: "https://t.me/username" },
                { platform: "Twitter", icon: "/twitter-icon.svg", link: "https://twitter.com/username" },
                { platform: "Instagram", icon: "/instagram-icon.svg", link: "https://instagram.com/username" },
            ],
        },
        {
            img: { src: "/sinan.svg", width: 290, height: 116, alt: "Svetlana" },
            name: "Svetlana Ryzhova",
            jobTitle: "Community Management",
            socialMedia: [
                { platform: "Telegram", icon: "/telegram-icon.svg", link: "https://t.me/username" },
                { platform: "Twitter", icon: "/twitter-icon.svg", link: "https://twitter.com/username" },
                { platform: "Instagram", icon: "/instagram-icon.svg", link: "https://instagram.com/username" },
            ],
        },
        {
            img: { src: "/emre.svg", width: 290, height: 116, alt: "Sude" },
            name: "Sude Akarsu",
            jobTitle: "Online Communications Director",
            socialMedia: [
                { platform: "Telegram", icon: "/telegram-icon.svg", link: "https://t.me/username" },
                { platform: "Twitter", icon: "/twitter-icon.svg", link: "https://twitter.com/username" },
                { platform: "Instagram", icon: "/instagram-icon.svg", link: "https://instagram.com/username" },
            ],
        },
        {
            img: { src: "/okta.svg", width: 290, height: 116, alt: "Doğuş" },
            name: "Doğuş Coşkun",
            jobTitle: "Financial Analyst",
            socialMedia: [
                { platform: "Telegram", icon: "/telegram-icon.svg", link: "https://t.me/username" },
                { platform: "Twitter", icon: "/twitter-icon.svg", link: "https://twitter.com/username" },
                { platform: "Instagram", icon: "/instagram-icon.svg", link: "https://instagram.com/username" },
            ],
        },
        {
            img: { src: "/kemal.svg", width: 290, height: 116, alt: "Güney" },
            name: "Güney Gürışık",
            jobTitle: "Financial Management",
            socialMedia: [
                { platform: "Telegram", icon: "/telegram-icon.svg", link: "https://t.me/username" },
                { platform: "Twitter", icon: "/twitter-icon.svg", link: "https://twitter.com/username" },
                { platform: "Instagram", icon: "/instagram-icon.svg", link: "https://instagram.com/username" },
            ],
        },
        {
            img: { src: "/sinan.svg", width: 290, height: 116, alt: "Eren" },
            name: "Eren Erdem",
            jobTitle: "Legal Advisor",
            socialMedia: [
                { platform: "Telegram", icon: "/telegram-icon.svg", link: "https://t.me/username" },
                { platform: "Twitter", icon: "/twitter-icon.svg", link: "https://twitter.com/username" },
                { platform: "Instagram", icon: "/instagram-icon.svg", link: "https://instagram.com/username" },
            ],
        },
        {
            img: { src: "/emre.svg", width: 290, height: 116, alt: "Büke" },
            name: "Büke Özer",
            jobTitle: "Art Director",
            socialMedia: [
                { platform: "Telegram", icon: "/telegram-icon.svg", link: "https://t.me/username" },
                { platform: "Twitter", icon: "/twitter-icon.svg", link: "https://twitter.com/username" },
                { platform: "Instagram", icon: "/instagram-icon.svg", link: "https://instagram.com/username" },
            ],
        },
        {
            img: { src: "/okta.svg", width: 290, height: 116, alt: "Betül" },
            name: "Betül Tuğran",
            jobTitle: "Marketing Specialist",
            socialMedia: [
                { platform: "Telegram", icon: "/telegram-icon.svg", link: "https://t.me/username" },
                { platform: "Twitter", icon: "/twitter-icon.svg", link: "https://twitter.com/username" },
                { platform: "Instagram", icon: "/instagram-icon.svg", link: "https://instagram.com/username" },
            ],
        },
    ];

    return (
        <div className="mt-[100px]">
            <Swiper
                spaceBetween={20}
                slidesPerView={2}
                breakpoints={{
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 5 },
                }}
                pagination={{ clickable: true }}
                navigation={true}
                className="mySwiper"
            >
                {teamMembers.map((member, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-fit overflow-hidden rounded-[10px] h-[298px] flex flex-col">
                            <div className="bg-[#350332] w-full rounded-t-[10px] h-[50%]">
                                <Image
                                    className="h-full object-cover"
                                    src={member.img.src}
                                    width={member.img.width}
                                    height={member.img.height}
                                    alt={member.img.alt}
                                />
                            </div>
                            <div className="bg-[#5F115A] gap-[8px] flex flex-col w-full justify-center items-center rounded-b-[10px] h-[70%]">
                                <h6 className="text-white leading-7 text-center rubik-medium lg:text-[18px] xl:text-[24px]">
                                    {member.name}
                                </h6>
                                <h6 className="text-white text-center font-light text-[16px]">
                                    {member.jobTitle}
                                </h6>
                                <div className="mt-[12px] flex flex-row gap-[24px]">
                                    {member.socialMedia.map((social, idx) => (
                                        <a
                                            key={idx}
                                            href={social.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-[32px] h-[32px] rounded-[4px] flex justify-center items-center cursor-pointer border-[#FF00CC] hover:bg-[#FF00CC] border-[1px]"
                                        >
                                            <Image
                                                src={social.icon}
                                                alt={social.platform}
                                                width={16}
                                                height={16}
                                            />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ProfileCard;
